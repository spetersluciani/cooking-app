import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Recipe = () => {

    const [currentRecipe, setCurrentRecipe] = useState({});
    const { recipeId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9000/api/recipe/${recipeId}`)
        .then(response => response.json())
        .then((response) => {
            setCurrentRecipe(response[0]);
        });
    }, []);

    return (
        <Fragment>
            <h1>Recipe</h1>
            <h2>{currentRecipe.name}</h2>
        </Fragment>
    )
}