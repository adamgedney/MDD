'use strict';

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




