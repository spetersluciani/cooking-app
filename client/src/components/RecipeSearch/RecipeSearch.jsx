import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './RecipeSearch.css';

export const RecipeSearch = ({recipes}) => {

    const [query, setQuery] = useState('');
    const location = useLocation();

    useEffect(() => {
        setQuery('');
    }, [location]);

    return (
        <div className="search-bar">
            <input className="search-field" type='text' value={query} placeholder="Search for a recipe" onChange={event => setQuery(event.target.value)} />
            {query && 
                <div className="search-data">
                    {recipes
                    .filter(recipe => {
                        if (recipe.name.toLowerCase().includes(query.toLowerCase())) {
                            return recipe;
                        }
                    })
                    .map((recipe, index) => (
                        <p key={index}><Link to={`/recipe/${recipe._id}`}>{recipe.name}</Link></p>
                    ))}
                </div>
            }
        </div>
    )
}