import React, { useEffect, useState } from "react";
import { RecipeSearch } from "../../components/RecipeSearch/RecipeSearch";
import { Routes, Route } from 'react-router-dom';
import { Home } from "../Home/Home";
import { Recipe } from "../../components/Recipe/Recipe";
import { CreateRecipe } from "../CreateRecipe/CreateRecipe";
import { GlobalNavigation } from "../../components/GlobalNavigation/GlobalNavigation";
import { NavigationContainer } from "../../containers/NavigationContainer/NavigationContainer";

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
        <header>
          <NavigationContainer>
            <GlobalNavigation />
            <RecipeSearch recipes={recipes} />
          </NavigationContainer>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home recipes={recipes} />} />
            <Route path="/create" element={<CreateRecipe />} />
            <Route path="/recipe/:recipeId" element={<Recipe />} />
          </Routes>
        </main>
      </div>
    );
  }
}
