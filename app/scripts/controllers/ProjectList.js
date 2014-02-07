'use strict';



//this controller just allows the button click to function
//<button ng-click="actionTime()"></button>
angular.module('pigeonsApp')
	.controller('ProjectList', ['$scope', 'FireConn', function ($scope, FireConn){

		$scope.user = {title : 'My Name is Adam, and I Like ', titleWhite : 'Pigeons.'};

		FireConn.$bind($scope, 'remoteData');

		$scope.saveData = function(){
			$scope.remoteData.activeUser = $scope.user;
		};

	}]);