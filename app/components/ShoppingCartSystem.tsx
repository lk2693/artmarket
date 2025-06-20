"use client";

import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { 
  ShoppingCart, X, Plus, Minus, Trash2, Heart, Package, 
  CreditCard, Shield, Truck, CheckCircle, AlertCircle, 
  ArrowRight, Star, Verified, Tag, Clock, DollarSign,
  Gift, PercentIcon, Lock, User, Mail, Phone, MapPin,
  Calendar, FileText, Download, ExternalLink, RefreshCw
} from 'lucide-react';

// Types
interface CartItem {
  id: string;
  title: string;
  artist: {
    id: string;
    name: string;
    avatar: string;
    verified: boolean;
  };
  image: string;
  price: number;
  galleryPrice?: number;
  category: string;
  medium: string;
  dimensions: {
    width: number;
    height: number;
    unit: string;
  };
  verified: boolean;
  quantity: number;
  shipping: {
    freeShipping: boolean;
    estimatedDays: string;
    cost: number;
  };
  addedAt: string;
}

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  totalPrice: number;
  addItem: (item: Omit<CartItem, 'quantity' | 'addedAt'>) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

// Context
const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Cart Provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('artmarket_cart');
      if (savedCart) {
        try {
          setItems(JSON.parse(savedCart));
        } catch (error) {
          console.error('Error loading cart:', error);
        }
      }
    }
  }, []);

  // Save cart to localStorage when items change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('artmarket_cart', JSON.stringify(items));
    }
  }, [items]);

  const addItem = (newItem: Omit<CartItem, 'quantity' | 'addedAt'>) => {
    setItems(prev => {
      const existingItem = prev.find(item => item.id === newItem.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...newItem, quantity: 1, addedAt: new Date().toISOString() }];
    });
  };

  const removeItem = (itemId: string) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      items,
      itemCount,
      totalPrice,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      isOpen,
      setIsOpen
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Format price helper
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

// Cart Item Component
const CartItemComponent = ({ item }: { item: CartItem }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
      {/* Image */}
      <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 truncate text-sm lg:text-base">
              {item.title}
            </h3>
            <div className="flex items-center space-x-2 mt-1">
              <p className="text-gray-600 text-xs lg:text-sm truncate">
                Von {item.artist.name}
              </p>
              {item.artist.verified && (
                <Verified className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500 flex-shrink-0" />
              )}
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-xs text-gray-500">
                {item.dimensions.width} × {item.dimensions.height} {item.dimensions.unit}
              </span>
              {item.verified && (
                <div className="flex items-center">
                  <Shield className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-xs text-green-600">Verifiziert</span>
                </div>
              )}
            </div>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => removeItem(item.id)}
            className="p-1 text-gray-400 hover:text-red-500 transition-colors ml-2"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Price and Quantity */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-3">
            {/* Quantity Controls */}
            <div className="flex items-center border border-gray-200 rounded-lg">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 hover:bg-gray-100 transition-colors"
                disabled={item.quantity <= 1}
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="px-3 py-1 text-sm font-medium">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 hover:bg-gray-100 transition-colors"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Price */}
          <div className="text-right">
            <div className="font-bold text-gray-900 text-sm lg:text-base">
              {formatPrice(item.price * item.quantity)}
            </div>
            {item.quantity > 1 && (
              <div className="text-xs text-gray-500">
                {formatPrice(item.price)} pro Stück
              </div>
            )}
          </div>
        </div>

        {/* Shipping Info */}
        <div className="mt-2 flex items-center text-xs text-gray-500">
          <Truck className="w-3 h-3 mr-1" />
          {item.shipping.freeShipping ? (
            <span className="text-green-600">Kostenloser Versand</span>
          ) : (
            <span>Versand: {formatPrice(item.shipping.cost)}</span>
          )}
          <span className="mx-2">•</span>
          <Clock className="w-3 h-3 mr-1" />
          <span>{item.shipping.estimatedDays}</span>
        </div>
      </div>
    </div>
  );
};

