import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Kimani Pallets</h3>
            <p className="text-gray-300 mb-4">
              Premium furniture and woodwork solutions crafted with passion and precision. 
              Transforming spaces with exceptional craftsmanship.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-amber-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-amber-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-amber-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-amber-400 transition-colors">Products</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Custom Furniture</span></li>
              <li><span className="text-gray-300">Kitchen Cabinets</span></li>
              <li><span className="text-gray-300">Wood Flooring</span></li>
              <li><span className="text-gray-300">Wardrobes</span></li>
              <li><span className="text-gray-300">Office Furniture</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-amber-400 mr-3" />
                <span className="text-gray-300">+254 717 352-564</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-amber-400 mr-3" />
                <span className="text-gray-300">info@woodcraft.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-amber-400 mr-3" />
                <span className="text-gray-300">Nairobi, kiambu <Githunguri></Githunguri></span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Kimani Pallets Furniture. All rights reserved. Crafted with ❤️ for quality furniture.
          </p>
        </div>
      </div>
    </footer>
  );
}