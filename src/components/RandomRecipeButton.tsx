import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 1em;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

interface RandomRecipeButtonProps {
  onClick: () => void;
}

const RandomRecipeButton: React.FC<RandomRecipeButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      Generate Random Recipe
    </Button>
  );
};

export default RandomRecipeButton;
