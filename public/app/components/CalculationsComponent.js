let calculationsModule = angular.module('CalculationsModule', ['DirectiveCollection', 'APIService']);

calculationsModule.component('calculationsDisplay', {
  templateUrl: 'templates/calculationsDisplay.html',
  controller: function(api, calculations){
    const that = this;
    this.calculatedArray = [];
    this.calculations = calculations;
  }
});