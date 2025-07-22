export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  brand?: string;
  reference?: string;
  compatibility?: string[];
  stock: number;
  isNew?: boolean;
  isPromo?: boolean;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: Date;
}