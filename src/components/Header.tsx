import React from 'react';
import { Building2, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export default function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">GEHU Bhimtal Pharmacy</h1>
              <p className="text-sm text-blue-100">Graphic Era Hill University, Bhimtal</p>
            </div>
          </div>
          <button
            onClick={onCartClick}
            className="relative p-2 hover:bg-blue-700 rounded-full transition-colors"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}