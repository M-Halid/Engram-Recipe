// src/components/RecipeCard.tsx
import React from 'react';
import { Recipe } from '../interfaces/Recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeCard;
