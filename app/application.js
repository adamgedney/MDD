"use strict";
/*! pigeons - v0.0.0 - 2014-02-06 */
// Source: app/scripts/app.js
var App = angular.module('pigeonsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]);

//routes
App.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl : 'views/main.tpl',
      controller : 'ProjectList'
    })
    .when('/detail/:title', {//adds a detectable value to the url
      templateUrl : 'views/detail.tpl',
      controller : 'ProjectDetail'
    });
});

// Source: app/scripts/controllers/ProjectDetail.js
//this controller just allows the button click to function
//<button ng-click="actionTime()"></button>
angular.module('pigeonsApp')
	.controller('ProjectDetail', function($scope, $routeParams){

		var title = $routeParams.title;
		$scope.itemTitle = title;

		console.log($routeParams.title, 'loading Detail');

	});
// Source: app/scripts/controllers/ProjectList.js
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
// Source: app/scripts/controllers/main.js
//used for Karma unit testing
angular.module('pigeonsApp')
	.controller('MainCtrl', ['$scope', 'FireConn', function ($scope, FireConn) {


		$scope.classTitle = 'MDD';
		$scope.awesomeThings = [ 'HTML5 Boilerplate', 'AngularJS', 'Karma' ];

		console.log(FireConn);
	}]);





// Source: app/scripts/services/factory.js
/*global Firebase*/
angular.module('pigeonsApp')
	.factory('FireConn', ['$firebase', function ($firebase) {
		var url = 'https://adamgedney.firebaseIO.com',
			ref = new Firebase(url);

		return $firebase(ref);
	}]);