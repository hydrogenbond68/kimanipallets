import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface ProductImageGalleryProps {
  product: {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
  };
  onClose: () => void;
}

export default function ProductImageGallery({ product, onClose }: ProductImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Use gallery images if available, otherwise use main image
  const productImages = product.gallery && product.gallery.length > 0 
    ? product.gallery 
    : [product.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="relative w-full h-full max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">{product.name}</h2>
            <p className="text-gray-300 capitalize">{product.category} Collection</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="text-white hover:text-amber-400 transition-colors p-2"
            >
              {isZoomed ? <ZoomOut className="h-6 w-6" /> : <ZoomIn className="h-6 w-6" />}
            </button>
            <button
              onClick={onClose}
              className="text-white hover:text-amber-400 transition-colors p-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative flex-1 flex items-center justify-center">
          <button
            onClick={prevImage}
            className="absolute left-4 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
            disabled={productImages.length <= 1}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className={`relative ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
            <img
              src={productImages[currentImageIndex]}
              alt={`${product.name} - View ${currentImageIndex + 1}`}
              className={`max-h-[70vh] max-w-full object-contain transition-transform duration-300 ${
                isZoomed ? 'scale-150' : 'scale-100'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
            disabled={productImages.length <= 1}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center space-x-2 mt-4">
          {productImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                currentImageIndex === index
                  ? 'border-amber-400'
                  : 'border-gray-600 hover:border-gray-400'
              }`}
            >
              <img
                src={image}
                alt={`View ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Image Counter */}
        <div className="text-center mt-4">
          <span className="text-white text-sm">
            {currentImageIndex + 1} of {productImages.length}
          </span>
        </div>

        {/* Product Info */}
        <div className="bg-black bg-opacity-50 rounded-lg p-4 mt-4">
          <p className="text-gray-300 text-center">{product.description}</p>
        </div>
      </div>
    </div>
  );
}