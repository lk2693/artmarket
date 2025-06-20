"use client";

import React, { useState } from 'react';
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
  Twitter, Instagram, Linkedin, BookOpen, Archive, Flag, UserPlus,
  ChevronUp, ExternalLink as LinkIcon, Youtube, MessageSquare
} from 'lucide-react';

const ArtistProfilePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState('portfolio');
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [portfolioSort, setSortPortfolio] = useState('newest');
  const [showContactForm, setShowContactForm] = useState(false);
  const [viewMode, setViewMode] = useState('grid');

  // Demo Artist Data
  const artist = {
    id: "maria-schmidt",
    name: "Maria Schmidt",
    displayName: "Maria Schmidt",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    coverImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    verified: true,
    featured: true,
    status: "active", // active, inactive, suspended
    joinDate: "März 2023",
    location: "München, Deutschland",
    nationality: "Deutsch",
    birthYear: 1987,
    
    // Bio & Description
    bio: "Zeitgenössische abstrakte Künstlerin mit Fokus auf Farbsymbolik und emotionale Ausdruckskraft. Meine Werke erforschen die Komplexität menschlicher Emotionen durch dynamische Farbkontraste und expressive Pinselführung.",
    statement: "Kunst ist für mich ein Dialog zwischen dem Inneren und der Welt. Jede Farbe, jeder Strich erzählt eine Geschichte von Gefühlen, die Worte nicht ausdrücken können. In meinen abstrakten Kompositionen suche ich nach der universellen Sprache der Emotion.",
    
    // Specializations & Skills
    specializations: ["Abstrakte Malerei", "Farbtheorie", "Expressionismus"],
    mediums: ["Öl auf Leinwand", "Acryl", "Mixed Media", "Pastell"],
    styles: ["Abstrakt", "Zeitgenössisch", "Expressiv", "Farbintensiv"],
    techniques: ["Impasto", "Lasurtechnik", "Collage", "Spachteltechnik"],
    
    // Statistics
    stats: {
      followers: 1247,
      following: 89,
      artworkCount: 34,
      soldCount: 47,
      totalRevenue: 124500,
      averagePrice: 3200,
      rating: 4.9,
      reviewCount: 23,
      viewsTotal: 45678,
      likesTotal: 3456
    },
    
    // Contact & Social
    contact: {
      email: "maria@schmidt-art.de",
      phone: "+49 89 123456789",
      website: "www.mariaschmidt-art.de",
      studio: "Atelier München, Maxvorstadt"
    },
    
    social: {
      instagram: "@mariaschmidt_art",
      facebook: "MariaschmidtArt",
      twitter: "@maria_art_de",
      youtube: "MariaschmidtArtist"
    },
    
    // Education & Exhibitions
    education: [
      {
        institution: "Akademie der Bildenden Künste München",
        degree: "Master of Fine Arts",
        year: "2015",
        major: "Malerei"
      },
      {
        institution: "École des Beaux-Arts, Paris",
        degree: "Austauschsemester",
        year: "2013",
        major: "Zeitgenössische Kunst"
      }
    ],
    
    exhibitions: [
      {
        type: "solo",
        title: "Farbräume",
        venue: "Galerie Moderne München",
        location: "München",
        year: 2024,
        description: "Einzelausstellung mit 15 neuen Werken der Abstrakt-Serie"
      },
      {
        type: "group",
        title: "Münchner Kunstsommer",
        venue: "Kunsthaus Bayern",
        location: "München", 
        year: 2024,
        description: "Gruppenausstellung zeitgenössischer bayerischer Künstler"
      },
      {
        type: "group",
        title: "Neue Abstraktion",
        venue: "Museum für Moderne Kunst",
        location: "Frankfurt",
        year: 2023,
        description: "Themenausstellung zur zeitgenössischen abstrakten Malerei"
      }
    ],
    
    awards: [
      {
        title: "Nachwuchsförderpreis Bayern",
        organization: "Bayerische Kunstförderung",
        year: 2024,
        amount: "€5.000"
      },
      {
        title: "Publikumspreis",
        organization: "Münchner Kunstnacht",
        year: 2023,
        amount: null
      }
    ],
    
    collections: [
      "Privatsammlung Dr. Weber, München",
      "Sammlung Zeitgenössische Kunst, Augsburg", 
      "Galerie Moderne München",
      "Internationale Privatsammlungen"
    ]
  };

  // Artist's Portfolio
  const portfolio = [
    {
      id: 1,
      title: "Abstrakte Komposition VII",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: 2024,
      medium: "Öl auf Leinwand",
      dimensions: "100 × 80 cm",
      price: 3450,
      status: "sold",
      category: "painting",
      featured: true,
      likes: 234,
      views: 1847,
      description: "Teil der aktuellen Abstrakt-Serie, erforscht emotionale Landschaften"
    },
    {
      id: 2,
      title: "Urban Dreams",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: 2024,
      medium: "Acryl auf Leinwand",
      dimensions: "80 × 60 cm",
      price: 2800,
      status: "available",
      category: "painting",
      featured: false,
      likes: 178,
      views: 956,
      description: "Urbane Reflexionen in abstrakten Formen und Farben"
    },
    {
      id: 3,
      title: "Color Symphony No. 3",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: 2024,
      medium: "Mixed Media",
      dimensions: "120 × 100 cm",
      price: 4200,
      status: "reserved",
      category: "mixed",
      featured: true,
      likes: 289,
      views: 1423,
      description: "Experimentelle Mischtechnik mit Texturelementen"
    },
    {
      id: 4,
      title: "Midnight Reflections",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: 2023,
      medium: "Öl auf Leinwand",
      dimensions: "90 × 70 cm",
      price: 1900,
      status: "available",
      category: "painting",
      featured: false,
      likes: 145,
      views: 678,
      description: "Nächtliche Stimmungen in dunklen Blau- und Violetttönen"
    },
    {
      id: 5,
      title: "Strukturelle Elemente",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: 2023,
      medium: "Pastell auf Papier",
      dimensions: "50 × 40 cm",
      price: 890,
      status: "sold",
      category: "drawing",
      featured: false,
      likes: 89,
      views: 234,
      description: "Studie zu geometrischen Formen und organischen Strukturen"
    },
    {
      id: 6,
      title: "Emotional Landscapes",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: 2023,
      medium: "Acryl auf Leinwand",
      dimensions: "150 × 120 cm",
      price: 5600,
      status: "available",
      category: "painting",
      featured: true,
      likes: 345,
      views: 2134,
      description: "Großformatige Exploration emotionaler Zustände"
    }
  ];

  // Reviews for the artist
  const reviews = [
    {
      id: 1,
      reviewer: "Dr. Thomas Weber",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      role: "Kunstkritiker",
      rating: 5,
      date: "2024-12-15",
      verified: true,
      artworkPurchased: "Abstrakte Komposition VII",
      comment: "Maria Schmidt zeigt in ihren Arbeiten eine beeindruckende Meisterschaft der Farbkomposition. Ihre abstrakte Sprache ist sowohl emotional als auch technisch überzeugend. Ein Investment in ihre Kunst ist sowohl ästhetisch als auch finanziell empfehlenswert."
    },
    {
      id: 2,
      reviewer: "Galerie Zeitgeist Berlin",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      role: "Galerie",
      rating: 5,
      date: "2024-12-10",
      verified: true,
      artworkPurchased: "Color Symphony No. 3",
      comment: "Wir haben mehrere Werke von Maria Schmidt in unserer Sammlung. Ihre Entwicklung als Künstlerin ist bemerkenswert und ihre Werke finden großen Anklang bei unseren Sammlern."
    },
    {
      id: 3,
      reviewer: "Sophie Müller",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      role: "Privatsammler",
      rating: 5,
      date: "2024-11-28",
      verified: true,
      artworkPurchased: "Urban Dreams",
      comment: "Ein wundervolles Werk, das jeden Tag neue Details preisgibt. Die Qualität der Ausführung und die emotionale Tiefe sind außergewöhnlich."
    }
  ];

  // Similar/Related Artists
  const similarArtists = [
    {
      id: "alex-mueller",
      name: "Alex Müller",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      specialization: "Moderne Skulptur",
      location: "Berlin",
      followers: 892,
      artworkCount: 28,
      verified: true,
      rating: 4.7
    },
    {
      id: "lisa-wagner",
      name: "Lisa Wagner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      specialization: "Digital Art",
      location: "Hamburg",
      followers: 1456,
      artworkCount: 45,
      verified: true,
      rating: 4.8
    },
    {
      id: "tom-klein",
      name: "Tom Klein",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      specialization: "Abstrakte Malerei",
      location: "Köln",
      followers: 634,
      artworkCount: 19,
      verified: false,
      rating: 4.6
    }
  ];

  // Recent Activity
  const recentActivity = [
    {
      type: "artwork_sold",
      message: "Verkaufte 'Abstrakte Komposition VII' an Galerie Moderne München",
      time: "vor 2 Tagen",
      amount: 3450
    },
    {
      type: "new_follower",
      message: "15 neue Follower diese Woche",
      time: "vor 3 Tagen"
    },
    {
      type: "exhibition",
      message: "Teilnahme an 'Münchner Kunstsommer 2024' bestätigt",
      time: "vor 1 Woche"
    },
    {
      type: "artwork_featured",
      message: "'Color Symphony No. 3' wurde als Featured Artwork ausgewählt",
      time: "vor 2 Wochen"
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'sold': return 'bg-green-100 text-green-800';
      case 'available': return 'bg-blue-100 text-blue-800';
      case 'reserved': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'sold': return 'Verkauft';
      case 'available': return 'Verfügbar';
      case 'reserved': return 'Reserviert';
      default: return status;
    }
  };

  const filteredPortfolio = portfolio.filter(artwork => {
    if (portfolioFilter === 'all') return true;
    if (portfolioFilter === 'available') return artwork.status === 'available';
    if (portfolioFilter === 'sold') return artwork.status === 'sold';
    if (portfolioFilter === 'featured') return artwork.featured;
    return artwork.category === portfolioFilter;
  });

  const sortedPortfolio = [...filteredPortfolio].sort((a, b) => {
    switch (portfolioSort) {
      case 'newest': return b.year - a.year || b.id - a.id;
      case 'oldest': return a.year - b.year || a.id - b.id;
      case 'price-high': return b.price - a.price;
      case 'price-low': return a.price - b.price;
      case 'popular': return b.likes - a.likes;
      default: return 0;
    }
  });

  const ContactModal = () => (
    showContactForm && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Kontakt zu {artist.name}</h3>
            <button onClick={() => setShowContactForm(false)}>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Betreff</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Interesse an Kunstwerk</option>
                <option>Kommissionsanfrage</option>
                <option>Galerie-Kooperation</option>
                <option>Allgemeine Anfrage</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht *</label>
              <textarea 
                rows={4} 
                placeholder="Ihre Nachricht an den Künstler..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => setShowContactForm(false)}
                className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Abbrechen
              </button>
              <button 
                onClick={() => {
                  console.log('Contact message sent');
                  setShowContactForm(false);
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
              <Link href="/artists" className="text-purple-600 font-medium">
                Künstler
              </Link>
              <Link href="/sell" className="text-gray-700 hover:text-purple-600 transition-colors">
                Verkaufen
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

      {/* Artist Hero Section */}
      <div className="relative">
        {/* Cover Image */}
        <div className="h-64 md:h-80 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
          <img 
            src={artist.coverImage} 
            alt="Cover"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Artist Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6">
              {/* Avatar */}
              <div className="relative">
                <img 
                  src={artist.avatar} 
                  alt={artist.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg"
                />
                {artist.verified && (
                  <div className="absolute -bottom-2 -right-2 bg-blue-500 p-2 rounded-full">
                    <Verified className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>

              {/* Basic Info */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold">{artist.name}</h1>
                  {artist.featured && (
                    <span className="bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                      Featured Artist
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center space-x-4 text-gray-200 mb-4">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {artist.location}
                  </span>
                  <span>Dabei seit {artist.joinDate}</span>
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    {artist.stats.rating} ({artist.stats.reviewCount} Bewertungen)
                  </span>
                </div>
                <p className="text-gray-200 max-w-2xl">{artist.bio}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button 
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center ${
                    isFollowing 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  {isFollowing ? 'Folge ich' : 'Folgen'}
                </button>
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Kontakt
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{artist.stats.followers.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Follower</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{artist.stats.artworkCount}</div>
              <div className="text-sm text-gray-600">Kunstwerke</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{artist.stats.soldCount}</div>
              <div className="text-sm text-gray-600">Verkauft</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{formatPrice(artist.stats.totalRevenue)}</div>
              <div className="text-sm text-gray-600">Gesamtumsatz</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{formatPrice(artist.stats.averagePrice)}</div>
              <div className="text-sm text-gray-600">Ø Preis</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{artist.stats.viewsTotal.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Views</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8">
                {[
                  { id: 'portfolio', label: 'Portfolio', count: artist.stats.artworkCount },
                  { id: 'about', label: 'Über mich' },
                  { id: 'exhibitions', label: 'Ausstellungen', count: artist.exhibitions.length },
                  { id: 'reviews', label: 'Bewertungen', count: artist.stats.reviewCount }
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
                    {tab.count && (
                      <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        {tab.count}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Portfolio Tab */}
            {activeTab === 'portfolio' && (
              <div>
                {/* Portfolio Controls */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <select
                      value={portfolioFilter}
                      onChange={(e) => setPortfolioFilter(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">Alle Werke ({portfolio.length})</option>
                      <option value="available">Verfügbar ({portfolio.filter(p => p.status === 'available').length})</option>
                      <option value="sold">Verkauft ({portfolio.filter(p => p.status === 'sold').length})</option>
                      <option value="featured">Featured ({portfolio.filter(p => p.featured).length})</option>
                      <option value="painting">Malerei ({portfolio.filter(p => p.category === 'painting').length})</option>
                      <option value="drawing">Zeichnung ({portfolio.filter(p => p.category === 'drawing').length})</option>
                      <option value="mixed">Mixed Media ({portfolio.filter(p => p.category === 'mixed').length})</option>
                    </select>

                    <select
                      value={portfolioSort}
                      onChange={(e) => setSortPortfolio(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="newest">Neueste zuerst</option>
                      <option value="oldest">Älteste zuerst</option>
                      <option value="price-high">Höchster Preis</option>
                      <option value="price-low">Niedrigster Preis</option>
                      <option value="popular">Beliebteste</option>
                    </select>
                  </div>

                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded transition-colors ${
                        viewMode === 'grid' 
                          ? 'bg-white text-blue-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded transition-colors ${
                        viewMode === 'list' 
                          ? 'bg-white text-blue-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Portfolio Grid/List */}
                <div className={`${
                  viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'space-y-6'
                }`}>
                  {sortedPortfolio.map((artwork) => (
                    <div key={artwork.id} className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                      viewMode === 'list' ? 'flex items-center space-x-6 p-6' : ''
                    }`}>
                      <div className={`${viewMode === 'list' ? 'w-32 h-32 flex-shrink-0' : 'aspect-square'} relative overflow-hidden ${viewMode === 'grid' ? '' : 'rounded-lg'}`}>
                        <img 
                          src={artwork.image} 
                          alt={artwork.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        
                        <div className="absolute top-3 left-3 flex flex-col space-y-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(artwork.status)}`}>
                            {getStatusText(artwork.status)}
                          </span>
                          {artwork.featured && (
                            <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                              Featured
                            </span>
                          )}
                        </div>

                        <div className="absolute bottom-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                          {artwork.year}
                        </div>
                      </div>

                      <div className={`${viewMode === 'grid' ? 'p-6' : 'flex-1'}`}>
                        <h3 className="font-bold text-gray-900 mb-2">{artwork.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{artwork.medium} • {artwork.dimensions}</p>
                        <p className="text-gray-700 text-sm mb-4">{artwork.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-blue-600 text-lg">{formatPrice(artwork.price)}</div>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <Heart className="w-4 h-4 mr-1" />
                                {artwork.likes}
                              </span>
                              <span className="flex items-center">
                                <Eye className="w-4 h-4 mr-1" />
                                {artwork.views}
                              </span>
                            </div>
                          </div>
                          <Link href={`/artwork/${artwork.id}`}>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                              Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="space-y-8">
                {/* Artist Statement */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Künstlerisches Statement</h3>
                  <p className="text-gray-700 leading-relaxed">{artist.statement}</p>
                </div>

                {/* Skills & Specializations */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-4">Spezialisierungen</h4>
                    <div className="flex flex-wrap gap-2">
                      {artist.specializations.map((spec, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-4">Medien</h4>
                    <div className="flex flex-wrap gap-2">
                      {artist.mediums.map((medium, index) => (
                        <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          {medium}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-4">Stile</h4>
                    <div className="flex flex-wrap gap-2">
                      {artist.styles.map((style, index) => (
                        <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                          {style}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-4">Techniken</h4>
                    <div className="flex flex-wrap gap-2">
                      {artist.techniques.map((technique, index) => (
                        <span key={index} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                          {technique}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Ausbildung</h3>
                  <div className="space-y-4">
                    {artist.education.map((edu, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                          <p className="text-gray-600">{edu.institution}</p>
                          <p className="text-gray-500 text-sm">{edu.major}</p>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-blue-600">{edu.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Awards */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Auszeichnungen</h3>
                  <div className="space-y-4">
                    {artist.awards.map((award, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900">{award.title}</h4>
                          <p className="text-gray-600">{award.organization}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-yellow-600">{award.year}</div>
                          {award.amount && (
                            <div className="text-sm text-gray-500">{award.amount}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Collections */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Sammlungen</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {artist.collections.map((collection, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <Building className="w-5 h-5 text-gray-400 mr-3" />
                        <span className="text-gray-700">{collection}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Exhibitions Tab */}
            {activeTab === 'exhibitions' && (
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ausstellungen</h3>
                <div className="space-y-6">
                  {artist.exhibitions.map((exhibition, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-bold text-gray-900">{exhibition.title}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              exhibition.type === 'solo' 
                                ? 'bg-purple-100 text-purple-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {exhibition.type === 'solo' ? 'Einzelausstellung' : 'Gruppenausstellung'}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-1">{exhibition.venue}, {exhibition.location}</p>
                          <p className="text-gray-700 text-sm">{exhibition.description}</p>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-blue-600 text-lg">{exhibition.year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={review.avatar} 
                        alt={review.reviewer}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{review.reviewer}</h4>
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
                        {review.artworkPurchased && (
                          <p className="text-sm text-blue-600 mb-2">
                            Gekauft: {review.artworkPurchased}
                          </p>
                        )}
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Kontakt & Social</h3>
              <div className="space-y-3">
                {artist.contact.website && (
                  <a href={`https://${artist.contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                    <Globe className="w-4 h-4 mr-2" />
                    Website
                  </a>
                )}
                {artist.social.instagram && (
                  <a href={`https://instagram.com/${artist.social.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-600 hover:text-pink-800 transition-colors">
                    <Instagram className="w-4 h-4 mr-2" />
                    {artist.social.instagram}
                  </a>
                )}
                {artist.social.facebook && (
                  <a href={`https://facebook.com/${artist.social.facebook}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </a>
                )}
                {artist.social.youtube && (
                  <a href={`https://youtube.com/@${artist.social.youtube}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-red-600 hover:text-red-800 transition-colors">
                    <Youtube className="w-4 h-4 mr-2" />
                    YouTube
                  </a>
                )}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Kürzliche Aktivität</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'artwork_sold' ? 'bg-green-100 text-green-600' :
                      activity.type === 'new_follower' ? 'bg-blue-100 text-blue-600' :
                      activity.type === 'exhibition' ? 'bg-purple-100 text-purple-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      {activity.type === 'artwork_sold' && <DollarSign className="w-4 h-4" />}
                      {activity.type === 'new_follower' && <Users className="w-4 h-4" />}
                      {activity.type === 'exhibition' && <Building className="w-4 h-4" />}
                      {activity.type === 'artwork_featured' && <Star className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 text-sm">{activity.message}</p>
                      <p className="text-gray-500 text-xs">{activity.time}</p>
                      {activity.amount && (
                        <p className="text-green-600 font-semibold text-sm">
                          +{formatPrice(activity.amount)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Similar Artists */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Ähnliche Künstler</h3>
              <div className="space-y-4">
                {similarArtists.map((similarArtist) => (
                  <Link key={similarArtist.id} href={`/artist/${similarArtist.id}`}>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <img 
                        src={similarArtist.avatar} 
                        alt={similarArtist.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-1">
                          <h4 className="font-medium text-gray-900 text-sm">{similarArtist.name}</h4>
                          {similarArtist.verified && (
                            <Verified className="w-3 h-3 text-blue-500" />
                          )}
                        </div>
                        <p className="text-gray-600 text-xs">{similarArtist.specialization}</p>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <span>{similarArtist.followers} Follower</span>
                          <span>•</span>
                          <span>{similarArtist.artworkCount} Werke</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 text-yellow-400 mr-1" />
                            {similarArtist.rating}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
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
                Entdecke talentierte Künstler und ihre einzigartigen Werke.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Künstler</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/artists" className="hover:text-white transition-colors">Alle Künstler</Link></li>
                <li><Link href="/artists/featured" className="hover:text-white transition-colors">Featured Artists</Link></li>
                <li><Link href="/artists/trending" className="hover:text-white transition-colors">Trending Artists</Link></li>
                <li><Link href="/sell" className="hover:text-white transition-colors">Künstler werden</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Entdecken</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/search" className="hover:text-white transition-colors">Kunstwerke</Link></li>
                <li><Link href="/search?verified=true" className="hover:text-white transition-colors">Verifizierte Kunst</Link></li>
                <li><Link href="/galleries" className="hover:text-white transition-colors">Galerien</Link></li>
                <li><Link href="/collections" className="hover:text-white transition-colors">Sammlungen</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Hilfe-Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Künstler-Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ArtMarket. Unterstütze Künstler weltweit.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArtistProfilePage;