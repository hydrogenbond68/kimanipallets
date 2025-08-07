import React from 'react';
import { ArrowRight, Star, Eye, ShoppingCart, MessageCircle } from 'lucide-react';
import { Product } from '../types';

const exclusiveProducts = [
  {
    id: '1',
    name: 'Luxury King Size Bed',
    description: 'Handcrafted solid wood king size bed with intricate headboard design',
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'beds',
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: '21',
    name: 'Executive Dining Table',
    description: '8-seater mahogany dining table perfect for family gatherings',
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'dining',
    rating: 4.9,
    inStock: true,
    featured: true
  },
  {
    id: '41',
    name: 'Premium Leather Sofa Set',
    description: '3-piece leather sofa set with wooden frame and premium cushioning',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'sofas',
    rating: 4.7,
    inStock: true,
    featured: true
  }
];

interface HeroProps {
  onAddToCart: (product: Product) => void;
  onEnquiry: (product: Product) => void;
  onViewGallery: (product: Product) => void;
}

export default function Hero({ onAddToCart, onEnquiry, onViewGallery }: HeroProps) {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section with Background */}
      <section 
        id="home" 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1920')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center text-white">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-lg text-gray-200">Trusted by 1000+ customers</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Crafting
              <span className="text-amber-400"> Premium</span>
              <br />
              Furniture
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8">
              From custom kitchen cabinets to handcrafted dining tables, we create 
              exceptional furniture that transforms your space into a masterpiece. 
              Expert craftsmanship meets modern design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button 
                onClick={scrollToProducts}
                className="bg-amber-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center text-lg"
              >
                Shop Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </button>
              <button className="border-2 border-amber-400 text-amber-400 px-10 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-white transition-colors text-lg">
                Custom Design
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">10+</div>
                <div className="text-gray-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">1000+</div>
                <div className="text-gray-200">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">500+</div>
                <div className="text-gray-200">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}