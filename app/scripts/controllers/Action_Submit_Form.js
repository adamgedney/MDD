'use strict';

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