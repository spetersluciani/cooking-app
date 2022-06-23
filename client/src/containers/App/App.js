import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { RecipeSearch } from "../../components/RecipeSearch/RecipeSearch";
import { Home } from "../Home/Home";

export const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
      fetch('http://localhost:9000/api/recipe')
      .then(response => response.json())
      .then((response) => {
          setRecipes(response);
      });
  }, []);

  if (recipes.length !== 0) {
    return (
      <div className="App">
        <RecipeSearch recipes={recipes} />
        <Home recipes={recipes} />
      </div>
    );
  }
}
