'use strict';

var app = angular.module('hotelApp', ['ngRoute','ui.bootstrap']);

app
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/home', {templateUrl: 'template/home.html', controller: 'hotelCtrl'});
		$routeProvider.otherwise({redirectTo: '/home'});
	}]);


app.config([function () {
    console.log('Configuraiton...');
}]);
