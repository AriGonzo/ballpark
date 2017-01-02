let NavModule = angular.module('NavModule', ['ngMaterial', 'NewExpenseModule']);

NavModule.component('navbar', {
  templateUrl: 'templates/navbar.html',
  controller: function($mdSidenav){
  	this.openSideNav = function(){
        $mdSidenav('right').toggle()
  	};
  }
});

