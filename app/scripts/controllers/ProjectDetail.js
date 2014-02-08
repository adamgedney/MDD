'use strict';



//this controller just allows the button click to function
//<button ng-click="actionTime()"></button>
angular.module('pigeonsApp')
	.controller('ProjectDetail', ['$scope', '$routeParams', function($scope, $routeParams){

		//sets the detail template <h2> to reflect the title
		//passed in a route paramter
		$scope.itemTitle = $routeParams.title;

		// console.log(FireConn,  'non loop');
	}]);