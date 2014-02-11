'use strict';



//This controller handles the detail page and Firebase child querying
//on the Firebase id as a routeparam
angular.module('pigeonsApp')
	.controller('ProjectDetail', ['$scope', '$routeParams', 'FireConn', function($scope, $routeParams, FireConn){

		//sets the detail template content to reflect the firebase data
		//retrieved by querying on the passed in route parameter
		$scope.article = FireConn.$child($routeParams.id);

	}]);