'use strict';



//this controller just allows the button click to function
//<button ng-click="actionTime()"></button>
angular.module('pigeonsApp')
	.controller('ProjectDetail', ['$scope', '$routeParams', 'FireConn', function($scope, $routeParams, FireConn){

		//sets the detail template content to reflect the fb data
		//retrieved by querying on the passed in route parameter
		$scope.article = FireConn.$child($routeParams.id);

	}]);