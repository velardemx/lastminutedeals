import React from 'react';
import { Compass, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Compass className="h-8 w-8 text-teal-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">CaribeDeal</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-teal-600">Destinations</a>
            <a href="#" className="text-gray-600 hover:text-teal-600">Today's Deals</a>
            <a href="#" className="text-gray-600 hover:text-teal-600">How It Works</a>
            <a href="#" className="text-gray-600 hover:text-teal-600">For Operators</a>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-teal-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-teal-600">Destinations</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-teal-600">Today's Deals</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-teal-600">How It Works</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-teal-600">For Operators</a>
              <button className="w-full text-left px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}