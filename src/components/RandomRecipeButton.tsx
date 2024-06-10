// src/components/RandomRecipeButton.tsx
import React from 'react';

interface RandomRecipeButtonProps {
  onClick: () => void;
}

const RandomRecipeButton: React.FC<RandomRecipeButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Generate Random Recipe
    </button>
  );
};

export default RandomRecipeButton;
