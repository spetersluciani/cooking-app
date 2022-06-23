import React, { Fragment, useState } from "react";

export const PopularRecipes = ({recipes}) => {
    const filteredRecipes = recipes.sort((a,b) => b.views - a.views).slice(0,5);

    return (
        <Fragment>
            <h2>Popular Recipes</h2>
            <div className="recipeList">
                {filteredRecipes.map((recipe, index) => (
                    <p key={index}>{recipe.name}</p>
                )
                )}
            </div>
        </Fragment>
    )
}