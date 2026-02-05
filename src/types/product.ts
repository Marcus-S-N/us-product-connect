export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  categoryId: string;
  category: string;
  image: string;
  images?: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  specifications?: Record<string, string>;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  customerInfo: CustomerInfo;
  createdAt: Date;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered';
}

export interface CustomerInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  notes?: string;
}
