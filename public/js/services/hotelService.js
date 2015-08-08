'use strict';

app.factory('hotelService', function($http, $location) {
	var path = 'data/';
	return {
		refresh: function() {
			var $promise = $http.get('data/hotels.json');
			return $promise;
		}
	}
});

