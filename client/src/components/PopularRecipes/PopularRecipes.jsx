import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

export const PopularRecipes = ({recipes}) => {
    const filteredRecipes = recipes.sort((a,b) => b.views - a.views).slice(0,5);

    return (
        <Fragment>
            <h2>Popular Recipes</h2>
            <div className="recipeList">
                {filteredRecipes.map((recipe, index) => (
                    <article key={index} className="list-item">
                        <p><Link to={`/recipe/${recipe._id}`}>{recipe.name}</Link></p>
                    </article>
                )
                )}
            </div>
        </Fragment>
    )
}