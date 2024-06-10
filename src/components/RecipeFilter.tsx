// src/components/RecipeFilter.tsx
import React from 'react';

interface RecipeFilterProps {
  cuisine: string;
  difficulty: string;
  mainIngredient: string;
  setCuisine: (cuisine: string) => void;
  setDifficulty: (difficulty: string) => void;
  setMainIngredient: (mainIngredient: string) => void;
}

const RecipeFilter: React.FC<RecipeFilterProps> = ({ cuisine, difficulty, mainIngredient, setCuisine, setDifficulty, setMainIngredient }) => {
  return (
    <div className="recipe-filter">
      <label>
        Cuisine:
        <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
          <option value="">All</option>
          <option value="Italian">Italian</option>
          <option value="Chinese">Chinese</option>
          <option value="Mexican">Mexican</option>
          {/* Weitere Optionen hinzufügen */}
        </select>
      </label>
      <label>
        Difficulty:
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </label>
      <label>
        Main Ingredient:
        <input type="text" value={mainIngredient} onChange={(e) => setMainIngredient(e.target.value)} />
      </label>
    </div>
  );
};

export default RecipeFilter;
