"use client";
import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Palette } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">ArtMarket</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Startseite
            </Link>
            <Link href="/search" className="text-gray-700 hover:text-purple-600 transition-colors">
              Entdecken
            </Link>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Kategorien</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Künstler</a>
          </nav>

          {/* Right side: Cart + Auth */}
          <div className="flex items-center space-x-4">
            {/* Warenkorb-Icon mit Badge */}
            <Link href="/cart" className="relative text-gray-700 hover:text-purple-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Auth Buttons */}
            <Link href="/auth/login">
              <button className="text-gray-700 hover:text-purple-600 transition-colors">
                Anmelden
              </button>
            </Link>
            <Link href="/auth?mode=landing">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Registrieren
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;