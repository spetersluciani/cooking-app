const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

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

module.exports = router;