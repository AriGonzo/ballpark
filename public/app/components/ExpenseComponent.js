let expenseModule = angular.module('ExpenseModule', ['DirectiveCollection']);

expenseModule.component('expenseDisplay', {
  templateUrl: 'templates/expenseDisplay.html',
  controller: function(){
    
  },
  bindings: {
    expense: "="
  }
});