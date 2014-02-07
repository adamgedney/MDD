'use strict';



//this controller just allows the button click to function
//<button ng-click="actionTime()"></button>
angular.module('pigeonsApp')
	.controller('ProjectDetail', function($scope, $routeParams){

		var title = $routeParams.title;
		$scope.itemTitle = title;

		console.log($routeParams.title, 'loading Detail');

	});