import React, { useEffect, useState } from "react";
import { RecipeSearch } from "../../components/RecipeSearch/RecipeSearch";
import { Routes, Route } from 'react-router-dom';
import { Home } from "../Home/Home";
import { Recipe } from "../Recipe/Recipe";

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
        <Routes>
          <Route path="/" element={<Home recipes={recipes} />} />
          <Route path="/recipe/:recipeId" element={<Recipe />} />
        </Routes>
      </div>
    );
  }
}
