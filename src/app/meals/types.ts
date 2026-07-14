export interface Meal {
  id: string;
  title: string;
  chefName: string;
  description: string;
  price: number;
  rating: number;
  dietaryTag: 'Keto' | 'Vegan' | 'Halal' | 'High-Protein';
  neighborhood: string;
  deliveryDaysFromNow: number; // Soonest sorting index helper
  image: string;
}

