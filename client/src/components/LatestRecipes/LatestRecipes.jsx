import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const LatestRecipes = ({recipes}) => {
    const sortedRecipes = recipes.sort((a,b) => new Date(b.dateCreated) - new Date(a.dateCreated)).slice(0,5);

    return (
        <Fragment>
            <h2>Latest Recipes</h2>
            <div className="recipeList">
                {sortedRecipes.map((recipe, index) => (
                    <p key={index}><Link to={`/recipe/${recipe._id}`}>{recipe.name}</Link></p>
                )
                )}
            </div>
        </Fragment>
    )
}