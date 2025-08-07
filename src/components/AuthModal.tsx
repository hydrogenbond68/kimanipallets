import React, { useState } from 'react';
import { X, User, Mail, Lock } from 'lucide-react';

interface AuthModalProps {
  mode: 'login' | 'register';
  onClose: () => void;
  onLogin: (email: string, password: string) => boolean;
  onRegister: (userData: { name: string; email: string; password: string }) => boolean;
  onSwitchMode: () => void;
}

export default function AuthModal({ mode, onClose, onLogin, onRegister, onSwitchMode }: AuthModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (mode === 'login') {
      const success = onLogin(formData.email, formData.password);
      if (!success) {
        setError('Invalid email or password. Try admin@furniture.com / admin123');
      }
    } else {
      if (!formData.name || !formData.email || !formData.password) {
        setError('Please fill in all fields');
        return;
      }
      onRegister(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {mode === 'login' ? 'Login' : 'Register'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            {mode === 'login' ? 'Login' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-gray-600">
            {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
          </span>
          <button
            onClick={onSwitchMode}
            className="text-amber-600 font-semibold hover:text-amber-700 transition-colors"
          >
            {mode === 'login' ? 'Register' : 'Login'}
          </button>
        </div>

        {mode === 'login' && (
      
        )}
      </div>
    </div>
  );
}