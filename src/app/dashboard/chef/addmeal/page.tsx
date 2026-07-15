'use client';

import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

interface MealFormInput {
    chefId?: string; // Optional chefId, will be set from session if not provided
    title: string;
    description: string;
    price: number;
    dietaryTag: 'Keto' | 'Vegan' | 'Halal' | 'High-Protein';
    deliveryDaysFromNow: number;
    image: string;
}

// Mock Dataset containing 10 high-quality culinary items for testing
const MOCK_MEALS_SEED: MealFormInput[] = [
    {
        title: "Slow-Braised Rosemary Herb Lamb",
        description: "Grass-fed lamb shank slow-simmered for 8 hours in a rich reduction of fresh rosemary, garlic, crushed heirloom tomatoes, and red wine. Served alongside root vegetables.",
        price: 34.50,
        dietaryTag: "High-Protein",
        deliveryDaysFromNow: 2,
        image: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Zesty Avocado & Walnut Pesto Zoodles",
        description: "Freshly spiralized zucchini noodles tossed in a creamy, cold-pressed avocado and toasted walnut pesto. Garnished with blistered cherry tomatoes and hemp hearts.",
        price: 18.00,
        dietaryTag: "Keto",
        deliveryDaysFromNow: 1,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Smoked Jackfruit Carnitas Rice Bowl",
        description: "Hickory-smoked pulled jackfruit seasoned with Mexican oregano and citrus juices. Layered over cilantro-lime brown rice, black beans, and house-made guacamole.",
        price: 19.50,
        dietaryTag: "Vegan",
        deliveryDaysFromNow: 3,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Authentic Halal Chicken Shawarma Platter",
        description: "Marinated overnight in middle-eastern aromatic spices, flame-grilled, and served over saffron basmati rice with a side of classic garlic toum and pickled turnips.",
        price: 22.00,
        dietaryTag: "Halal",
        deliveryDaysFromNow: 1,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Crispy Almond-Crusted Salmon Fillet",
        description: "Wild-caught sockeye salmon coated in a crunchy smoked almond and parmesan crust, oven-baked perfectly. Paired with roasted asparagus spears.",
        price: 28.50,
        dietaryTag: "Keto",
        deliveryDaysFromNow: 2,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Spiced Chickpea & Sweet Potato Tikka Masala",
        description: "Tender sweet potato cubes and organic chickpeas simmered in a fragrant, creamy coconut milk tikka masala sauce. Authentically spiced.",
        price: 17.50,
        dietaryTag: "Vegan",
        deliveryDaysFromNow: 5,
        image: "https://images.unsplash.com/photo-1545093149-618ce3bcf93d?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Premium Wagyu Garlic Beef Skewers",
        description: "Thick cuts of highly marbled Wagyu beef woven with scallions, glazed in a sweet tamari-garlic reduction, and seared over open coals.",
        price: 42.00,
        dietaryTag: "High-Protein",
        deliveryDaysFromNow: 3,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Mediterranean Grilled Lemon Herb Sea Bass",
        description: "Certified halal fresh sea bass fillet infused with cold-pressed olive oil, fresh oregano, and charred Meyer lemons. Light, flaky, and intensely flavorful.",
        price: 36.00,
        dietaryTag: "Halal",
        deliveryDaysFromNow: 2,
        image: "https://images.unsplash.com/photo-1499125562688-24a87ef66b75?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Plant-Based Protein Power Grain Salad",
        description: "Tri-color organic quinoa, edamame, local microgreens, organic tofu cubes, and toasted pumpkin seeds tossed in a fiery ginger-tahini dressing.",
        price: 16.50,
        dietaryTag: "Vegan",
        deliveryDaysFromNow: 1,
        image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Macro-Balanced Grass-Fed Steak & Greens",
        description: "8oz cut of grass-fed flank steak grilled medium-rare, sliced cleanly, and served on a bed of wilted garlic spinach alongside continuous-energy complex carbs.",
        price: 31.00,
        dietaryTag: "High-Protein",
        deliveryDaysFromNow: 2,
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80"
    }
];

