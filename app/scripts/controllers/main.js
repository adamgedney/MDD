'use strict';


//used for Karma unit testing
angular.module('pigeonsApp')
	.controller('MainCtrl', ['$scope', 'FireConn', function ($scope, FireConn) {


		$scope.classTitle = 'MDD';
		$scope.awesomeThings = [ 'HTML5 Boilerplate', 'AngularJS', 'Karma' ];

		console.log(FireConn);
	}]);




