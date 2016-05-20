var app = angular.module('app', ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/', {
		templateUrl: src.templates + 'home.html',
		controller: 'Main'
	});
});

app.controller('Main', function() {
	console.log('Main file loaded.');
});
