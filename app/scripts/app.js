'use strict';

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
