const express = require('express');
const router = express.Router();
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');
const Recipe = require('../models/recipe');
const RecipeCategory = require('../models/recipeCategory');

router.use('/documentation', swaggerUI.serve);
router.get('/documentation', swaggerUI.setup(swaggerDoc));

router.get('/recipe', (req, res, next) => {
    Recipe.find({})
        .then((data) => res.json(data))
        .catch(next);
});

router.get('/recipe/category/:category', (req, res, next) => {
    Recipe.find({"recipeCategory": req.params.category})
        .then((data) => res.json(data))
        .catch(next);
});

router.get('/recipe/cuisine/:cuisine', (req, res, next) => {
    Recipe.find({"recipeCuisine": req.params.cuisine})
        .then((data) => res.json(data))
        .catch(next);
});

router.get('/recipe/:id', (req, res, next) => {
    Recipe.find({_id: req.params.id})
        .then((data) => res.json(data))
        .catch(next);
});

router.post('/recipe', (req, res, next) => {
    if (req.body.recipe) {
        Recipe.create(req.body.recipe)
            .then((data) => res.json(data))
            .catch(next);
    }
});

router.delete('/recipe/:id', (req, res, next) => {
    Recipe.findOneAndDelete({_id: req.params.id})
        .then((data) => res.json(data))
        .catch(next);
});

router.get('/recipeCategory', (req, res, next) => {
    RecipeCategory.find({})
        .then((data) => res.json(data))
        .catch(next);
});

router.post('/recipeCategory', (req, res, next) => {
    RecipeCategory.create(req.body.recipeCategory)
        .then((data) => res.json(data))
        .catch(next);
});

router.delete('/recipeCategory/:id', (req, res, next) => {
    RecipeCategory.findOneAndDelete({_id: req.params.id})
        .then((data) => res.json(data))
        .catch(next);
});

module.exports = router;