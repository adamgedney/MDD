'use strict';

/*global Firebase*/
angular.module('pigeonsApp')
	.factory('FireConn', ['$firebase', function ($firebase) {
		var url = 'https://pigeons.firebaseio.com/',
			ref = new Firebase(url);

		return $firebase(ref);
	}]);