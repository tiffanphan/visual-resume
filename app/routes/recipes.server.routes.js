'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	recipes = require('../../app/controllers/recipes.server.controller');

module.exports = function(app) {
	// Recipe Routes
	app.route('/recipes')
		.get(recipes.list)
		.post(users.requiresLogin, recipes.create);

	app.route('/recipes/:recipeId')
		.get(recipes.read)
		.put(users.requiresLogin, recipes.hasAuthorization, recipes.update)
		.delete(users.requiresLogin, recipes.hasAuthorization, recipes.delete);

	// Finish by binding the recipe middleware
	app.param('recipeId', recipes.recipeByID);
};