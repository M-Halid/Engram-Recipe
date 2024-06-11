import React from 'react';
import styled from 'styled-components';
import { Recipe } from '../interfaces/Recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-top: 10px;
`;

const Info = styled.p`
  font-size: 1em;
  color: #555;
`;

const List = styled.ul`
  padding-left: 20px;
`;

const Instructions = styled.ol`
  padding-left: 20px;
`;

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Card>
      <Image src={recipe.image} alt={recipe.name} />
      <Title>{recipe.name}</Title>
      <Info><strong>Cuisine:</strong> {recipe.cuisine}</Info>
      <Info><strong>Difficulty:</strong> {recipe.difficulty}</Info>
      <h3>Ingredients:</h3>
      <List>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </List>
      <h3>Instructions:</h3>
      <Instructions>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </Instructions>
    </Card>
  );
};

export default RecipeCard;
