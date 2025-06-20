// app/cart/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../components/ShoppingCartSystem';
import { 
  ShoppingCart, ArrowLeft, Trash2, Plus, Minus, Heart, 
  Shield, Truck, CheckCircle, CreditCard, Lock, Package,
  Star, Verified, Clock, ArrowRight, RefreshCw, AlertCircle,
  X, FileText, Tag, Gift, PercentIcon
} from 'lucide-react';

const CartPage = () => {
  const { items, itemCount, totalPrice, updateQuantity, removeItem, clearCart } = useCart();
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'payment'>('cart');
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);

  // Format price helper
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const shippingCost = items.reduce((total, item) => 
    total + (item.shipping.freeShipping ? 0 : item.shipping.cost), 0
  );
  const subtotal = totalPrice - promoDiscount;
  const tax = subtotal * 0.19; // 19% MwSt
  const finalTotal = subtotal + shippingCost;

  const applyPromoCode = () => {
    // Simple promo code logic
    if (promoCode.toLowerCase() === 'kunst10') {
      setPromoDiscount(totalPrice * 0.1);
    } else if (promoCode.toLowerCase() === 'welcome20') {
      setPromoDiscount(totalPrice * 0.2);
    } else {
      setPromoDiscount(0);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold text-gray-900">ArtMarket</span>
              </Link>
              
              <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zum Shop
              </Link>
            </div>
          </div>
        </header>

        {/* Empty Cart */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-8" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Dein Warenkorb ist leer
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Entdecke authentische Kunstwerke von verifizierten Künstlern und füge sie zu deinem Warenkorb hinzu.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link href="/search">
                <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Kunstwerke entdecken
                </button>
              </Link>
              <Link href="/featured">
                <button className="w-full sm:w-auto bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all">
                  Featured Kunstwerke
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center mr-8">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold text-gray-900">ArtMarket</span>
              </Link>
              
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
                  Shop
                </Link>
                <span className="text-purple-600 font-medium">Warenkorb ({itemCount})</span>
              </nav>
            </div>
            
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Weiter einkaufen</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                  Warenkorb ({itemCount} {itemCount === 1 ? 'Artikel' : 'Artikel'})
                </h1>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors flex items-center"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Alle entfernen
                </button>
              </div>

              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 p-6 bg-gray-50 rounded-xl">
                    {/* Image */}
                    <div className="flex-shrink-0 w-full sm:w-32 h-48 sm:h-32 rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0 mb-4 sm:mb-0">
                          <Link href={`/artwork/${item.id}`}>
                            <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer text-lg">
                              {item.title}
                            </h3>
                          </Link>
                          <div className="flex items-center space-x-2 mt-2">
                            <Link href={`/artist/${item.artist.id}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                              Von {item.artist.name}
                            </Link>
                            {item.artist.verified && (
                              <Verified className="w-4 h-4 text-blue-500" />
                            )}
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500">
                            <span>{item.medium}</span>
                            <span>•</span>
                            <span>{item.dimensions.width} × {item.dimensions.height} {item.dimensions.unit}</span>
                            {item.verified && (
                              <>
                                <span>•</span>
                                <div className="flex items-center text-green-600">
                                  <Shield className="w-3 h-3 mr-1" />
                                  Verifiziert
                                </div>
                              </>
                            )}
                          </div>

                          {/* Shipping Info */}
                          <div className="flex items-center mt-2 text-sm">
                            <Truck className="w-4 h-4 mr-2 text-green-600" />
                            {item.shipping.freeShipping ? (
                              <span className="text-green-600">Kostenloser Versand</span>
                            ) : (
                              <span>Versand: {formatPrice(item.shipping.cost)}</span>
                            )}
                            <span className="mx-2 text-gray-400">•</span>
                            <Clock className="w-4 h-4 mr-1 text-blue-600" />
                            <span className="text-blue-600">{item.shipping.estimatedDays}</span>
                          </div>
                        </div>

                        {/* Price and Actions */}
                        <div className="flex flex-col items-end space-y-4">
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">
                              {formatPrice(item.price * item.quantity)}
                            </div>
                            {item.quantity > 1 && (
                              <div className="text-sm text-gray-500">
                                {formatPrice(item.price)} pro Stück
                              </div>
                            )}
                          </div>

                          {/* Quantity and Remove */}
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center border border-gray-200 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-2 hover:bg-gray-100 transition-colors rounded-l-lg"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-2 hover:bg-gray-100 transition-colors rounded-r-lg"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Bestellübersicht</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Promo Code
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Code eingeben"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Tag className="w-4 h-4" />
                  </button>
                </div>
                {promoDiscount > 0 && (
                  <div className="mt-2 text-sm text-green-600 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Code angewendet: -{formatPrice(promoDiscount)}
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Zwischensumme:</span>
                  <span className="font-medium">{formatPrice(totalPrice)}</span>
                </div>
                
                {promoDiscount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Rabatt:</span>
                    <span className="font-medium text-green-600">-{formatPrice(promoDiscount)}</span>
                  </div>
                )}
                
                {shippingCost > 0 ? (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Versand:</span>
                    <span className="font-medium">{formatPrice(shippingCost)}</span>
                  </div>
                ) : (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Versand:</span>
                    <span className="font-medium text-green-600">Kostenlos</span>
                  </div>
                )}
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">MwSt. (19%):</span>
                  <span className="font-medium">{formatPrice(tax)}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Gesamt:</span>
                    <span>{formatPrice(finalTotal)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center mb-4">
                  Zur Kasse
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>

              {/* Security Features */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-green-600">
                  <Shield className="w-4 h-4 mr-2" />
                  SSL-verschlüsselte Übertragung
                </div>
                <div className="flex items-center text-blue-600">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Käuferschutz inklusive
                </div>
                <div className="flex items-center text-purple-600">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  14 Tage Rückgaberecht
                </div>
                <div className="flex items-center text-orange-600">
                  <Package className="w-4 h-4 mr-2" />
                  Versicherte Lieferung
                </div>
              </div>

              {/* Save for Later */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-3">Schnelle Aktionen</h3>
                <div className="space-y-2">
                  <button className="w-full text-left text-sm text-blue-600 hover:text-blue-700 transition-colors flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    Alle zur Wunschliste hinzufügen
                  </button>
                  <button className="w-full text-left text-sm text-gray-600 hover:text-gray-700 transition-colors flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Warenkorb als PDF speichern
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Warum ArtMarket?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Verified className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Authentisch</h4>
              <p className="text-sm text-gray-600">Alle Kunstwerke sind professionell verifiziert</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Sicher</h4>
              <p className="text-sm text-gray-600">Käuferschutz und sichere Zahlungen</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Schnell</h4>
              <p className="text-sm text-gray-600">Sichere und schnelle Lieferung weltweit</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Qualität</h4>
              <p className="text-sm text-gray-600">Nur Kunstwerke höchster Qualität</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;