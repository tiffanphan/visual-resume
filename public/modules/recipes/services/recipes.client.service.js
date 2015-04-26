'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('recipes').factory('Recipes', ['$resource',
	function($resource) {
		return $resource('recipes/:recipeId', {
			articleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);