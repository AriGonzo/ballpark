let app = angular.module('HomeApp', ['APIService', 'ExpenseModule', 'CalculationsModule', 'ngAnimate']);

app.controller('HomeCtrl', function(api){
	this.collection = api.expenseCollection;
	this.firstHalfPL = api.getFirstHalfPL;
	this.secondHalfPL = api.getSecondHalfPL;
	this.api = api;
	api.getExpenses();

	let that = this;

	this.greaterThan = function(prop, val){
	    return function(item){
	      return item[prop] > val;
	    }
	}
	this.lessThan = function(prop, val){
	    return function(item){
	      return item[prop] < val;
	    }
	}
});