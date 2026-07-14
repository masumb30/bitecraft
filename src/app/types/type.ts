import { ObjectId } from 'mongodb';

/**
 * USERS COLLECTION MODEL
 * Core profile data for customers ordering plates.
 */
export interface UserDB {
  email: string;
  name: string;
  passwordHash: string; // Stored securely after hashing
  createdAt: Date;
}

/**
 * CHEFS COLLECTION MODEL
 * Vetted independent cooks showcasing dynamic menus.
 */
export interface ChefDB {
  userId: ObjectId;       // Links this chef back to a master User account
  name: string;
  avatar: string;
  bio: string;
  neighborhood: string;
  overallRating: number;  // Rolling mathematical average of all received reviews
  verified: boolean;
  joinedAt: Date;
}

/**
 * MEALS COLLECTION MODEL
 * The individual plate document mapping strictly to its creator.
 */
export interface MealDB {
  chefId: ObjectId;       // Relational foreign key mapping to the creator document
  title: string;
  description: string;
  price: number;
  rating: number;         // Historical aggregate score specific to this exact meal
  dietaryTag: 'Keto' | 'Vegan' | 'Halal' | 'High-Protein';
  deliveryDaysFromNow: number; // Delivery scheduler index helper
  image: string;
  createdAt: Date;
}

/**
 * REVIEWS COLLECTION MODEL
 * Standalone review documents linked to a parent meal item.
 */
export interface ReviewDB {
  mealId: ObjectId;       // The target meal document being evaluated
  userId: ObjectId;       // The customer who purchased and evaluated the plate
  rating: number;         // Integer value ranging from 1 to 5
  text: string;
  createdAt: Date;
}

/**
 * ORDERS COLLECTION MODEL
 * Tracks line items, total calculations, and geographic logistics.
 */
export interface OrderDB {
  userId: ObjectId;       // Buyer reference pointer
  items: {
    mealId: ObjectId;     // Purchased meal reference pointer
    title: string;        // Snapshotted title to preserve order histories if a chef renames it
    quantity: number;     // Number of ordered portions
    priceSnap: number;    // Snapshotted price field protecting history against menu inflation
  }[];
  totalPrice: number;
  status: 'pending' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';
  deliveryAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  createdAt: Date;
}

/**
 * --- NEXT.JS UI RESPONSE POPULATED INTERFACES ---
 * Use these shapes when passing aggregated data arrays from your API 
 * routes directly into the frontend React components we wrote earlier.
 */
export interface PopulatedMeal extends Omit<MealDB, 'chefId'> {
  id: string; // The text-converted variant of the database _id
  chef: {
    id: string;
    name: string;
    avatar: string;
    neighborhood: string;
  };
}

export interface PopulatedReview extends Omit<ReviewDB, 'mealId' | 'userId'> {
  id: string;
  user: {
    name: string;
  };
}