export default function CreateMealForm() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<MealFormInput>({
        title: '',
        description: '',
        price: 0,
        dietaryTag: 'High-Protein',
        deliveryDaysFromNow: 1,
        image: '',
    });

    // Sandbox Sandbox Tool function to pick a random item
    const handleAutoFill = () => {
        const randomIndex = Math.floor(Math.random() * MOCK_MEALS_SEED.length);
        const selectedMeal = MOCK_MEALS_SEED[randomIndex];
        setFormData(selectedMeal);
        toast.info(`🎲 Populated with: "${selectedMeal.title}"`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'price' || name === 'deliveryDaysFromNow' ? Number(value) : value,
        }));
    };

    const selectDietaryTag = (tag: 'Keto' | 'Vegan' | 'Halal' | 'High-Protein') => {
        setFormData((prev) => ({ ...prev, dietaryTag: tag }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const chefId = (await authClient.getSession()).data?.user?.id;
        console.log('Chef ID from Session:', chefId);
        formData.chefId = chefId;

        if (!formData.title || !formData.description || !formData.image || formData.price <= 0) {
            toast.error('Please fill out all required fields with valid information.');
            return;
        }

        setLoading(true);

        console.log('Submitting Meal Form Data:', formData);

        try {
            const response = await fetch('/api/meals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                console.log('Server Response:', await response.json());
                throw new Error('Failed to list your creation. Please try again.');
            }

            toast.success('🎉 Culinary creation published successfully!');

            setFormData({
                title: '',
                description: '',
                price: 0,
                dietaryTag: 'High-Protein',
                deliveryDaysFromNow: 1,
                image: '',
            });
        } catch (error: any) {
            toast.error(error.message || 'Something went wrong while connecting to the marketplace.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-4">
            <ToastContainer autoClose={1500} />

            {/* Testing Sandbox Tool Button outside the core form card */}
            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={handleAutoFill}
                    className="flex items-center space-x-2 px-4 py-2 text-xs md:text-sm font-semibold tracking-wide text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:bg-amber-100 dark:hover:bg-amber-900/40 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 shadow-sm"
                >
                    <span>🎲 Auto-Fill Mock Data</span>
                </button>
            </div>

            {/* Main Form Container Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-6 md:p-10 transition-colors duration-300">
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
                        List a New <span className="text-emerald-600 dark:text-emerald-500">Masterpiece</span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2">
                        Share your culinary talents with the community. Fill out the details below to open pre-orders.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Meal Title */}
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="title" className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                            Meal Title <span className="text-amber-500">*</span>
                        </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            required
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="e.g., Slow-Braised Rosemary Herb Lamb"
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 border border-slate-200 dark:border-slate-800 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 placeholder:text-slate-400"
                        />
                    </div>

                    {/* Meal Description */}
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="description" className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                            Description & Ingredients <span className="text-amber-500">*</span>
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            required
                            rows={4}
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Describe the flavors, preparation methods, and prominent source ingredients..."
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 border border-slate-200 dark:border-slate-800 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 placeholder:text-slate-400 resize-none"
                        />
                    </div>

                    {/* Price & Delivery Flex Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Price Input */}
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="price" className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                                Price ($ USD) <span className="text-amber-500">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    id="price"
                                    name="price"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    required
                                    value={formData.price || ''}
                                    onChange={handleChange}
                                    placeholder="0.00"
                                    className="w-full pl-8 pr-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 border border-slate-200 dark:border-slate-800 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                                />
                            </div>
                        </div>

                        {/* Delivery Scheduler Index Helper */}
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="deliveryDaysFromNow" className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                                Delivery Target Schedule
                            </label>
                            <select
                                id="deliveryDaysFromNow"
                                name="deliveryDaysFromNow"
                                value={formData.deliveryDaysFromNow}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 border border-slate-200 dark:border-slate-800 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 cursor-pointer appearance-none"
                            >
                                <option value={1}>Deliver Tomorrow</option>
                                <option value={2}>Deliver in 2 Days</option>
                                <option value={3}>Deliver in 3 Days</option>
                                <option value={5}>Deliver in 5 Days</option>
                                <option value={7}>Deliver in 1 Week</option>
                            </select>
                        </div>
                    </div>

                    {/* Dietary Profile Toggle Badges */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                            Dietary Profile Tag <span className="text-amber-500">*</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {(['Keto', 'Vegan', 'Halal', 'High-Protein'] as const).map((tag) => {
                                const isActive = formData.dietaryTag === tag;
                                return (
                                    <button
                                        key={tag}
                                        type="button"
                                        onClick={() => selectDietaryTag(tag)}
                                        className={`px-4 py-2 text-xs md:text-sm font-medium rounded-xl border transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${isActive
                                                ? 'bg-emerald-600 dark:bg-emerald-500 text-white border-transparent shadow-sm'
                                                : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                                            }`}
                                    >
                                        {tag}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Culinary Image URL */}
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="image" className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                            Showcase Image URL <span className="text-amber-500">*</span>
                        </label>
                        <input
                            id="image"
                            name="image"
                            type="url"
                            required
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="https://images.unsplash.com/... or cloud storage URL"
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 border border-slate-200 dark:border-slate-800 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 placeholder:text-slate-400"
                        />
                    </div>

                    {/* Submit Button Action */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 disabled:bg-emerald-400 dark:disabled:bg-emerald-700 disabled:cursor-not-allowed rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 shadow-lg shadow-emerald-600/10 dark:shadow-none"
                        >
                            {loading ? (
                                <span className="flex items-center space-x-2">
                                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    <span>Curating Marketplace Listing...</span>
                                </span>
                            ) : (
                                <span>Publish Meal to Marketplace</span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}