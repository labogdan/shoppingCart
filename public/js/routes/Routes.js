angular.module('AppRoutes', [])
	.config(['$routeProvider', '$locationProvider', routes]);

function routes($routeProvider, $locationProvider) {
	
	$routeProvider
		.when('/', {
			templateUrl : '/views/step1.html',
			controller : 'formController'
		})
		.when('/step2', {
			templateUrl : '/views/step2.html',
			controller : 'formController'
		});
	$locationProvider.html5Mode(true);
}