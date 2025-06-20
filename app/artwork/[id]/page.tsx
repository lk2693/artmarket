"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  Menu, X, Palette, Upload, Camera, Shield, DollarSign, CheckCircle, Clock, 
  Star, Award, TrendingUp, Users, Eye, Zap, ChevronRight, ChevronDown, 
  Play, ArrowRight, Building2, Verified, Heart, MessageCircle, Image,
  Trash2, Plus, Info, AlertCircle, CreditCard, Globe, Package, Paintbrush,
  Ruler, Calendar, FileText, Save, Send, ArrowLeft, Search, Microscope,
  Database, UserCheck, Fingerprint, ScanLine, Bot, Brain,
  BadgeCheck, Lock, Layers, Target, Lightbulb, Timer, Smartphone, Crown,
  ShoppingCart, Truck, BarChart3, MapPin, Mail, Phone, User, Building,
  Briefcase, Scale, Filter, Settings, Download, ExternalLink, Grid3X3,
  List, SlidersHorizontal, Loader2, ArrowUpDown, Edit, MoreHorizontal,
  TrendingDown, PieChart, Activity, RefreshCw, Bell, LogOut, Share2,
  ZoomIn, ZoomOut, Maximize, Minimize, ChevronLeft, Copy, Facebook,
  Twitter, Instagram, Linkedin, BookOpen, Archive, Flag, UserPlus
} from 'lucide-react';

const ArtworkDetailPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [userType, setUserType] = useState('public'); // public, gallery, collector
  const [isLiked, setIsLiked] = useState(false);
  const [isWatchlisted, setIsWatchlisted] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  const imageRef = useRef(null);

  // Demo Artwork Data
  const artwork = {
    id: 1,
    title: "Abstrakte Komposition VII",
    description: "Eine kraftvolle abstrakte Komposition, die die emotionale Tiefe menschlicher Erfahrungen durch lebendige Farbkontraste und dynamische Pinselstriche erforscht. Das Werk entstand während einer intensiven Schaffensperiode im Sommer 2024 und reflektiert die Komplexität moderner urbaner Lebenswelten.",
    artist: {
      id: "maria-schmidt",
      name: "Maria Schmidt",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      bio: "Zeitgenössische abstrakte Künstlerin mit Fokus auf Farbsymbolik und emotionale Ausdruckskraft.",
      location: "München, Deutschland",
      verified: true,
      followers: 1247,
      artworkCount: 34,
      salesCount: 47,
      rating: 4.9,
      joinedDate: "März 2023"
    },
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    price: 3450,
    originalPrice: null,
    galleryPrice: 2760, // 20% Galerie-Rabatt
    currency: "EUR",
    category: "Malerei",
    medium: "Öl auf Leinwand",
    dimensions: {
      width: 100,
      height: 80,
      depth: 3,
      unit: "cm"
    },
    weight: "2.5 kg",
    year: 2024,
    edition: "Unikat",
    signature: true,
    certificate: {
      id: "ART-2025-001247",
      issueDate: "2024-12-16",
      verifiedBy: "Dr. Andreas Weber, Kunstexperte",
      blockchainHash: "0x742d35cc6c8c1b5d8f9a8b2f4c6e7a1d9b8c3f2e1a7d6c9b4f8e2a5c7d1b9e6f3a",
      authenticity: 99.8,
      aiScore: 94.2
    },
    status: "available", // available, sold, reserved, pending
    verified: true,
    featured: true,
    trending: true,
    uploadDate: "2024-12-15",
    verifiedDate: "2024-12-16",
    location: "München, Deutschland",
    tags: ["abstrakt", "zeitgenössisch", "expressiv", "farbintensiv", "emotional"],
    style: ["Abstrakt", "Zeitgenössisch", "Expressionismus"],
    materials: ["Öl", "Leinwand", "Holzrahmen"],
    condition: "Ausgezeichnet",
    provenance: "Direkt vom Künstler",
    exhibitions: [
      { name: "Münchner Kunstsommer 2024", venue: "Galerie Moderne", year: 2024 },
      { name: "Abstrakte Welten", venue: "Kunsthaus Bayern", year: 2024 }
    ],
    shipping: {
      freeShipping: true,
      domesticDays: "3-5 Werktage",
      internationalDays: "7-14 Werktage",
      packaging: "Professionelle Kunstverpackung",
      insurance: "Vollversichert bis €50.000"
    },
    metrics: {
      views: 1847,
      likes: 234,
      shares: 67,
      inquiries: 12,
      watchlisted: 89
    },
    reviews: [
      {
        id: 1,
        user: "Dr. Thomas Weber",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        rating: 5,
        comment: "Außergewöhnliche Arbeit! Die Farbkomposition ist meisterhaft und die emotionale Tiefe beeindruckend.",
        date: "2024-12-10",
        verified: true,
        role: "Kunstkritiker"
      },
      {
        id: 2,
        user: "Galerie Zeitgeist",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        rating: 5,
        comment: "Maria Schmidt zeigt hier ihre Meisterschaft in der abstrakten Malerei. Ein Investment-würdiges Werk.",
        date: "2024-12-08",
        verified: true,
        role: "Galerie"
      }
    ]
  };

  const similarArtworks = [
    {
      id: 2,
      title: "Urban Dreams",
      artist: "Maria Schmidt",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: 2800,
      verified: true
    },
    {
      id: 3,
      title: "Color Symphony",
      artist: "Alex Müller",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: 4200,
      verified: true
    },
    {
      id: 4,
      title: "Midnight Reflections",
      artist: "Lisa Wagner",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: 1900,
      verified: true
    },
    {
      id: 5,
      title: "Nature's Geometry",
      artist: "Tom Klein",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: 4800,
      verified: true
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleImageNavigation = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % artwork.images.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + artwork.images.length) % artwork.images.length);
    }
  };

  const handleShare = (platform: 'facebook' | 'twitter' | 'copy') => {
    const url = window.location.href;
    const title = `${artwork.title} von ${artwork.artist.name}`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
    }
    setShowShareModal(false);
  };

  const CertificateModal = () => (
    showCertificate && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Authentizitätszertifikat</h3>
            <button onClick={() => setShowCertificate(false)}>
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-green-900">Verifiziert & Authentisch</h4>
              <p className="text-green-700">Dieses Kunstwerk wurde erfolgreich verifiziert</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">Zertifikat-ID:</p>
                  <p className="font-mono text-sm bg-white p-2 rounded">{artwork.certificate.id}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Ausstellungsdatum:</p>
                  <p className="text-sm">{artwork.certificate.issueDate}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-700">Verifiziert von:</p>
                <p className="text-sm">{artwork.certificate.verifiedBy}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">Authentizitäts-Score:</p>
                  <div className="flex items-center">
                    <div className="bg-green-200 rounded-full h-3 w-full mr-2">
                      <div 
                        className="bg-green-600 h-3 rounded-full" 
                        style={{ width: `${artwork.certificate.authenticity}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-green-600">{artwork.certificate.authenticity}%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">KI-Analyse:</p>
                  <div className="flex items-center">
                    <div className="bg-blue-200 rounded-full h-3 w-full mr-2">
                      <div 
                        className="bg-blue-600 h-3 rounded-full" 
                        style={{ width: `${artwork.certificate.aiScore}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-blue-600">{artwork.certificate.aiScore}%</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700">Blockchain Hash:</p>
                <p className="font-mono text-xs bg-white p-2 rounded break-all">{artwork.certificate.blockchainHash}</p>
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Download className="w-4 h-4 inline mr-2" />
                PDF herunterladen
              </button>
              <button className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors">
                <ExternalLink className="w-4 h-4 inline mr-2" />
                Blockchain prüfen
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );

  const ShareModal = () => (
    showShareModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Kunstwerk teilen</h3>
            <button onClick={() => setShowShareModal(false)}>
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => handleShare('facebook')}
              className="flex items-center justify-center p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Facebook className="w-5 h-5 mr-2" />
              Facebook
            </button>
            <button 
              onClick={() => handleShare('twitter')}
              className="flex items-center justify-center p-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
            >
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
            </button>
            <button 
              onClick={() => handleShare('copy')}
              className="flex items-center justify-center p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors col-span-2"
            >
              <Copy className="w-5 h-5 mr-2" />
              Link kopieren
            </button>
          </div>
        </div>
      </div>
    )
  );

  const InquiryForm = () => (
    showInquiryForm && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Anfrage senden</h3>
            <button onClick={() => setShowInquiryForm(false)}>
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht *</label>
              <textarea 
                rows={4} 
                placeholder="Ich interessiere mich für dieses Kunstwerk..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => setShowInquiryForm(false)}
                className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Abbrechen
              </button>
              <button 
                onClick={() => {
                  // Handle form submission here
                  console.log('Inquiry sent');
                  setShowInquiryForm(false);
                }}
                className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Senden
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">ArtMarket</span>
            </Link>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
                Startseite
              </Link>
              <Link href="/search" className="text-gray-700 hover:text-purple-600 transition-colors">
                Entdecken
              </Link>
              <Link href="/sell" className="text-gray-700 hover:text-purple-600 transition-colors">
                Verkaufen
              </Link>
              <Link href="/verify" className="text-gray-700 hover:text-purple-600 transition-colors">
                Verifizierung
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/auth/login" className="text-gray-700 hover:text-purple-600 transition-colors">
                Anmelden
              </Link>
              <Link href="/sell/upload">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                  Kunst verkaufen
                </button>
              </Link>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/search" className="hover:text-blue-600">Kunstwerke</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/search?category=${artwork.category.toLowerCase()}`} className="hover:text-blue-600">{artwork.category}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{artwork.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <img 
                ref={imageRef}
                src={artwork.images[currentImageIndex]} 
                alt={artwork.title}
                className={`w-full h-full object-cover transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              
              {/* Image Navigation */}
              {artwork.images.length > 1 && (
                <>
                  <button 
                    onClick={() => handleImageNavigation('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => handleImageNavigation('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                {artwork.verified && (
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Verified className="w-4 h-4 mr-1" />
                    Verifiziert
                  </div>
                )}
                {artwork.featured && (
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                )}
                {artwork.trending && (
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Trending
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                    isLiked ? 'bg-red-500 text-white' : 'bg-white bg-opacity-80 text-gray-700 hover:bg-opacity-100'
                  }`}
                >
                  <Heart className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} />
                </button>
                <button 
                  onClick={() => setShowShareModal(true)}
                  className="p-2 bg-white bg-opacity-80 rounded-full text-gray-700 hover:bg-opacity-100 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 bg-white bg-opacity-80 rounded-full text-gray-700 hover:bg-opacity-100 transition-colors">
                  <Flag className="w-5 h-5" />
                </button>
              </div>

              {/* Image Counter */}
              {artwork.images.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {artwork.images.length}
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {artwork.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {artwork.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img src={image} alt={`${artwork.title} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Artwork Details */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{artwork.title}</h1>
              
              {/* Artist Info */}
              <Link href={`/artist/${artwork.artist.id}`} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <img 
                  src={artwork.artist.avatar} 
                  alt={artwork.artist.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900">{artwork.artist.name}</h3>
                    {artwork.artist.verified && (
                      <Verified className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{artwork.artist.location}</p>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                    <span>{artwork.artist.followers} Follower</span>
                    <span>{artwork.artist.artworkCount} Werke</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {artwork.artist.rating}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Link>
            </div>

            {/* Price */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  {userType === 'gallery' ? (
                    <div>
                      <div className="text-3xl font-bold text-green-600">{formatPrice(artwork.galleryPrice)}</div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500 line-through">{formatPrice(artwork.price)}</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">
                          {formatPrice(artwork.price - artwork.galleryPrice)} gespart
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Galerie-Preis (20% Rabatt)</p>
                    </div>
                  ) : (
                    <div>
                      <div className="text-3xl font-bold text-gray-900">{formatPrice(artwork.price)}</div>
                      {userType === 'public' && (
                        <p className="text-sm text-gray-600">Für Galerien: {formatPrice(artwork.galleryPrice)}</p>
                      )}
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Inkl. MwSt.</div>
                  <div className="text-sm text-green-600 font-medium">Kostenloser Versand</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Jetzt kaufen
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => setIsWatchlisted(!isWatchlisted)}
                    className={`py-3 rounded-lg font-medium transition-colors flex items-center justify-center ${
                      isWatchlisted 
                        ? 'bg-red-100 text-red-700 border border-red-200' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Heart className="w-4 h-4 mr-2" fill={isWatchlisted ? 'currentColor' : 'none'} />
                    {isWatchlisted ? 'Gemerkt' : 'Merken'}
                  </button>
                  <button 
                    onClick={() => setShowInquiryForm(true)}
                    className="py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Anfrage
                  </button>
                </div>
              </div>

              {/* Security Features */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-green-600">
                  <Shield className="w-4 h-4 mr-2" />
                  Käuferschutz
                </div>
                <div className="flex items-center text-blue-600">
                  <Truck className="w-4 h-4 mr-2" />
                  Versichert
                </div>
                <div className="flex items-center text-purple-600">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Authentisch
                </div>
                <div className="flex items-center text-orange-600">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  14 Tage Rückgabe
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Werk-Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Medium:</span>
                  <span className="font-medium ml-2">{artwork.medium}</span>
                </div>
                <div>
                  <span className="text-gray-600">Jahr:</span>
                  <span className="font-medium ml-2">{artwork.year}</span>
                </div>
                <div>
                  <span className="text-gray-600">Größe:</span>
                  <span className="font-medium ml-2">
                    {artwork.dimensions.width} × {artwork.dimensions.height} {artwork.dimensions.unit}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Auflage:</span>
                  <span className="font-medium ml-2">{artwork.edition}</span>
                </div>
                <div>
                  <span className="text-gray-600">Signiert:</span>
                  <span className="font-medium ml-2">{artwork.signature ? 'Ja' : 'Nein'}</span>
                </div>
                <div>
                  <span className="text-gray-600">Zustand:</span>
                  <span className="font-medium ml-2">{artwork.condition}</span>
                </div>
              </div>
              
              {artwork.verified && (
                <button 
                  onClick={() => setShowCertificate(true)}
                  className="mt-4 w-full bg-green-100 text-green-700 py-2 rounded-lg font-medium hover:bg-green-200 transition-colors flex items-center justify-center"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Authentizitätszertifikat ansehen
                </button>
              )}
            </div>

            {/* Social Proof */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Interesse</h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{artwork.metrics.views}</div>
                  <div className="text-sm text-gray-600">Views</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">{artwork.metrics.likes}</div>
                  <div className="text-sm text-gray-600">Likes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{artwork.metrics.watchlisted}</div>
                  <div className="text-sm text-gray-600">Gemerkt</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{artwork.metrics.inquiries}</div>
                  <div className="text-sm text-gray-600">Anfragen</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {[
                { id: 'details', label: 'Details' },
                { id: 'shipping', label: 'Versand' },
                { id: 'reviews', label: 'Bewertungen' },
                { id: 'exhibitions', label: 'Ausstellungen' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-8">
            {activeTab === 'details' && (
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Beschreibung</h3>
                <p className="text-gray-700 leading-relaxed mb-8">{artwork.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Technische Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Medium:</span>
                        <span className="font-medium">{artwork.medium}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Größe:</span>
                        <span className="font-medium">
                          {artwork.dimensions.width} × {artwork.dimensions.height} × {artwork.dimensions.depth} {artwork.dimensions.unit}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Gewicht:</span>
                        <span className="font-medium">{artwork.weight}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Entstehungsjahr:</span>
                        <span className="font-medium">{artwork.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Provenienz:</span>
                        <span className="font-medium">{artwork.provenance}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Materialien</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {artwork.materials.map((material, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {material}
                        </span>
                      ))}
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-4">Stile</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {artwork.style.map((style, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {style}
                        </span>
                      ))}
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-4">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {artwork.tags.map((tag, index) => (
                        <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Versand & Lieferung</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Lieferzeiten</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Deutschland:</span>
                        <span className="font-medium">{artwork.shipping.domesticDays}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">International:</span>
                        <span className="font-medium">{artwork.shipping.internationalDays}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Versandkosten:</span>
                        <span className="font-medium text-green-600">
                          {artwork.shipping.freeShipping ? 'Kostenlos' : 'Auf Anfrage'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Verpackung & Sicherheit</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Package className="w-5 h-5 text-blue-500 mr-3" />
                        <span className="text-gray-700">{artwork.shipping.packaging}</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{artwork.shipping.insurance}</span>
                      </div>
                      <div className="flex items-center">
                        <Truck className="w-5 h-5 text-purple-500 mr-3" />
                        <span className="text-gray-700">Tracking-Nummer inklusive</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Bewertungen ({artwork.reviews.length})
                </h3>
                
                <div className="space-y-6">
                  {artwork.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-start space-x-4">
                        <img 
                          src={review.avatar} 
                          alt={review.user}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold text-gray-900">{review.user}</h4>
                            {review.verified && (
                              <Verified className="w-4 h-4 text-blue-500" />
                            )}
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {review.role}
                            </span>
                          </div>
                          <div className="flex items-center mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                className={`w-4 h-4 ${
                                  star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`} 
                              />
                            ))}
                            <span className="ml-2 text-sm text-gray-600">{review.date}</span>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'exhibitions' && (
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ausstellungen</h3>
                
                <div className="space-y-4">
                  {artwork.exhibitions.map((exhibition, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">{exhibition.name}</h4>
                        <p className="text-gray-600">{exhibition.venue}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-medium text-blue-600">{exhibition.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Similar Artworks */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Ähnliche Kunstwerke</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarArtworks.map((similar) => (
              <Link key={similar.id} href={`/artwork/${similar.id}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={similar.image} 
                      alt={similar.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {similar.verified && (
                      <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                        <Verified className="w-3 h-3 mr-1" />
                        Verifiziert
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{similar.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">Von {similar.artist}</p>
                    <p className="font-bold text-blue-600">{formatPrice(similar.price)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      <CertificateModal />
      <ShareModal />
      <InquiryForm />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold">ArtMarket</span>
              </div>
              <p className="text-gray-400">
                Entdecke, kaufe und verkaufe authentische Kunstwerke von verifizierten Künstlern.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Entdecken</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/search" className="hover:text-white transition-colors">Alle Kunstwerke</Link></li>
                <li><Link href="/search?verified=true" className="hover:text-white transition-colors">Verifizierte Kunst</Link></li>
                <li><Link href="/artists" className="hover:text-white transition-colors">Künstler</Link></li>
                <li><Link href="/galleries" className="hover:text-white transition-colors">Galerien</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/sell" className="hover:text-white transition-colors">Kunst verkaufen</Link></li>
                <li><Link href="/verify" className="hover:text-white transition-colors">Verifizierung</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition-colors">Galerie werden</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Investment Guide</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Hilfe-Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Käuferschutz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ArtMarket. Authentische Kunst mit Vertrauen.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArtworkDetailPage;