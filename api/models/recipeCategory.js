const { defaultConfiguration } = require('express/lib/application');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeCategorySchema = new Schema({
    name: String
});

const RecipeCategory = mongoose.model('recipeCategory', recipeCategorySchema);

module.exports = RecipeCategory;