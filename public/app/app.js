let appRouter = angular.module('ballpark', [
	'ui.router',
	'HomeApp',
	'NavModule',
    'ngAnimate'
	]);

appRouter.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: '../templates/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $urlRouterProvider.otherwise('/');
});