export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  gallery?: string[];
  category: string;
  rating: number;
  inStock: boolean;
  featured?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'customer' | 'admin';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Enquiry {
  id: string;
  productId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  message: string;
  createdAt: string;
  status: 'pending' | 'responded' | 'closed';
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
}