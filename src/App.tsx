// src/App.tsx
import React, { useState } from 'react';
import { Recipe } from './interfaces/Recipe';
import { recipes } from './data/recipes';
import RecipeCard from './components/RecipeCard';
import RandomRecipeButton from './components/RandomRecipeButton';
import RecipeFilter from './components/RecipeFilter';
import './App.css';

const App: React.FC = () => {
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [cuisine, setCuisine] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [mainIngredient, setMainIngredient] = useState('');

  const getRandomRecipe = () => {
    const filteredRecipes = recipes.filter(recipe =>
      (cuisine === '' || recipe.cuisine === cuisine) &&
      (difficulty === '' || recipe.difficulty === difficulty) &&
      (mainIngredient === '' || recipe.mainIngredient.includes(mainIngredient))
    );
    const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
    setCurrentRecipe(filteredRecipes[randomIndex]);
  };

  return (
    <div className="App">
      <h1>Random Recipe Generator</h1>
      <RecipeFilter
        cuisine={cuisine}
        difficulty={difficulty}
        mainIngredient={mainIngredient}
        setCuisine={setCuisine}
        setDifficulty={setDifficulty}
        setMainIngredient={setMainIngredient}
      />
      <RandomRecipeButton onClick={getRandomRecipe} />
      <br />
      {currentRecipe && <RecipeCard recipe={currentRecipe} />}
    </div>
  );
}

export default App;
