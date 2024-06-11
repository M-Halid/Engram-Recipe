import React, { useState } from 'react';
import styled from 'styled-components';
import { Recipe } from './interfaces/Recipe';
import { recipes } from './data/recipes';
import RecipeCard from './components/RecipeCard';
import RandomRecipeButton from './components/RandomRecipeButton';
import RecipeFilter from './components/RecipeFilter';

const backgroundImage = 'https://www.budgetbytes.com/wp-content/uploads/2013/07/How-to-Calculate-Recipe-Costs-H.jpg';

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

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
    <AppContainer>
      <Title>Random Recipe Generator</Title>
      <RecipeFilter
        cuisine={cuisine}
        difficulty={difficulty}
        mainIngredient={mainIngredient}
        setCuisine={setCuisine}
        setDifficulty={setDifficulty}
        setMainIngredient={setMainIngredient}
      />
      <RandomRecipeButton onClick={getRandomRecipe} />

      {currentRecipe && <RecipeCard recipe={currentRecipe} />}
    </AppContainer>
  );
}

export default App;
