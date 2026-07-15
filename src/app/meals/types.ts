export interface Meal {
  id: string;
  name: string;
  chefId:string;
  chef: {
    name:string
  };
  chefInfo: {
    _id: string;
    name: string;
    image: string;
    rating: number;
  };
  description: string;
  price: number;
  rating: number;
  dietaryTag: 'Keto' | 'Vegan' | 'Halal' | 'High-Protein';
  neighborhood: string;
  deliveryDaysFromNow: number; // Soonest sorting index helper
  image: string;
}

