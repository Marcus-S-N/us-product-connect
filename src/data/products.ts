import { Category, Product } from "@/types/product";

export const categories: Category[] = [
  {
    id: "medicine",
    name: "OTC Medicine",
    slug: "medicine",
    description: "Over-the-counter medications from trusted US pharmacies",
    icon: "Pill",
  },
  {
    id: "supplements",
    name: "Supplements",
    slug: "supplements",
    description: "Vitamins, minerals, and health supplements",
    icon: "Heart",
  },
  {
    id: "clothing",
    name: "Clothing & Shoes",
    slug: "clothing",
    description: "Fashion from popular US brands and retailers",
    icon: "Shirt",
  },
  {
    id: "cosmetics",
    name: "Cosmetics",
    slug: "cosmetics",
    description: "Skincare, makeup, and beauty products",
    icon: "Sparkles",
  },
];

export const products: Product[] = [
  // Medicine
  {
    id: "med-1",
    name: "Advil Pain Reliever",
    slug: "advil-pain-reliever",
    description: "Fast-acting pain relief for headaches, muscle aches, and fever. Trusted by millions worldwide.",
    price: 12.99,
    originalPrice: 15.99,
    categoryId: "medicine",
    category: "OTC Medicine",
    image: "/placeholder.svg",
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    stockCount: 50,
    specifications: {
      "Active Ingredient": "Ibuprofen 200mg",
      "Count": "100 tablets",
      "Form": "Coated tablets",
    },
    featured: true,
  },
  {
    id: "med-2",
    name: "Tylenol Extra Strength",
    slug: "tylenol-extra-strength",
    description: "Extra strength pain relief and fever reducer. Gentle on the stomach.",
    price: 14.99,
    categoryId: "medicine",
    category: "OTC Medicine",
    image: "/placeholder.svg",
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    stockCount: 35,
    specifications: {
      "Active Ingredient": "Acetaminophen 500mg",
      "Count": "100 caplets",
      "Form": "Caplets",
    },
  },
  {
    id: "med-3",
    name: "Zyrtec Allergy Relief",
    slug: "zyrtec-allergy-relief",
    description: "24-hour allergy relief. Non-drowsy formula for indoor and outdoor allergies.",
    price: 24.99,
    originalPrice: 29.99,
    categoryId: "medicine",
    category: "OTC Medicine",
    image: "/placeholder.svg",
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    stockCount: 20,
    specifications: {
      "Active Ingredient": "Cetirizine HCl 10mg",
      "Count": "30 tablets",
      "Duration": "24-hour relief",
    },
  },

  // Supplements
  {
    id: "sup-1",
    name: "Nature Made Vitamin D3",
    slug: "nature-made-vitamin-d3",
    description: "Supports bone, teeth, muscle, and immune health. USP verified for purity.",
    price: 18.99,
    categoryId: "supplements",
    category: "Supplements",
    image: "/placeholder.svg",
    rating: 4.9,
    reviewCount: 412,
    inStock: true,
    stockCount: 100,
    specifications: {
      "Strength": "2000 IU (50mcg)",
      "Count": "220 softgels",
      "Form": "Softgels",
    },
    featured: true,
  },
  {
    id: "sup-2",
    name: "Centrum Multivitamin",
    slug: "centrum-multivitamin",
    description: "Complete daily multivitamin with essential vitamins and minerals.",
    price: 22.99,
    originalPrice: 27.99,
    categoryId: "supplements",
    category: "Supplements",
    image: "/placeholder.svg",
    rating: 4.5,
    reviewCount: 287,
    inStock: true,
    stockCount: 45,
    specifications: {
      "Count": "200 tablets",
      "Form": "Tablets",
      "Age Group": "Adults",
    },
  },
  {
    id: "sup-3",
    name: "Nordic Naturals Omega-3",
    slug: "nordic-naturals-omega3",
    description: "High-potency fish oil for heart, brain, and eye health. No fishy aftertaste.",
    price: 34.99,
    categoryId: "supplements",
    category: "Supplements",
    image: "/placeholder.svg",
    rating: 4.8,
    reviewCount: 198,
    inStock: true,
    stockCount: 30,
    specifications: {
      "EPA/DHA": "1280mg per serving",
      "Count": "120 softgels",
      "Source": "Wild-caught fish",
    },
  },

  // Clothing
  {
    id: "cloth-1",
    name: "Nike Air Max Sneakers",
    slug: "nike-air-max-sneakers",
    description: "Iconic Air Max cushioning with a modern silhouette. All-day comfort.",
    price: 129.99,
    originalPrice: 149.99,
    categoryId: "clothing",
    category: "Clothing & Shoes",
    image: "/placeholder.svg",
    rating: 4.7,
    reviewCount: 523,
    inStock: true,
    stockCount: 15,
    specifications: {
      "Material": "Mesh upper, rubber sole",
      "Sizes": "US 6-13",
      "Color": "Multiple options",
    },
    featured: true,
  },
  {
    id: "cloth-2",
    name: "Levi's 501 Original Jeans",
    slug: "levis-501-jeans",
    description: "The original blue jean. Straight leg fit with signature button fly.",
    price: 79.99,
    categoryId: "clothing",
    category: "Clothing & Shoes",
    image: "/placeholder.svg",
    rating: 4.6,
    reviewCount: 345,
    inStock: true,
    stockCount: 25,
    specifications: {
      "Material": "100% Cotton Denim",
      "Fit": "Straight leg",
      "Sizes": "28-42 waist",
    },
  },
  {
    id: "cloth-3",
    name: "The North Face Puffer Jacket",
    slug: "north-face-puffer",
    description: "Warm, packable insulation for cold weather. Water-resistant finish.",
    price: 199.99,
    originalPrice: 249.99,
    categoryId: "clothing",
    category: "Clothing & Shoes",
    image: "/placeholder.svg",
    rating: 4.8,
    reviewCount: 267,
    inStock: true,
    stockCount: 10,
    specifications: {
      "Insulation": "600-fill down",
      "Material": "Nylon with DWR",
      "Sizes": "XS-XXL",
    },
  },

  // Cosmetics
  {
    id: "cos-1",
    name: "CeraVe Moisturizing Cream",
    slug: "cerave-moisturizing-cream",
    description: "Rich, non-greasy moisturizer with ceramides and hyaluronic acid.",
    price: 16.99,
    categoryId: "cosmetics",
    category: "Cosmetics",
    image: "/placeholder.svg",
    rating: 4.9,
    reviewCount: 678,
    inStock: true,
    stockCount: 80,
    specifications: {
      "Size": "16 oz (453g)",
      "Skin Type": "All skin types",
      "Key Ingredients": "Ceramides, Hyaluronic Acid",
    },
    featured: true,
  },
  {
    id: "cos-2",
    name: "Maybelline Lash Sensational",
    slug: "maybelline-lash-sensational",
    description: "Full fan effect mascara for voluminous, fanned-out lashes.",
    price: 11.99,
    originalPrice: 14.99,
    categoryId: "cosmetics",
    category: "Cosmetics",
    image: "/placeholder.svg",
    rating: 4.4,
    reviewCount: 432,
    inStock: true,
    stockCount: 60,
    specifications: {
      "Formula": "Washable",
      "Shade": "Very Black",
      "Brush": "Curved fanning brush",
    },
  },
  {
    id: "cos-3",
    name: "The Ordinary Niacinamide 10%",
    slug: "ordinary-niacinamide",
    description: "High-strength vitamin and mineral formula for visible blemishes and congestion.",
    price: 8.99,
    categoryId: "cosmetics",
    category: "Cosmetics",
    image: "/placeholder.svg",
    rating: 4.5,
    reviewCount: 567,
    inStock: true,
    stockCount: 40,
    specifications: {
      "Size": "30ml",
      "Concentration": "Niacinamide 10% + Zinc 1%",
      "Skin Concern": "Blemishes, Oiliness",
    },
  },
];

export const getProductsByCategory = (categorySlug: string): Product[] => {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return products.filter((p) => p.categoryId === category.id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((c) => c.slug === slug);
};
