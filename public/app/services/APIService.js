let APIService = angular.module('APIService', []);

APIService.factory('api', ['$http', 'calculations', function($http, calculations){
	let firstHalfPL = 0;
	let secondHalfPL = 0;
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
			this.expenseCollection.forEach(function(expense){
				if (expense.date <= 15) {
					expense.type == "Expense" ? firstHalfPL -= expense.amount : firstHalfPL += expense.amount
				} else {
					expense.type == "Expense" ? secondHalfPL -= expense.amount : secondHalfPL += expense.amount
				}
			}.bind(this));
			calculations.calculateValues(firstHalfPL, secondHalfPL)
		},
		getCollection: function(){
			return this.expenseCollection
		},
		getFirstHalfPL: function(){
			return firstHalfPL
		},
		getSecondHalfPL: function(){
			return secondHalfPL
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
		calculateValues: function(firstHalfPL, secondHalfPL){
			this.calculatedArray.length = 0;
			//building out the collection for the projections - 10 projections built
			if (firstHalfPL && secondHalfPL){
				this.firstHalfPL = firstHalfPL;
				this.secondHalfPL = secondHalfPL;
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
		        if (i == 0 && dateNumber == 1) {
		            projectionAmount = this.amount + this.firstHalfPL
		        } else if (i == 0 && dateNumber == 15) {
		            projectionAmount = this.amount + this.secondHalfPL
		        } else if (dateNumber == 1) {
		            projectionAmount = this.calculatedArray[i-1].amount + this.firstHalfPL
		        } else {
		            projectionAmount = this.calculatedArray[i-1].amount + this.secondHalfPL
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