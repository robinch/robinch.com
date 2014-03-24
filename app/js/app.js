angular.module('robinchApp', [
	'ngRoute',
	'ui.bootstrap'
	])
.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller:'',
		templateUrl:'app/partials/startView.html'
	})
	.when('/second', {
		controller:'',
		templateUrl: 'app/partials/secondView.html'
	})
	.otherwise({
		redirectTo:'/'
	})
})