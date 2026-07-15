# 🍳 BiteCraft

> **A Premium, Community-Based Meal-Prep and Local Chef Marketplace**
>
> BiteCraft is a high-fidelity Next.js web application designed to connect local culinary artists with health-conscious individuals. The platform enables independent chefs to monetize their talents, manage custom menus, and handle orders, while allowing users to explore local meal-prep options, filter by dietary requirements, and order fresh, ready-to-eat gastronomy prepared right in their neighborhood.

---

## 🌟 Key Features

### 🍽️ For Foodies (Customers)
*   **Dynamic Marketplace Explorer:** Real-time search and filter experience matching dietary needs (Keto, Vegan, Halal, High-Protein).
*   **Advanced Menu Filtration:** Precise adjustments by neighborhood, maximum price threshold, and quick sorting (by price, rating, or quickest delivery time).
*   **Intuitive Meal Detail Pages:** High-fidelity visual presentation of dishes, chef bios, portion calculation calculators, community review streams, and fulfillment timelines.
*   **Interactive Cart & Ordering:** Single-click order placement directly communicating with the MongoDB database engine.
*   **Customer Dashboard:** A clean, responsive dashboard displaying active deliveries, transaction history, favorite kitchens, wallet balance, and real-time order tracking.

### 👨‍🍳 For Culinary Creators (Chefs)
*   **Storefront Menu Controls:** Total menu editing freedom to add, update, and remove culinary masterpieces.
*   **Listing Sandbox Tool:** An "Auto-Fill Mock Data" generator allowing chefs to seed high-quality dishes for testing purposes instantly.
*   **Chef Dashboard:** Core metrics center tracking daily revenue progress, active order pipelines, rolling average rating indicators, and active subscriber statistics.
*   **Order Fulfillment pipeline:** Manage incoming order requests from customers with state indicators (pending, preparing, out-for-delivery, delivered, cancelled).

---

## 🛠️ Technology Stack

BiteCraft is engineered using a modern, robust, and highly performant full-stack React framework setup:

