let newExpenseModule = angular.module('NewExpenseModule', ['DirectiveCollection', 'APIService', 'ngMaterial']);

newExpenseModule.component('newExpense', {
  templateUrl: 'templates/newExpenseInput.html',
  controller: function(api, $mdSidenav){
    this.arrayOfNumbers = [];
  	this.buildArrayOfNumbers = function(){
  		for (let i = 1; i < 32; i++) {
  			this.arrayOfNumbers.push(i);
  		}
  	};
  	this.buildArrayOfNumbers();

  	this.submitExpense = function(model){
  		api.newExpense(model);
  		this.closeSideNav();
  	};

  	this.closeSideNav = function(){
  		this.model = {};
  		$mdSidenav('right').toggle()
  	}
  },
  bindings: {
    expense: "="
  }
});