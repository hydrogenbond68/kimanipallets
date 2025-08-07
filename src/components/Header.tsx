import React from 'react';
import { ShoppingCart, User, Menu, Search } from 'lucide-react';
import { User as UserType } from '../types';

interface HeaderProps {
  currentUser: UserType | null;
  cartItemsCount: number;
  onAuthClick: () => void;
  onCartClick: () => void;
  onLogout: () => void;
}

export default function Header({ currentUser, cartItemsCount, onAuthClick, onCartClick, onLogout }: HeaderProps) {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-amber-600">Kimani Pallets</h1>
              <p className="text-xs text-gray-500">Furniture</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
              Products
            </a>
            <a href="#services" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-amber-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            
            <button
              onClick={onCartClick}
              className="relative text-gray-700 hover:text-amber-600 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {currentUser ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Welcome, {currentUser.name}</span>
                <button
                  onClick={onLogout}
                  className="text-sm text-amber-600 hover:text-amber-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                <User className="h-5 w-5" />
              </button>
            )}

            <button className="md:hidden text-gray-700 hover:text-amber-600 transition-colors">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}