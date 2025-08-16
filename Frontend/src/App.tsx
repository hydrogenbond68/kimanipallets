import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Search, Menu, X, Star, Phone, Mail, MapPin, MessageCircle, Eye } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Services from './components/Services';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import AdminDashboard from './components/AdminDashboard';
import Cart from './components/Cart';
import EnquiryModal from './components/EnquiryModal';
import ProductImageGallery from './components/ProductImageGallery';
import { Product, User as UserType, CartItem, Enquiry } from './types';
import { mockProducts, mockUsers } from './data/mockData';

function App() {
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [galleryProduct, setGalleryProduct] = useState<Product | null>(null);

  const categories = [
    'all',
    'beds',
    'dining',
    'sofas',
    'office',
    'kitchen',
    'wardrobes',
    'custom'
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleEnquiry = (product: Product) => {
    setSelectedProduct(product);
    setShowEnquiryModal(true);
  };

  const handleViewGallery = (product: Product) => {
    setGalleryProduct(product);
    setShowImageGallery(true);
  };

  const submitEnquiry = (enquiryData: { name: string; email: string; phone: string; message: string }) => {
    if (!selectedProduct) return;
    
    const newEnquiry: Enquiry = {
      id: Date.now().toString(),
      productId: selectedProduct.id,
      customerName: enquiryData.name,
      customerEmail: enquiryData.email,
      customerPhone: enquiryData.phone,
      message: enquiryData.message,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    
    setEnquiries(prev => [...prev, newEnquiry]);
    setShowEnquiryModal(false);
    setSelectedProduct(null);
    alert('Thank you for your enquiry! We will contact you soon.');
  };

  const updateCartItem = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCart(prev => prev.filter(item => item.id !== id));
    } else {
      setCart(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogin = (email: string, password: string) => {
    const user = mockUsers.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      setShowAuthModal(false);
      return true;
    }
    return false;
  };

  const handleRegister = (userData: { name: string; email: string; password: string }) => {
    const newUser: UserType = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role: 'customer'
    };
    setCurrentUser(newUser);
    setShowAuthModal(false);
    return true;
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (currentUser?.role === 'admin') {
    return (
      <AdminDashboard
        user={currentUser}
        products={products}
        setProducts={setProducts}
        enquiries={enquiries}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentUser={currentUser}
        cartItemsCount={getTotalItems()}
        onAuthClick={() => setShowAuthModal(true)}
        onCartClick={() => setShowCart(true)}
        onLogout={handleLogout}
        onAddToCart={addToCart}
        onEnquiry={handleEnquiry}
        onViewGallery={handleViewGallery}
      />
      
      <Hero />
      
      {/* Exclusive Products Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Exclusive <span className="text-amber-600">Featured</span> Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our handpicked selection of premium furniture pieces, 
              crafted with exceptional attention to detail and quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              products.find(p => p.id === '1'),
              products.find(p => p.id === '21'),
              products.find(p => p.id === '41')
            ].filter(Boolean).map((product) => (
              <div
                key={product!.id}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product!.image}
                    alt={product!.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => handleViewGallery(product!)}
                      className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center shadow-lg"
                    >
                      <Eye className="h-5 w-5 mr-2" />
                      View Gallery
                    </button>
                  </div>
                  <div className="absolute top-6 left-6 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Exclusive
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product!.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product!.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-gray-600 ml-2 font-medium">({product!.rating})</span>
                    </div>
                    <span className="text-amber-600 font-semibold capitalize bg-amber-50 px-3 py-1 rounded-full text-sm">
                      {product!.category} Collection
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => addToCart(product!)}
                      className="flex-1 bg-amber-600 text-white py-3 px-4 rounded-xl hover:bg-amber-700 transition-colors font-semibold flex items-center justify-center"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleEnquiry(product!)}
                      className="bg-gray-600 text-white p-3 rounded-xl hover:bg-gray-700 transition-colors"
                      title="Enquire about this product"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button 
              onClick={() => {
                const productsSection = document.getElementById('products');
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gray-900 text-white px-10 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors text-lg shadow-lg"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      <main id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Products</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <ProductGrid
          products={filteredProducts}
          onAddToCart={addToCart}
          onEnquiry={handleEnquiry}
          onViewGallery={handleViewGallery}
        />
      </main>

      <Services onServiceClick={(category) => setSelectedCategory(category)} />
      <Footer />

      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
          onRegister={handleRegister}
          onSwitchMode={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
        />
      )}

      {showCart && (
        <Cart
          items={cart}
          onClose={() => setShowCart(false)}
          onUpdateItem={updateCartItem}
        />
      )}

      {showEnquiryModal && selectedProduct && (
        <EnquiryModal
          product={selectedProduct}
          onClose={() => {
            setShowEnquiryModal(false);
            setSelectedProduct(null);
          }}
          onSubmit={submitEnquiry}
        />
      )}

      {showImageGallery && galleryProduct && (
        <ProductImageGallery
          product={galleryProduct}
          onClose={() => {
            setShowImageGallery(false);
            setGalleryProduct(null);
          }}
        />
      )}
    </div>
  );
}

export default App;