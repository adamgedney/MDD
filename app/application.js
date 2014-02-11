"use strict";
/*! pigeons - v0.0.0 - 2014-02-11 */
// Source: app/scripts/app.js
/* global Firebase */
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
    .when('/detail/:id', {//adds route parameters to url
      templateUrl : 'views/detail.tpl',
      controller : 'ProjectDetail'
    })
    .when('/admin', {
      templateUrl : 'views/admin.tpl',
      controller : 'Action_Submit_Form'
    });
});





App.run(['$firebaseSimpleLogin', '$rootScope', function($firebaseSimpleLogin, $rootScope){

    //reference to firebase
    var db = new Firebase('https://pigeons.firebaseio.com');

    //sets up simple login
    $rootScope.loginObject = $firebaseSimpleLogin(db);

  }]);





// Source: app/scripts/controllers/Action_Submit_Form.js
//This controller handles the form submit action
//it send an object to the Firebase database upon submit
angular.module('pigeonsApp')
	.controller('Action_Submit_Form', ['$scope', 'FireConn', function ($scope, FireConn){

		//binds to Firebase as 'db' in the $scope
		//?? do I need to switch db to article?
		FireConn.$bind($scope, 'db');

		//sets data to firebase
		//called from admin.tpl form
		$scope.setData = function(){

			//sets data to an article object in database
			//from the article object created in the admin
			//template scope form input field ng-model directives
			FireConn.$add($scope.article); // This is the working, non-structured add. Save for proj requirements
			// FireConn.$save('articles');

			location.reload();
		};// setData


	}]);
// Source: app/scripts/controllers/ProjectDetail.js
//This controller handles the detail page and Firebase child querying
//on the Firebase id as a routeparam
angular.module('pigeonsApp')
	.controller('ProjectDetail', ['$scope', '$routeParams', 'FireConn', function($scope, $routeParams, FireConn){

		//sets the detail template content to reflect the firebase data
		//retrieved by querying on the passed in route parameter
		$scope.article = FireConn.$child($routeParams.id);

	}]);
// Source: app/scripts/controllers/ProjectList.js
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
		var url = 'https://pigeons.firebaseio.com',
			ref = new Firebase(url);

		return $firebase(ref);
	}]);