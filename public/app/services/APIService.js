let APIService = angular.module('APIService', []);

APIService.factory('api', ['$http', 'calculations', function($http, calculations){
	let firstHalfPL = 0;
	let secondHalfPL = 0;
	let firstHalfPLPaid = 0;
	let secondHalfPLPaid = 0;
	return {
		expenseCollection: [],
		getExpenses: function(){
			$http.get('/expenses').then(function(response){
				this.expenseCollection.push.apply(this.expenseCollection, response.data)
				this.setPL();
			}.bind(this));
		},
		newExpense: function(model){
			$http.post('/expense', {expense: model}).then(function(){
				this.expenseCollection.push(model);
			}.bind(this));
		},
		setPL: function(){
			firstHalfPL = 0;
			firstHalfPLPaid = 0;
			secondHalfPL = 0;
			secondHalfPLPaid = 0;
			this.expenseCollection.forEach(function(expense){
				if (expense.date <= 15) {
					expense.type == "Expense" ? firstHalfPL -= expense.amount : firstHalfPL += expense.amount
					if (!expense.paid && expense.type == "Expense") {
						firstHalfPLPaid -= expense.amount;
					} else if (expense.type == "Income") {
						firstHalfPLPaid += expense.amount;
					}
				} else {
					expense.type == "Expense" ? secondHalfPL -= expense.amount : secondHalfPL += expense.amount
					if (!expense.paid && expense.type == "Expense") {
						secondHalfPLPaid -= expense.amount;
					} else if (expense.type == "Income") {
						secondHalfPLPaid += expense.amount;
					}
				}
			}.bind(this));
			console.log(secondHalfPLPaid)
			calculations.calculateValues(firstHalfPL, secondHalfPL, firstHalfPLPaid, secondHalfPLPaid)
		},
		getCollection: function(){
			return this.expenseCollection
		},
		getFirstHalfPL: function(){
			return firstHalfPL
		},
		getSecondHalfPL: function(){
			return secondHalfPL
		},
		togglePaid: function(model){
			let idx = this.expenseCollection.indexOf(model);
			this.expenseCollection[idx].paid = !this.expenseCollection[idx].paid;
			this.setPL();
		},
		removeExpense: function(model){
			let idx = this.expenseCollection.indexOf(model);
			this.expenseCollection.splice(idx, 1);
			this.setPL();
		}
	}
}]);

APIService.factory('calculations', ['$http', function($http){
    let dateIndex = new Date().getMonth();
    let todaysDate = new Date().getDate();
    let amount = 0;
	return {
		amountInAccount: null,
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		calculatedArray: [],
		amount: 0,
		getAccountBalance: function(){
		},
		calculateValues: function(firstHalfPL, secondHalfPL, firstHalfPLPaid, secondHalfPLPaid){
			this.calculatedArray.length = 0;
			//building out the collection for the projections - 10 projections built
			if (firstHalfPL && secondHalfPL && firstHalfPLPaid && secondHalfPLPaid){
				this.firstHalfPL = firstHalfPL;
				this.secondHalfPL = secondHalfPL;
				this.firstHalfPLPaid = firstHalfPLPaid;
				this.secondHalfPLPaid = secondHalfPLPaid;
			}
		    for (let i = 0; i < 10; i++) {
		    	let dateNumber, iteratorMonth, monthIndex, projectionAmount;

		    	//Logic to determine whether its mid or beginning of the month
		    	if ((todaysDate < 15 && i == 0) || (this.calculatedArray[i-1] && this.calculatedArray[i-1].date == 1)) {
		    		dateNumber = 15
		    	} else if ((todaysDate > 15 && i == 0) || (this.calculatedArray[i-1] && this.calculatedArray[i-1].date == 15)) {
		    		dateNumber = 1
		    	}

				//Logic to determine what month to display
		    	if (i == 0) {
		    		iteratorMonth = this.months[dateIndex]
		    		monthIndex = dateIndex
		    	} else if (this.calculatedArray[i-1].date == 1) {
		    		monthIndex = this.calculatedArray[i-1].monthIndex
		    		iteratorMonth = this.calculatedArray[i-1].month
		    	} else {
		    		monthIndex = this.calculatedArray[i-1].monthIndex == 11 ? 0 : this.calculatedArray[i-1].monthIndex + 1
		    		iteratorMonth = this.months[monthIndex]
		    	}

		        //Logic to factor projection amount
		        if (i == 0) {
		        	if (dateNumber == 1) {
		        		projectionAmount = this.amount + this.secondHalfPLPaid
		        	} else {
		        		projectionAmount = this.amount + this.firstHalfPLPaid
		        	}
		        } else if (i == 1) {
		        	if (dateNumber == 1) {
		        		projectionAmount = this.secondHalfPLPaid + this.calculatedArray[i-1].amount
		        	} else {
		        		projectionAmount = this.firstHalfPLPaid + this.calculatedArray[i-1].amount
		        	}
		        } else if (dateNumber == 1) {
		            projectionAmount = this.calculatedArray[i-1].amount + this.secondHalfPL
		        } else {
		        	projectionAmount = this.calculatedArray[i-1].amount + this.firstHalfPL
		        }

		    	let collectionObj = {
		    		date: dateNumber,
		    		month: iteratorMonth,
		    		monthIndex: monthIndex,
		            amount: projectionAmount
		    	}
		    	this.calculatedArray.push(collectionObj);
		    }
		},
		getCalculatedArray: function(){
			return this.calculatedArray
		},
		adjustProjections(amount){
			amount = amount || 0;
			this.amount = parseInt(amount);
			this.calculateValues();
		}
	}
}]);