*   **Framework:** [Next.js v16.2.10](https://nextjs.org/) (App Router, Server Actions, Server-Side Rendering)
*   **Frontend Core:** [React v19](https://react.dev/)
*   **Styling Engine:** [Tailwind CSS v4](https://tailwindcss.com/) (utilizing PostCSS configurations, light/dark mode directives)
*   **Database:** [MongoDB v7.5.0](https://www.mongodb.com/) (via native MongoClient with serverless cached connection pooling)
*   **Authentication & Security:** [Better Auth v1.6.23](https://www.better-auth.com/) (supporting Email & Password login, social OAuth wrappers, and custom user role extensions)
*   **Animations:** [Framer Motion v12.4.2](https://www.framer.com/motion/) (for fluid page transitions and micro-interactions)
*   **Feedback & Alerts:** [React Toastify v11.1.0](https://framer.com/motion/) (toast notifications)
*   **Language:** [TypeScript v5](https://www.typescriptlang.org/) (Strictly typed schemas, API responses, and layouts)

---

## 🎨 Design System

BiteCraft adheres strictly to a custom-curated, premium design system optimized for culinary platforms:

| Element | Light Mode | Dark Mode | Rationale |
| :--- | :--- | :--- | :--- |
| **Primary Accent** | `emerald-600` | `emerald-500` | Freshness, organic quality, and trust |
| **Secondary Accent** | `amber-500` | `amber-400` | Culinary warmth, appetizing, and call-to-action highlights |
| **Main Background** | `bg-slate-50` | `bg-slate-950` | Premium, high-contrast, modern clean canvas |
| **Card Background** | `bg-white` | `bg-slate-900` | Depth isolation for cards and content containers |
| **Headers Text** | `text-slate-900` | `text-slate-50` | Extreme contrast for high-priority typography |
| **Body Typography**| `text-slate-600` | `text-slate-400` | Soft, readable reading weights |
| **Border Accents** | `border-slate-200`| `border-slate-800` | Sleek structural grid definitions |

### Shape Rules & Micro-Animations
*   **Border Radius:** Main cards and modals leverage `rounded-2xl` (1rem / 16px) for a modern, friendly aesthetic. Inputs and buttons use `rounded-xl` (0.75rem / 12px).
*   **Interactive Transitions:** Hover events carry `transition-all duration-200` with subtle scale shifts (`hover:scale-[1.01]`) or slight brightness modulations.
*   **Focus Ring Accessibility:** Explicit keyboard navigation indicators (`focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2`).

---

## 📁 Project Directory Structure

```text
bitecraft/
├── public/                 # Static assets, icons, and logo assets
├── src/
│   ├── app/                # Next.js App Router Page directories
│   │   ├── (auth)/         # Grouped Authentication pages
│   │   │   ├── login/      # Sign-In Form & Quick-Login accounts
│   │   │   └── register/   # Account registration page (Chefs/Users)
│   │   ├── aboutus/        # Story, company values, and contact forms
│   │   ├── api/            # Serverless API routes
│   │   │   ├── auth/       # Better Auth backend API endpoints
│   │   │   ├── meals/      # Get all meals / add a new meal
│   │   │   ├── mealsbychef/# Get meals created by specific chef
│   │   │   ├── orders/     # Create and read customer/chef orders
│   │   │   └── stripe-metadata/ # Stripe integration metadata hooks
│   │   ├── components/     # Reusable global design components
│   │   │   ├── Banner/     # Framer-wrapped Hero section
│   │   │   ├── Header/     # Responsive multi-layout NewHeader
│   │   │   └── Footer.tsx  # Brand directory links and newsletter CTA
│   │   ├── dashboard/      # Role-based dashboard interfaces
│   │   │   ├── chef/       # Metrics, Add Meal form, Chef's menu views
│   │   │   └── user/       # Metric cards, order history, discovery sections
│   │   ├── howitworks/     # Customer process maps, Chef Hub signup FAQ
│   │   ├── meals/          # Marketplace page, explore controllers, and meal cards
│   │   │   └── [id]/       # Meal detail view, review feeds, order widget
│   │   ├── types/          # Shared layout and component type models
│   │   ├── globals.css     # Global Tailwind stylesheet
│   │   └── layout.tsx      # Main HTML envelope, Font optimization, Global layout
│   ├── lib/                # Shared utilities
│   │   ├── auth-client.ts  # Better Auth client configuration
│   │   ├── auth.ts         # Better Auth instance, providers, and Mongo adapters
│   │   └── mongodb.ts      # Thread-safe client connection promise cache helper
│   └── proxy.ts            # Route authorization protection & redirection proxy logic
├── .env                    # System environment variables config
├── next.config.ts          # Next.js bundler config
├── package.json            # Node dependency configuration
├── tsconfig.json           # TypeScript configuration
└── design.txt              # Standardized Design Tokens reference file
```

---

## 🔐 Authentication & Middleware Flow

BiteCraft uses **Better Auth** with a MongoDB database adapter. Users have specific roles: `user` (customer), `chef`, or `admin`. 

### The Security Gateway (`src/proxy.ts` / Middleware)
Routing protection is handled server-side to guarantee secure interfaces. The proxy checks the active session and intercepts requests to `/dashboard/*`:
1.  **Authentication Guard:** Unauthenticated users targeting protected paths are redirected to `/login` with their target destination saved as a `callbackUrl`.
2.  **Dashboard Route Canonicalizer:** Hits to `/dashboard` or `/dashboard/` are auto-mapped to their role-specific path (e.g. `/dashboard/chef` or `/dashboard/user`).
3.  **Role Protection Guards:** Users attempting to access folders belonging to other roles (e.g. a `user` visiting `/dashboard/chef`) are redirected to their authorized dashboard.

---

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18.x or v20.x recommended)
*   npm or pnpm
*   A running MongoDB cluster (e.g., MongoDB Atlas)

### 1. Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/your-username/bitecraft.git
cd bitecraft
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root of the project and populate it with the following configuration:
```env
# Better Auth Secrets
BETTER_AUTH_SECRET=your_32_character_secret_key
NEXT_PUBLIC_BETTER_AUTH_URL=https://bitecraft-wleh.onrender.com

# API & Backend Endpoint references
NEXT_PUBLIC_API_URL=https://bitecraft-wleh.onrender.com
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000

# Database Connection URI
DATABASE_URL=mongodb+srv://username:password@your-cluster.mongodb.net/bitecraftdb?appName=Cluster0

# Social Sign-In Configuration
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Image Upload integration (Optional / Feature support)
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key

# Stripe Payment integration keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### 3. Local Development Server
Boot up the development server:
```bash
npm run dev
```
Open [https://bitecraft-wleh.onrender.com](https://bitecraft-wleh.onrender.com) in your web browser.

### 🧪 Fast Testing Credentials
To make local evaluations quick, the Login Screen (`/login`) offers one-click autofill accounts with the default password `12345678`:
*   **Chef Persona:** `chef@gmail.com`
*   **Customer Persona:** `user@gmail.com`
*   **Admin Persona:** `admin@gmail.com`

---

## 🔮 Future Roadmap
*   **Stripe checkout Integration:** Fully functional payment sessions for credit cards and mobile wallets.
*   **Direct Chat:** Real-time WebSockets-based messaging between customers and preparing chefs.
*   **Geographic Maps Integration:** Interactive distance calculation maps to match chefs and users based on neighborhoods.
*   **Active Subscriptions:** Automatic recurring weekly orders for meal prep plans.
