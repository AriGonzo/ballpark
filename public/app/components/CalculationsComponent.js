let calculationsModule = angular.module('CalculationsModule', ['DirectiveCollection', 'APIService']);

calculationsModule.component('calculationsDisplay', {
  templateUrl: 'templates/calculationsDisplay.html',
  controller: function(api, calculations){
    this.collection = api.expenseCollection;
    this.collectionArray = [];
    let dateIndex = new Date().getMonth();
    let todaysDate = new Date().getDate();

    for (let i = 0; i < 10; i++) {
    	let dateNumber, iteratorMonth, monthIndex;

    	//Logic to determine whether its mid or beginning of the month
    	if ((todaysDate < 15 && i == 0) || (this.collectionArray[i-1] && this.collectionArray[i-1].date == 1)) {
    		dateNumber = 15
    	} else if ((todaysDate > 15 && i == 0) || (this.collectionArray[i-1] && this.collectionArray[i-1].date == 15)) {
    		dateNumber = 1
    	}

		//Logic to determine what month to display
    	if (i == 0) {
    		iteratorMonth = calculations.months[dateIndex]
    		monthIndex = dateIndex
    	} else if (this.collectionArray[i-1].date == 1) {
    		monthIndex = this.collectionArray[i-1].monthIndex
    		iteratorMonth = this.collectionArray[i-1].month
    	} else {
    		monthIndex = this.collectionArray[i-1].monthIndex == 11 ? 0 : this.collectionArray[i-1].monthIndex + 1
    		iteratorMonth = calculations.months[monthIndex]
    	}

    	let collectionObj = {
    		date: dateNumber,
    		month: iteratorMonth,
    		monthIndex: monthIndex
    	}
    	this.collectionArray.push(collectionObj)
    	console.log(`${iteratorMonth} ${dateNumber}`)
    }
  }
});