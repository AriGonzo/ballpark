let app = angular.module('HomeApp', ['APIService', 'ExpenseModule']);

app.controller('HomeCtrl', function(api){
	this.collection = api.getCollection();
	api.getExpenses();
});