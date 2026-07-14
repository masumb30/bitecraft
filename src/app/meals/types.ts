export interface Meal {
  id: string;
  title: string;
  chef: {
    name:string
  };
  chefInfo: {
    _id: string;
    name: string;
    avatar: string;
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