// Cart Sidebar
const CartSidebar = () => {
  const { items, itemCount, totalPrice, isOpen, setIsOpen, clearCart } = useCart();
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'payment'>('cart');

  if (!isOpen) return null;

  const shippingCost = items.reduce((total, item) => 
    total + (item.shipping.freeShipping ? 0 : item.shipping.cost), 0
  );
  const tax = totalPrice * 0.19; // 19% MwSt
  const finalTotal = totalPrice + shippingCost;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md lg:max-w-lg bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 lg:p-6 border-b border-gray-200">
          <h2 className="text-lg lg:text-xl font-bold text-gray-900">
            Warenkorb ({itemCount})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Dein Warenkorb ist leer
              </h3>
              <p className="text-gray-600 mb-6">
                Entdecke authentische Kunstwerke und füge sie zu deinem Warenkorb hinzu.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Kunstwerke entdecken
              </button>
            </div>
          ) : (
            <div className="p-4 lg:p-6">
              {checkoutStep === 'cart' && (
                <div className="space-y-4">
                  {/* Cart Items */}
                  <div className="space-y-3">
                    {items.map((item) => (
                      <CartItemComponent key={item.id} item={item} />
                    ))}
                  </div>

                  {/* Cart Actions */}
                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={clearCart}
                      className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                    >
                      Warenkorb leeren
                    </button>
                  </div>
                </div>
              )}

              {checkoutStep === 'checkout' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <button
                      onClick={() => setCheckoutStep('cart')}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      ← Zurück
                    </button>
                  </div>

                  {/* Checkout Form */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Lieferadresse</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Vorname *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nachname *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Straße und Hausnummer *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          PLZ *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Stadt *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Land *
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="DE">Deutschland</option>
                        <option value="AT">Österreich</option>
                        <option value="CH">Schweiz</option>
                        <option value="NL">Niederlande</option>
                        <option value="FR">Frankreich</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {checkoutStep === 'payment' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <button
                      onClick={() => setCheckoutStep('checkout')}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      ← Zurück
                    </button>
                  </div>

                  {/* Payment Methods */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Zahlungsmethode</h3>
                    
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" className="mr-3" defaultChecked />
                        <CreditCard className="w-5 h-5 mr-3 text-blue-600" />
                        <div>
                          <div className="font-medium">Kreditkarte</div>
                          <div className="text-sm text-gray-600">Visa, Mastercard, American Express</div>
                        </div>
                      </label>

                      <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" className="mr-3" />
                        <div className="w-5 h-5 mr-3 bg-blue-600 rounded text-white flex items-center justify-center text-xs font-bold">
                          P
                        </div>
                        <div>
                          <div className="font-medium">PayPal</div>
                          <div className="text-sm text-gray-600">Sicher und einfach</div>
                        </div>
                      </label>

                      <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" className="mr-3" />
                        <FileText className="w-5 h-5 mr-3 text-green-600" />
                        <div>
                          <div className="font-medium">Rechnung</div>
                          <div className="text-sm text-gray-600">14 Tage Zahlungsziel</div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Security Features */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Shield className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-medium text-green-900">Sicher bezahlen</span>
                    </div>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• SSL-verschlüsselte Übertragung</li>
                      <li>• Käuferschutz inklusive</li>
                      <li>• 14 Tage Rückgaberecht</li>
                      <li>• Authentizitätsgarantie</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4 lg:p-6 bg-gray-50">
            {/* Price Summary */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Zwischensumme:</span>
                <span className="font-medium">{formatPrice(totalPrice)}</span>
              </div>
              {shippingCost > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Versand:</span>
                  <span className="font-medium">{formatPrice(shippingCost)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">MwSt. (19%):</span>
                <span className="font-medium">{formatPrice(tax)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-gray-300 pt-2">
                <span>Gesamt:</span>
                <span>{formatPrice(finalTotal)}</span>
              </div>
            </div>

            {/* Action Button */}
            {checkoutStep === 'cart' && (
              <button
                onClick={() => setCheckoutStep('checkout')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center"
              >
                Zur Kasse
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            )}

            {checkoutStep === 'checkout' && (
              <button
                onClick={() => setCheckoutStep('payment')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center"
              >
                Weiter zur Zahlung
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            )}

            {checkoutStep === 'payment' && (
              <button
                onClick={() => {
                  // Handle payment processing
                  alert('Bestellung wird verarbeitet...');
                  clearCart();
                  setIsOpen(false);
                  setCheckoutStep('cart');
                }}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center"
              >
                <Lock className="w-4 h-4 mr-2" />
                Jetzt kaufen
              </button>
            )}

            {/* Trust Indicators */}
            <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                SSL-verschlüsselt
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-3 h-3 mr-1" />
                Käuferschutz
              </div>
              <div className="flex items-center">
                <RefreshCw className="w-3 h-3 mr-1" />
                14 Tage Rückgabe
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Cart Button for Header
export const CartButton = () => {
  const { itemCount, setIsOpen } = useCart();

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
    >
      <ShoppingCart className="w-6 h-6" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </button>
  );
};

// Main Shopping Cart System
const ShoppingCartSystem = () => {
  return (
    <>
      <CartSidebar />
    </>
  );
};

export default ShoppingCartSystem;