'use strict';



//This controller handles the main template,
//Firebase item getting and binding to scope

angular.module('pigeonsApp')
	.controller('ProjectList', ['$scope', 'FireConn', function ($scope, FireConn){

		$scope.user = {title : 'My Name is Adam, and I Like ', titleWhite : 'Pigeons.'};

		//firebase data
		//$bind introduces reload issues where the article
		//ng-repeat won't populate on reload
		//using $scope.articles to hack it
		$scope.articles = FireConn;



	}]);