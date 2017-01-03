let expenseModule = angular.module('ExpenseModule', ['DirectiveCollection', 'APIService']);

expenseModule.component('expenseDisplay', {
  templateUrl: 'templates/expenseDisplay.html',
  controller: function(api){
  	this.api = api;
  },
  bindings: {
    expense: "="
  }
});