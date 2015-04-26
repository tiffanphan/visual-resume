'use strict';
//add socket to dependencies
angular.module('recipes').controller('RecipesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Socket', 'Recipes',
	//add socket to parameters
	function($scope, $stateParams, $location, Authentication, Socket, Recipes) {
		$scope.authentication = Authentication;
		$scope.create = function() {
			var recipe = new Recipes({
				title: this.title,
				content: this.content
			});
			recipe.$save(function(response) {
				$location.path('recipes/' + response._id);
				$scope.title = '';
				$scope.content = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.remove = function(recipe) {
			if (recipe) {
				recipe.$remove();

				for (var i in $scope.recipes) {
					if ($scope.recipes[i] === recipe) {
						$scope.recipes.splice(i, 1);
					}
				}
			} else {
				$scope.recipe.$remove(function() {
					$location.path('recipes');
				});
			}
		};

		$scope.update = function() {
			var recipe = $scope.recipe;

			recipe.$update(function() {
				$location.path('recipes/' + recipe._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.recipes = Recipes.query();
		};

		$scope.findOne = function() {
			$scope.recipe = Recipes.get({
				recipeId: $stateParams.recipeId
			});
		};
	}
]);
