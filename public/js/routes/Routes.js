angular.module('AppRoutes', ['ngAnimate', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    
	$stateProvider
	.state('form', {
		url : '/form',
		templateUrl : '/views/form.html',
		controller : 'formController'
	})
	.state('form.profile', {
		url : '/profile',
		templateUrl : '/views/step1.html'
	})
	.state('form.address', {
		url : '/address',
		templateUrl : '/views/step2.html'
	})
	.state('form.member', {
		url : '/member',
		templateUrl : '/views/step3.html'
	});
	$urlRouterProvider.otherwise('/form/profile');
});
/*	.config(['$routeProvider', '$locationProvider', routes]);

function routes($routeProvider, $locationProvider) {
	
	$routeProvider
		.when('/', {
			templateUrl : '/views/step1.html'//,
			//controller : 'formController'
		})
		.when('/step2', {
			templateUrl : '/views/step2.html'//,
			//controller : 'formController'
		});
	$locationProvider.html5Mode(true);
}*/
