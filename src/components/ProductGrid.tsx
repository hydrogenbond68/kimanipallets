import React from 'react';
import { ShoppingCart, Star, MessageCircle, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onEnquiry: (product: Product) => void;
  onViewGallery: (product: Product) => void;
}

export default function ProductGrid({ products, onAddToCart, onEnquiry, onViewGallery }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
        >
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <button
              onClick={() => onViewGallery(product)}
              className="absolute top-3 right-3 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-opacity-70"
              title="View Gallery"
            >
              <Eye className="h-4 w-4" />
            </button>
            {product.featured && (
              <div className="absolute top-3 left-3 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Featured
              </div>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white font-semibold">Out of Stock</span>
              </div>
            )}
          </div>
          
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
            
            <div className="flex items-center mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <button
                onClick={() => onAddToCart(product)}
                disabled={!product.inStock}
                className="flex-1 bg-amber-600 text-white py-2 px-3 rounded-lg hover:bg-amber-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center text-sm font-medium"
              >
                <ShoppingCart className="h-4 w-4 mr-1" />
                Add to Cart
              </button>
              <button
                onClick={() => onEnquiry(product)}
                className="bg-gray-600 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
                title="Enquire about this product"
              >
                <MessageCircle className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}