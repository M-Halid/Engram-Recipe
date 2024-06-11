import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1em;
`;

const Select = styled.select`
  padding: 5px;
  margin-top: 5px;
`;

const Input = styled.input`
  padding: 5px;
  margin-top: 5px;
`;

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
    <FilterContainer>
      <Label>
        Cuisine:
        <Select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
          <option value="">All</option>
          <option value="Italian">Italian</option>
          <option value="Chinese">Chinese</option>
          <option value="Mexican">Mexican</option>
          <option value="Indian">Indian</option>
          <option value="Japanese">Japanese</option>
          <option value="Thai">Thai</option>
        </Select>
      </Label>
      <Label>
        Difficulty:
        <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </Select>
      </Label>
      <Label>
        Main Ingredient:
        <Input type="text" value={mainIngredient} onChange={(e) => setMainIngredient(e.target.value)} />
      </Label>
    </FilterContainer>
  );
};

export default RecipeFilter;
