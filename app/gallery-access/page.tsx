"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Building2, Star, CheckCircle, Upload, Users, 
  TrendingUp, Eye, DollarSign, Award, Shield, Calendar,
  MapPin, Phone, Mail, Globe, Instagram, Facebook,
  Image, Palette, Crown, Verified, Plus, Edit, Trash2,
  Filter, Search, Grid3X3, List, BarChart3, Settings,
  Bell, MessageCircle, Share2, Heart, ExternalLink,
  Camera, FileText, Briefcase, Target, Lightbulb
} from 'lucide-react';

export default function GalleryAccessPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [viewMode, setViewMode] = useState('grid');
  const [filterCategory, setFilterCategory] = useState('all');

  // Mock Gallery Data
  const gallery = {
    id: "galerie-moderne-muenchen",
    name: "Galerie Moderne München",
    displayName: "Galerie Moderne München",
    type: "Contemporary Gallery",
    logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    coverImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    verified: true,
    premium: true,
    established: 1995,
    location: "München, Deutschland",
    address: "Maximilianstraße 45, 80538 München",
    description: "Führende Galerie für zeitgenössische Kunst mit Fokus auf aufstrebende und etablierte Künstler aus Europa. Seit über 25 Jahren präsentieren wir außergewöhnliche Kunstwerke in einem eleganten Ambiente.",
    specializations: ["Zeitgenössische Malerei", "Skulptur", "Fotografie", "Mixed Media"],
    
    stats: {
      artists: 47,
      exhibitions: 156,
      artworks: 892,
      followers: 3456,
      rating: 4.8,
      reviews: 67
    },

    contact: {
      phone: "+49 89 123456789",
      email: "info@galerie-moderne-muenchen.de",
      website: "www.galerie-moderne-muenchen.de"
    },

    social: {
      instagram: "@galerie_moderne_muenchen",
      facebook: "GalerieModerneMuenchen"
    },

    openingHours: {
      "Montag": "Geschlossen",
      "Dienstag - Freitag": "10:00 - 18:00",
      "Samstag": "10:00 - 16:00",
      "Sonntag": "12:00 - 17:00"
    }
  };

  // Featured Artists
  const featuredArtists = [
    {
      id: "maria-schmidt",
      name: "Maria Schmidt",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      specialization: "Abstrakte Malerei",
      artworks: 12,
      verified: true,
      sales: 8,
      rating: 4.9
    },
    {
      id: "alex-mueller",
      name: "Alex Müller",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      specialization: "Moderne Skulptur",
      artworks: 15,
      verified: true,
      sales: 11,
      rating: 4.7
    },
    {
      id: "lisa-wagner",
      name: "Lisa Wagner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      specialization: "Fotografie",
      artworks: 8,
      verified: false,
      sales: 5,
      rating: 4.8
    }
  ];

  // Current Exhibitions
  const currentExhibitions = [
    {
      id: 1,
      title: "Neue Perspektiven 2024",
      artist: "Gruppenausstellung",
      startDate: "2024-11-15",
      endDate: "2025-01-30",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Eine Ausstellung zeitgenössischer Künstler mit innovativen Ansätzen",
      artworkCount: 24,
      visitors: 1247,
      featured: true
    },
    {
      id: 2,
      title: "Maria Schmidt: Farbräume",
      artist: "Maria Schmidt",
      startDate: "2024-12-01",
      endDate: "2025-02-15",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Einzelausstellung mit neuen abstrakten Kompositionen",
      artworkCount: 15,
      visitors: 892,
      featured: false
    }
  ];

  // Gallery Collection
  const collection = [
    {
      id: 1,
      title: "Abstrakte Komposition VII",
      artist: "Maria Schmidt",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: 2024,
      medium: "Öl auf Leinwand",
      price: 3450,
      status: "available",
      category: "painting",
      featured: true
    },
    {
      id: 2,
      title: "Moderne Skulptur III",
      artist: "Alex Müller",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: 2024,
      medium: "Bronze",
      price: 4200,
      status: "sold",
      category: "sculpture",
      featured: true
    },
    {
      id: 3,
      title: "Urban Reflections",
      artist: "Lisa Wagner",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: 2023,
      medium: "Fotografie",
      price: 890,
      status: "available",
      category: "photography",
      featured: false
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sold': return 'bg-green-100 text-green-800';
      case 'available': return 'bg-blue-100 text-blue-800';
      case 'reserved': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'sold': return 'Verkauft';
      case 'available': return 'Verfügbar';
      case 'reserved': return 'Reserviert';
      default: return status;
    }
  };

  const filteredCollection = collection.filter(artwork => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'available') return artwork.status === 'available';
    if (filterCategory === 'sold') return artwork.status === 'sold';
    if (filterCategory === 'featured') return artwork.featured;
    return artwork.category === filterCategory;
  });

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
              <Link href="/galleries" className="text-purple-600 font-medium">
                Galerien
              </Link>
              <Link href="/artists" className="text-gray-700 hover:text-purple-600 transition-colors">
                Künstler
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/auth/login" className="text-gray-700 hover:text-purple-600 transition-colors">
                Anmelden
              </Link>
              <Link href="/auth/register">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                  Registrieren
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Startseite</Link>
            <span className="text-gray-400">/</span>
            <Link href="/galleries" className="text-gray-500 hover:text-gray-700">Galerien</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{gallery.name}</span>
          </div>
        </div>
      </div>

      {/* Gallery Hero Section */}
      <div className="relative">
        <div className="h-64 md:h-80 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
          <img 
            src={gallery.coverImage} 
            alt="Gallery Cover"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <img 
                  src={gallery.logo} 
                  alt={gallery.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl border-4 border-white shadow-lg object-cover"
                />
                {gallery.verified && (
                  <div className="absolute -bottom-2 -right-2 bg-blue-500 p-2 rounded-full">
                    <Verified className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold">{gallery.name}</h1>
                  {gallery.premium && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                      <Crown className="w-4 h-4 mr-1" />
                      Premium
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center space-x-4 text-gray-200 mb-4">
                  <span className="flex items-center">
                    <Building2 className="w-4 h-4 mr-1" />
                    {gallery.type}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {gallery.location}
                  </span>
                  <span>Seit {gallery.established}</span>
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    {gallery.stats.rating} ({gallery.stats.reviews} Bewertungen)
                  </span>
                </div>
                <p className="text-gray-200 max-w-2xl">{gallery.description}</p>
              </div>

              <div className="flex space-x-3">
                <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Folgen
                </button>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
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
              <div className="text-2xl font-bold text-gray-900">{gallery.stats.artists}</div>
              <div className="text-sm text-gray-600">Künstler</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{gallery.stats.artworks}</div>
              <div className="text-sm text-gray-600">Kunstwerke</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{gallery.stats.exhibitions}</div>
              <div className="text-sm text-gray-600">Ausstellungen</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{gallery.stats.followers.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Follower</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{gallery.stats.rating}</div>
              <div className="text-sm text-gray-600">Bewertung</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{gallery.established}</div>
              <div className="text-sm text-gray-600">Gegründet</div>
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
                  { id: 'overview', label: 'Übersicht' },
                  { id: 'collection', label: 'Sammlung', count: gallery.stats.artworks },
                  { id: 'exhibitions', label: 'Ausstellungen', count: currentExhibitions.length },
                  { id: 'artists', label: 'Künstler', count: gallery.stats.artists }
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

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* About Gallery */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Über die Galerie</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{gallery.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Spezialisierungen</h4>
                      <div className="flex flex-wrap gap-2">
                        {gallery.specializations.map((spec, index) => (
                          <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Exhibitions */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Aktuelle Ausstellungen</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {currentExhibitions.map((exhibition) => (
                      <div key={exhibition.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                        <img 
                          src={exhibition.image} 
                          alt={exhibition.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="font-bold text-gray-900">{exhibition.title}</h4>
                            {exhibition.featured && (
                              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">von {exhibition.artist}</p>
                          <p className="text-gray-700 text-sm mb-4">{exhibition.description}</p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>{exhibition.artworkCount} Werke</span>
                            <span>{exhibition.visitors} Besucher</span>
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">
                                {new Date(exhibition.startDate).toLocaleDateString('de-DE')} - {new Date(exhibition.endDate).toLocaleDateString('de-DE')}
                              </span>
                              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                                Details →
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Artists */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Unsere Künstler</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {featuredArtists.map((artist) => (
                      <Link key={artist.id} href={`/artist/${artist.id}`}>
                        <div className="p-4 border border-gray-200 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <img 
                              src={artist.avatar} 
                              alt={artist.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <div className="flex items-center space-x-1">
                                <h4 className="font-semibold text-gray-900">{artist.name}</h4>
                                {artist.verified && (
                                  <Verified className="w-4 h-4 text-blue-500" />
                                )}
                              </div>
                              <p className="text-gray-600 text-sm">{artist.specialization}</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-xs text-gray-500">
                            <div className="text-center">
                              <div className="font-medium text-gray-900">{artist.artworks}</div>
                              <div>Werke</div>
                            </div>
                            <div className="text-center">
                              <div className="font-medium text-gray-900">{artist.sales}</div>
                              <div>Verkäufe</div>
                            </div>
                            <div className="text-center">
                              <div className="font-medium text-gray-900 flex items-center justify-center">
                                <Star className="w-3 h-3 text-yellow-400 mr-1" />
                                {artist.rating}
                              </div>
                              <div>Rating</div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Collection Tab */}
            {activeTab === 'collection' && (
              <div>
                {/* Collection Controls */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <select
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">Alle Werke ({collection.length})</option>
                      <option value="available">Verfügbar ({collection.filter(c => c.status === 'available').length})</option>
                      <option value="sold">Verkauft ({collection.filter(c => c.status === 'sold').length})</option>
                      <option value="featured">Featured ({collection.filter(c => c.featured).length})</option>
                      <option value="painting">Malerei ({collection.filter(c => c.category === 'painting').length})</option>
                      <option value="sculpture">Skulptur ({collection.filter(c => c.category === 'sculpture').length})</option>
                      <option value="photography">Fotografie ({collection.filter(c => c.category === 'photography').length})</option>
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

                {/* Collection Grid */}
                <div className={`${
                  viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'space-y-6'
                }`}>
                  {filteredCollection.map((artwork) => (
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
                      </div>

                      <div className={`${viewMode === 'grid' ? 'p-6' : 'flex-1'}`}>
                        <h3 className="font-bold text-gray-900 mb-1">{artwork.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">von {artwork.artist}</p>
                        <p className="text-gray-600 text-sm mb-4">{artwork.medium} • {artwork.year}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="font-bold text-blue-600 text-lg">{formatPrice(artwork.price)}</div>
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Kontakt</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                  <div>
                    <div className="font-medium">{gallery.location}</div>
                    <div className="text-sm text-gray-600">{gallery.address}</div>
                  </div>
                </div>
                <a href={`tel:${gallery.contact.phone}`} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  <Phone className="w-4 h-4 mr-3 text-gray-400" />
                  {gallery.contact.phone}
                </a>
                <a href={`mailto:${gallery.contact.email}`} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  <Mail className="w-4 h-4 mr-3 text-gray-400" />
                  {gallery.contact.email}
                </a>
                <a href={`https://${gallery.contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  <Globe className="w-4 h-4 mr-3 text-gray-400" />
                  Website
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Öffnungszeiten</h3>
              <div className="space-y-2">
                {Object.entries(gallery.openingHours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="text-gray-600">{day}</span>
                    <span className={`font-medium ${hours === 'Geschlossen' ? 'text-red-600' : 'text-gray-900'}`}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Social Media</h3>
              <div className="space-y-3">
                {gallery.social.instagram && (
                  <a href={`https://instagram.com/${gallery.social.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-600 hover:text-pink-800 transition-colors">
                    <Instagram className="w-4 h-4 mr-3" />
                    {gallery.social.instagram}
                  </a>
                )}
                {gallery.social.facebook && (
                  <a href={`https://facebook.com/${gallery.social.facebook}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                    <Facebook className="w-4 h-4 mr-3" />
                    Facebook
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}