export interface Meal {
  title: string;
  price: number;
  link: string;
  image: string;
  id: string;
  count: number;
  confirmed?: boolean;
  ingredients?: Ingredient[];
  description?: string;
}

interface Ingredient {
  title: string;
  disabled?: boolean;
}
