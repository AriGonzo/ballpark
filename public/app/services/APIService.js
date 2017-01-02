let APIService = angular.module('APIService', []);

APIService.factory('api', ['$http', function($http){
	return {
		expenseCollection: [],
		getExpenses: function(){
			$http.get('/expenses').then(function(response){
				this.expenseCollection.push.apply(this.expenseCollection, response.data)
			}.bind(this));
		},
		newExpense: function(model){
			$http.post('/expense', {expense: model}).then(function(){
				this.expenseCollection.push(model);
			}.bind(this));
		},
		getCollection: function(){
			return this.expenseCollection
		}
	}
}]);

APIService.factory('calculations', ['$http', function($http){
	return {
		amountInAccount: null,
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		getAccountBalance: function(){

		},
		calculateValues: function(){
			
		}
	}
}]);