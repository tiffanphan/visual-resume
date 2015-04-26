'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Recipe = mongoose.model('Recipe'),
	_ = require('lodash');

/**
 * Create a recipe
 */
exports.create = function(req, res) {
	var recipe = new Recipe(req.body);
	recipe.user = req.user;

	recipe.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			var socketio = req.app.get('socketio'); // makes a socket instance
			socketio.emit('recipe.created', recipe); // sends the socket event to all current users

                  res.json(recipe);
		}
	});
};

/**
 * Show the current recipe
 */
exports.read = function(req, res) {
	res.json(req.recipe);
};

/**
 * Update a recipe
 */
exports.update = function(req, res) {
	var recipe = req.recipe;

	recipe = _.extend(recipe, req.body);

	recipe.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(recipe);
		}
	});
};

/**
 * Delete an recipe
 */
exports.delete = function(req, res) {
	var recipe = req.recipe;

	recipe.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(recipe);
		}
	});
};

/**
 * List of Recipes
 */
exports.list = function(req, res) {
	Recipe.find().sort('-created').populate('user', 'displayName').exec(function(err, recipes) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(recipes);
		}
	});
};

/**
 * Recipe middleware
 */
exports.recipeByID = function(req, res, next, id) {
	Recipe.findById(id).populate('user', 'displayName').exec(function(err, recipe) {
		if (err) return next(err);
		if (!recipe) return next(new Error('Failed to load recipe ' + id));
		req.recipe = recipe;
		next();
	});
};

/**
 * Recipe authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.recipe.user.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};