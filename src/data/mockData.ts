import { Product, User } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Luxury King Size Bed',
    description: 'Handcrafted solid wood king size bed with intricate headboard design',
    price: 1299,
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg',
    category: 'beds',
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Executive Dining Table',
    description: '8-seater mahogany dining table perfect for family gatherings',
    price: 899,
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
    category: 'dining',
    rating: 4.9,
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Premium Leather Sofa Set',
    description: '3-piece leather sofa set with wooden frame and premium cushioning',
    price: 1599,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    category: 'sofas',
    rating: 4.7,
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Executive Office Desk',
    description: 'Professional wooden office desk with built-in storage compartments',
    price: 699,
    image: 'https://images.pexels.com/photos/7516366/pexels-photo-7516366.jpeg',
    category: 'office',
    rating: 4.6,
    inStock: true
  },
  {
    id: '5',
    name: 'Modern Kitchen Cabinets',
    description: 'Custom kitchen cabinet installation with soft-close hinges',
    price: 2499,
    image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
    category: 'kitchen',
    rating: 4.9,
    inStock: true
  },
  {
    id: '6',
    name: 'Walk-in Wardrobe',
    description: 'Custom walk-in wardrobe with LED lighting and mirror doors',
    price: 1899,
    image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
    category: 'wardrobes',
    rating: 4.8,
    inStock: true
  },
  {
    id: '7',
    name: 'Coffee Table Set',
    description: 'Elegant coffee table with matching side tables in oak finish',
    price: 449,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
    category: 'dining',
    rating: 4.5,
    inStock: true
  },
  {
    id: '8',
    name: 'Custom Bookshelf',
    description: 'Floor-to-ceiling custom bookshelf with adjustable shelves',
    price: 799,
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg',
    category: 'custom',
    rating: 4.7,
    inStock: true
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@furniture.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    id: '2',
    name: 'John Customer',
    email: 'john@example.com',
    password: 'customer123',
    role: 'customer'
  }
];