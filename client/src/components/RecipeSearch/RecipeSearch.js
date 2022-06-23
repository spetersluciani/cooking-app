import React, { useState } from "react";
import './RecipeSearch.css';

export const RecipeSearch = ({recipes}) => {

    const [query, setQuery] = useState('');

    return (
        <div className="searchBar">
            <input className="searchField" type='text' placeholder="Search for a recipe" onChange={event => setQuery(event.target.value)} />
            <button className="searchButton">Find Recipe</button>
            {query && 
                <div className="searchData">
                    {recipes
                    .filter(recipe => {
                        if (recipe.name.toLowerCase().includes(query.toLowerCase())) {
                            return recipe;
                        }
                    })
                    .map((recipe, index) => (
                        <p key={index}>{recipe.name}</p>
                    ))}
                </div>
            }
        </div>
    )
}