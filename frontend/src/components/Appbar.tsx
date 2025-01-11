

import { useState } from 'react';
import { Droplets, Menu, X } from 'lucide-react';

function Appbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-red-600 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Droplets className="w-8 h-8" />
              <span className="ml-2 text-xl font-bold">SGI Blood Donors</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-red-200 transition-colors">Home</a>
              <a href="#" className="hover:text-red-200 transition-colors">Find Donors</a>
              <a href="#" className="hover:text-red-200 transition-colors">About Us</a>
              <a href="#" className="hover:text-red-200 transition-colors">Contact</a>
              <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-100 transition-colors">
                Become a Donor
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4">
              <a href="#" className="block py-2 hover:text-red-200 transition-colors">Home</a>
              <a href="#" className="block py-2 hover:text-red-200 transition-colors">Find Donors</a>
              <a href="#" className="block py-2 hover:text-red-200 transition-colors">About Us</a>
              <a href="#" className="block py-2 hover:text-red-200 transition-colors">Contact</a>
              <button className="mt-2 w-full bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-100 transition-colors">
                Become a Donor
              </button>
            </nav>
          )}
        </div>
      </header>
  )
}

export default Appbar