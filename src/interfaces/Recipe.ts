
export interface Recipe {
  id: number;
  name: string;
  cuisine: string;
  difficulty: string;
  mainIngredient: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}
