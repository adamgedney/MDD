'use strict';

/*global Firebase*/
angular.module('pigeonsApp')
	.factory('FireConn', ['$firebase', function ($firebase) {
		var url = 'https://adamgedney.firebaseIO.com',
			ref = new Firebase(url);

		return $firebase(ref);
	}]);