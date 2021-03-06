import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Recipe = () => {

    const [currentRecipe, setCurrentRecipe] = useState();
    const { recipeId } = useParams();

    useEffect(() => {
        fetch(`/api/recipe/${recipeId}`)
        .then(response => response.json())
        .then((response) => {
            setCurrentRecipe(response[0]);
        });
    }, [recipeId]);

    if (currentRecipe !== undefined) {
        return (
            <div className="recipe-container">
                <h1>{currentRecipe.name}</h1>
                {currentRecipe.recipeImage && <img src={currentRecipe.recipeImage} /> }
                <p>Cook Time: {currentRecipe.cooktime}</p>
                <p>Prep Time: {currentRecipe.prepTime}</p>
                <p>Yield: {currentRecipe.recipeYield} serving{currentRecipe.recipeYield > 1 && 's'}</p>
                <p>Recipe Category: {currentRecipe.recipeCategory}</p>
                <p>Ingredients</p>
                <ul>
                {currentRecipe.recipeIngredients.map((ingredient, index) => {
                    return <li key={index}>{ingredient.measurement} {ingredient.units} {ingredient.name}</li>
                })}
                </ul>
                <p>Instructions</p>
                <ol>
                {currentRecipe.recipeInstructions.map((instruction, index) => {
                    return <li key={index}>{instruction}</li>
                })}
                </ol>
            </div>
        )
    } else {
        return <p>Loading...</p>
    }
}