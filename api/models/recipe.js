const { defaultConfiguration } = require('express/lib/application');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    measurement: Number,
    units: String,
    name: String
});

const recipeSchema = new Schema({
    dateCreated: Date,
    views: Number,
    name: String,
    cooktime: String, 
    cookingMethod: String,
    prepTime: String,
    recipeCategory: String,
    recipeCuisine: [String],
    recipeIngredients: [ingredientSchema],
    recipeInstructions: [String],
    recipeYield: Number,
    recipeImage: String
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;