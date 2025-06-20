"use client";
import React, { useState, useEffect } from 'react';
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
List, SlidersHorizontal, Loader2, ArrowUpDown
} from 'lucide-react';

const SearchBrowsePage = () => {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [filtersOpen, setFiltersOpen] = useState(false);
const [viewMode, setViewMode] = useState('grid');
const [sortBy, setSortBy] = useState('featured');
const [searchQuery, setSearchQuery] = useState('');
const [selectedFilters, setSelectedFilters] = useState({
category: [] as string[],
priceRange: [0, 50000],
medium: [] as string[],
size: [] as string[],
year: [2000, 2025],
verified: true,
artist: [] as string[],
style: [] as string[]
 });
const [currentPage, setCurrentPage] = useState(1);
const [loading, setLoading] = useState(false);

const categories = [
 { id: 'painting', name: 'Malerei', icon: '🎨', count: 2847 },
 { id: 'sculpture', name: 'Skulptur', icon: '🗿', count: 892 },
 { id: 'photography', name: 'Fotografie', icon: '📸', count: 1456 },
 { id: 'digital', name: 'Digital Art', icon: '💻', count: 634 },
 { id: 'mixed', name: 'Mixed Media', icon: '🎭', count: 567 },
 { id: 'print', name: 'Drucke', icon: '🖼️', count: 1223 },
 { id: 'drawing', name: 'Zeichnung', icon: '✏️', count: 789 },
 { id: 'textile', name: 'Textilkunst', icon: '🧵', count: 234 }
 ];

const mediums = [
'Öl auf Leinwand', 'Acryl', 'Aquarell', 'Bronze', 'Marmor', 'Digital Print',
'Fotografie', 'Collage', 'Pastell', 'Kohle', 'Mischtechnik'
 ];

const artStyles = [
'Abstrakt', 'Zeitgenössisch', 'Modern', 'Impressionismus', 'Expressionismus',
'Surreal', 'Pop Art', 'Minimal', 'Konzeptkunst', 'Street Art'
 ];

const quickFilters = [
 { id: 'under1k', label: 'Unter €1.000', filter: { priceRange: [0, 1000] } },
 { id: 'new', label: 'Neu eingestellt', filter: { sort: 'newest' } },
 { id: 'trending', label: 'Im Trend', filter: { sort: 'trending' } },
 { id: 'verified', label: 'Verifiziert', filter: { verified: true } },
 { id: 'large', label: 'Große Formate', filter: { size: ['large', 'xl'] } },
 { id: 'investment', label: 'Investment', filter: { priceRange: [10000, 50000] } }
 ];

const artworks = [
 {
id: 1,
image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
title: "Abstrakte Komposition VII",
artist: "Maria Schmidt",
artistId: "maria-schmidt",
year: 2024,
price: 3450,
originalPrice: null,
verified: true,
category: "painting",
medium: "Öl auf Leinwand",
size: "100 × 80 cm",
style: ["Abstrakt", "Zeitgenössisch"],
likes: 234,
views: 1847,
featured: true,
trending: true,
gallery: null,
location: "München",
description: "Eine kraftvolle abstrakte Komposition in warmen Erdtönen...",
tags: ["abstrakt", "warm", "erdtöne", "expressiv"]
 },
 {
id: 2,
image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
title: "Urban Reflection",
artist: "Alex Müller",
artistId: "alex-mueller",
year: 2023,
price: 5200,
originalPrice: null,
verified: true,
category: "sculpture",
medium: "Bronze",
size: "45 × 30 × 60 cm",
style: ["Modern", "Urban"],
likes: 156,
views: 892,
featured: false,
trending: false,
gallery: "Galerie Moderne München",
location: "Berlin",
description: "Eine moderne Bronzeskulptur, die urbane Reflexionen einfängt...",
tags: ["urban", "bronze", "modern", "skulptur"]
 },
 {
id: 3,
image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
title: "Digital Dreams",
artist: "Lisa Wagner",
artistId: "lisa-wagner",
year: 2024,
price: 2100,
originalPrice: 2800,
verified: true,
category: "digital",
medium: "Digital Print",
size: "70 × 50 cm",
style: ["Digital", "Surreal"],
likes: 89,
views: 567,
featured: true,
trending: true,
gallery: null,
location: "Hamburg",
description: "Digitale Traumlandschaften in leuchtenden Farben...",
tags: ["digital", "träume", "farben", "surreal"]
 },
 {
id: 4,
image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
title: "Nature's Geometry",
artist: "Tom Klein",
artistId: "tom-klein",
year: 2023,
price: 4800,
originalPrice: null,
verified: true,
category: "mixed",
medium: "Acryl & Collage",
size: "120 × 90 cm",
style: ["Abstrakt", "Minimal"],
likes: 278,
views: 1234,
featured: false,
trending: false,
gallery: "Contemporary Art Berlin",
location: "Köln",
description: "Geometrische Formen inspiriert von der Natur...",
tags: ["geometrie", "natur", "minimal", "collage"]
 },
 {
id: 5,
image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
title: "Midnight Reflections",
artist: "Sarah Weber",
artistId: "sarah-weber",
year: 2024,
price: 1850,
originalPrice: null,
verified: true,
category: "photography",
medium: "Fotografie",
size: "60 × 40 cm",
style: ["Contemporary", "Minimal"],
likes: 145,
views: 689,
featured: false,
trending: true,
gallery: null,
location: "Frankfurt",
description: "Nächtliche Stadtreflektionen in S/W...",
tags: ["nacht", "stadt", "schwarz-weiß", "fotografie"]
 },
 {
id: 6,
image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
title: "Color Symphony",
artist: "David Richter",
artistId: "david-richter",
year: 2022,
price: 7200,
originalPrice: null,
verified: true,
category: "painting",
medium: "Acryl",
size: "150 × 120 cm",
style: ["Expressionismus", "Abstrakt"],
likes: 312,
views: 2156,
featured: true,
trending: false,
gallery: "Galerie Moderne München",
location: "München",
description: "Eine Symphonie aus Farben und Formen...",
tags: ["farben", "symphonie", "expressiv", "groß"]
 },
 {
id: 7,
image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
title: "Strukturelle Elemente",
artist: "Nina Hoffmann",
artistId: "nina-hoffmann",
year: 2024,
price: 890,
originalPrice: null,
verified: true,
category: "drawing",
medium: "Kohle",
size: "50 × 35 cm",
style: ["Minimal", "Strukturell"],
likes: 67,
views: 234,
featured: false,
trending: false,
gallery: null,
location: "Dresden",
description: "Strukturelle Studien in Kohle...",
tags: ["struktur", "kohle", "minimal", "studie"]
 },
 {
id: 8,
image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
title: "Temporal Flux",
artist: "Marcus Graf",
artistId: "marcus-graf",
year: 2023,
price: 15800,
originalPrice: null,
verified: true,
category: "mixed",
medium: "Mischtechnik",
size: "200 × 150 cm",
style: ["Konzeptkunst", "Zeitgenössisch"],
likes: 456,
views: 3421,
featured: true,
trending: true,
gallery: "Contemporary Art Berlin",
location: "Berlin",
description: "Konzeptuelle Arbeit über Zeit und Raum...",
tags: ["zeit", "raum", "konzept", "mischtechnik"]
 }
 ];

const trendingSearches = [
"Abstrakte Malerei", "Zeitgenössische Skulptur", "Digital Art", "Unter €2000",
"Große Formate", "Maria Schmidt", "Berliner Künstler", "Investment Art"
 ];

const recentSearches = [
"Moderne Skulptur", "Fotografie Hamburg", "Acryl unter €5000"
 ];

const handleFilterChange = (filterType: string, value: any) => {
setSelectedFilters(prev => ({
...prev,
[filterType]: value
 }));
setCurrentPage(1);
 };

const handleQuickFilter = (filter: any) => {
setSelectedFilters(prev => ({
...prev,
...filter
 }));
setCurrentPage(1);
 };

const handleSearch = (query: string) => {
setSearchQuery(query);
setCurrentPage(1);
setLoading(true);
// Simulate API call
setTimeout(() => {
setLoading(false);
 }, 1000);
 };

const filteredArtworks = artworks.filter(artwork => {
// Search query filter
if (searchQuery && !artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
!artwork.artist.toLowerCase().includes(searchQuery.toLowerCase()) &&
!artwork.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
return false;
 }

// Category filter
if (selectedFilters.category.length > 0 && !selectedFilters.category.includes(artwork.category)) {
return false;
 }

// Price range filter
if (artwork.price < selectedFilters.priceRange[0] || artwork.price > selectedFilters.priceRange[1]) {
return false;
 }

// Verified filter
if (selectedFilters.verified && !artwork.verified) {
return false;
 }

return true;
 });

const sortedArtworks = [...filteredArtworks].sort((a, b) => {
switch (sortBy) {
case 'price-asc':
return a.price - b.price;
case 'price-desc':
return b.price - a.price;
case 'newest':
return b.year - a.year;
case 'popular':
return b.likes - a.likes;
case 'trending':
return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
default:
return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
 }
 });

const formatPrice = (price: number) => {
return new Intl.NumberFormat('de-DE', {
style: 'currency',
currency: 'EUR',
minimumFractionDigits: 0,
maximumFractionDigits: 0
 }).format(price);
 };

const ArtworkCard = ({ artwork }: { artwork: any }) => (
<div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
<div className="aspect-square relative overflow-hidden">
<img
src={artwork.image}
alt={artwork.title}
className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
/>

{/* Overlay Badges */}
<div className="absolute top-3 left-3 flex flex-col space-y-1">
{artwork.verified && (
<div className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
<Verified className="w-3 h-3 mr-1" />
 Verifiziert
</div>
 )}
{artwork.featured && (
<div className="bg-slate-600 text-white px-2 py-1 rounded-full text-xs font-bold">
 Featured
</div>
 )}
{artwork.trending && (
<div className="bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-bold">
 Trending
</div>
 )}
</div>

{/* Price Badge */}
<div className="absolute bottom-3 left-3">
<div className="bg-white px-2 py-1 rounded-lg shadow-lg">
<div className="font-bold text-gray-900 text-sm">{formatPrice(artwork.price)}</div>
{artwork.originalPrice && (
<div className="text-gray-500 line-through text-xs">{formatPrice(artwork.originalPrice)}</div>
 )}
</div>
</div>

{/* Quick Actions - Hidden on mobile */}
<div className="absolute top-3 right-3 hidden sm:flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition-colors">
<Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
</button>
<button className="bg-white p-2 rounded-full shadow-lg hover:bg-slate-50 transition-colors">
<Eye className="w-4 h-4 text-gray-600 hover:text-slate-600" />
</button>
<button className="bg-white p-2 rounded-full shadow-lg hover:bg-emerald-50 transition-colors">
<ShoppingCart className="w-4 h-4 text-gray-600 hover:text-emerald-600" />
</button>
</div>

{/* Hover Overlay - Hidden on mobile */}
<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all hidden sm:flex items-center justify-center">
<Link href={`/artwork/${artwork.id}`}>
<button className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all transform translate-y-4 group-hover:translate-y-0 text-sm">
 Details ansehen
</button>
</Link>
</div>
</div>

<div className="p-4">
<div className="flex items-start justify-between mb-2">
<div className="flex-1 min-w-0">
<h3 className="font-bold text-gray-900 text-base mb-1 truncate">{artwork.title}</h3>
<Link href={`/artist/${artwork.artistId}`}>
<p className="text-gray-600 hover:text-slate-700 transition-colors cursor-pointer text-sm truncate">
 Von {artwork.artist}
</p>
</Link>
</div>
<div className="text-right ml-2 flex-shrink-0">
<div className="flex items-center text-gray-500 text-xs">
<Heart className="w-3 h-3 mr-1" />
{artwork.likes}
</div>
</div>
</div>

<div className="text-gray-500 text-xs mb-3 space-y-1">
<div className="truncate">{artwork.medium} • {artwork.size}</div>
<div>{artwork.year} • {artwork.location}</div>
{artwork.gallery && (
<div className="text-slate-700 truncate">{artwork.gallery}</div>
 )}
</div>

<div className="flex flex-wrap gap-1 mb-3">
{artwork.style.slice(0, 2).map((style: string, index: number) => (
<span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
{style}
</span>
 ))}
</div>

<div className="flex items-center justify-between">
<div className="flex items-center text-gray-500 text-xs">
<Eye className="w-3 h-3 mr-1" />
{artwork.views} Views
</div>
<Link href={`/artwork/${artwork.id}`}>
<button className="text-slate-700 font-semibold hover:text-slate-900 transition-colors text-xs">
 Mehr erfahren →
</button>
</Link>
</div>
</div>
</div>
 );

const FilterSidebar = () => (
<div className="w-full lg:w-80 bg-white p-4 lg:p-6 border-r border-gray-200 h-full overflow-y-auto">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-bold text-gray-900">Filter</h3>
<button
onClick={() => setSelectedFilters({
category: [],
priceRange: [0, 50000],
medium: [],
size: [],
year: [2000, 2025],
verified: true,
artist: [],
style: []
 })}
className="text-slate-700 text-sm hover:text-slate-900 transition-colors"
>
 Zurücksetzen
</button>
</div>

{/* Quick Filters */}
<div className="mb-6">
<h4 className="font-semibold text-gray-900 mb-3">Schnellfilter</h4>
<div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
{quickFilters.map((filter, index) => (
<button
key={index}
onClick={() => handleQuickFilter(filter.filter)}
className="bg-gray-100 hover:bg-slate-100 text-gray-700 hover:text-slate-800 px-3 py-2 rounded-lg text-sm transition-colors text-left"
>
{filter.label}
</button>
 ))}
</div>
</div>

{/* Categories */}
<div className="mb-6">
<h4 className="font-semibold text-gray-900 mb-3">Kategorien</h4>
<div className="space-y-2 max-h-48 overflow-y-auto">
{categories.map((category) => (
<div key={category.id} className="flex items-center">
<input
type="checkbox"
id={category.id}
checked={selectedFilters.category.includes(category.id)}
onChange={(e) => {
const newCategories = e.target.checked
 ? [...selectedFilters.category, category.id]
 : selectedFilters.category.filter(c => c !== category.id);
handleFilterChange('category', newCategories);
 }}
className="w-4 h-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
/>
<label htmlFor={category.id} className="ml-3 flex items-center justify-between w-full cursor-pointer text-sm">
<div className="flex items-center min-w-0">
<span className="mr-2 text-base">{category.icon}</span>
<span className="text-gray-700 truncate">{category.name}</span>
</div>
<span className="text-gray-500 text-xs ml-2 flex-shrink-0">({category.count})</span>
</label>
</div>
 ))}
</div>
</div>

{/* Price Range */}
<div className="mb-6">
<h4 className="font-semibold text-gray-900 mb-3">Preisspanne</h4>
<div className="space-y-3">
<div className="grid grid-cols-2 gap-3">
<input
type="number"
placeholder="Min"
value={selectedFilters.priceRange[0]}
onChange={(e) => handleFilterChange('priceRange', [parseInt(e.target.value) || 0, selectedFilters.priceRange[1]])}
className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm"
/>
<input
type="number"
placeholder="Max"
value={selectedFilters.priceRange[1]}
onChange={(e) => handleFilterChange('priceRange', [selectedFilters.priceRange[0], parseInt(e.target.value) || 50000])}
className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm"
/>
</div>
<div className="text-xs text-gray-600">
{formatPrice(selectedFilters.priceRange[0])} - {formatPrice(selectedFilters.priceRange[1])}
</div>
</div>
</div>

{/* Medium */}
<div className="mb-6">
<h4 className="font-semibold text-gray-900 mb-3">Medium</h4>
<div className="space-y-2 max-h-40 overflow-y-auto">
{mediums.map((medium, index) => (
<div key={index} className="flex items-center">
<input
type="checkbox"
id={`medium-${index}`}
checked={selectedFilters.medium.includes(medium)}
onChange={(e) => {
const newMediums = e.target.checked
 ? [...selectedFilters.medium, medium]
 : selectedFilters.medium.filter(m => m !== medium);
handleFilterChange('medium', newMediums);
 }}
className="w-4 h-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
/>
<label htmlFor={`medium-${index}`} className="ml-3 text-gray-700 cursor-pointer text-sm">
{medium}
</label>
</div>
 ))}
</div>
</div>

{/* Art Styles */}
<div className="mb-6">
<h4 className="font-semibold text-gray-900 mb-3">Kunststil</h4>
<div className="space-y-2 max-h-40 overflow-y-auto">
{artStyles.map((style, index) => (
<div key={index} className="flex items-center">
<input
type="checkbox"
id={`style-${index}`}
checked={selectedFilters.style.includes(style)}
onChange={(e) => {
const newStyles = e.target.checked
 ? [...selectedFilters.style, style]
 : selectedFilters.style.filter(s => s !== style);
handleFilterChange('style', newStyles);
 }}
className="w-4 h-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
/>
<label htmlFor={`style-${index}`} className="ml-3 text-gray-700 cursor-pointer text-sm">
{style}
</label>
</div>
 ))}
</div>
</div>

{/* Verification */}
<div className="mb-6">
<h4 className="font-semibold text-gray-900 mb-3">Verifizierung</h4>
<div className="flex items-center">
<input
type="checkbox"
id="verified"
checked={selectedFilters.verified}
onChange={(e) => handleFilterChange('verified', e.target.checked)}
className="w-4 h-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
/>
<label htmlFor="verified" className="ml-3 text-gray-700 cursor-pointer flex items-center text-sm">
<Verified className="w-4 h-4 mr-2 text-emerald-600" />
 Nur verifizierte Kunstwerke
</label>
</div>
</div>
</div>
 );

return (
<div className="min-h-screen bg-stone-50">
{/* Header */}
<header className="bg-white shadow-sm sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<Link href="/" className="flex items-center flex-shrink-0">
<div className="bg-gradient-to-r from-slate-800 to-stone-800 p-2 rounded-lg">
<Palette className="w-6 h-6 text-white" />
</div>
<span className="ml-3 text-xl font-bold text-gray-900 hidden sm:block">ArtMarket</span>
              <span className="ml-1 text-sm text-gray-600">by Galerie Jaeschke</span>

<span className="ml-3 text-lg font-bold text-gray-900 sm:hidden">Art</span>
</Link>

<nav className="hidden md:flex space-x-8">
<Link href="/" className="text-gray-700 hover:text-slate-700 transition-colors">
 Startseite
</Link>
<Link href="/sell" className="text-gray-700 hover:text-slate-700 transition-colors">
 Verkaufen
</Link>
<Link href="/verify" className="text-gray-700 hover:text-slate-700 transition-colors">
 Verifizierung
</Link>
<span className="text-slate-700 font-medium">Entdecken</span>
</nav>

<div className="flex items-center space-x-2">
<Link href="/auth/login" className="hidden sm:block text-gray-700 hover:text-slate-700 transition-colors">
 Anmelden
</Link>
<Link href="/sell/upload" className="hidden sm:block">
<button className="bg-gradient-to-r from-slate-800 to-stone-800 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
 Verkaufen
</button>
</Link>

<button
className="md:hidden p-2"
onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
>
{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
</button>
</div>
</div>

{/* Mobile Menu */}
{mobileMenuOpen && (
<div className="md:hidden border-t bg-white">
<div className="px-4 py-4 space-y-3">
<Link href="/" className="block text-gray-700 hover:text-slate-700 py-2">Startseite</Link>
<Link href="/sell" className="block text-gray-700 hover:text-slate-700 py-2">Verkaufen</Link>
<Link href="/verify" className="block text-gray-700 hover:text-slate-700 py-2">Verifizierung</Link>
<span className="block text-slate-700 font-medium py-2">Entdecken</span>
<hr />
<Link href="/auth/login" className="block text-gray-700 py-2">Anmelden</Link>
<Link href="/sell/upload" className="block">
<button className="w-full bg-gradient-to-r from-slate-800 to-stone-800 text-white py-3 rounded-lg">
 Kunst verkaufen
</button>
</Link>
</div>
</div>
 )}
</div>
</header>

{/* Search Hero */}
<section className="bg-gradient-to-r from-slate-800 to-stone-800 text-white py-8 lg:py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-6 lg:mb-8">
<h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 lg:mb-4">
 Entdecke einzigartige Kunstwerke
</h1>
<p className="text-base sm:text-lg lg:text-xl text-slate-200 mb-6 lg:mb-8 px-4">
 Über 50.000 verifizierte Kunstwerke von 12.000+ Künstlern weltweit
</p>

{/* Search Bar */}
<div className="max-w-4xl mx-auto mb-6 lg:mb-8">
<div className="relative">
<Search className="absolute left-4 lg:left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 lg:w-6 lg:h-6 text-gray-400" />
<input
type="text"
placeholder="Suche nach Kunstwerken, Künstlern, Stilen..."
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
className="w-full pl-12 lg:pl-16 pr-20 lg:pr-32 py-3 lg:py-4 rounded-full text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-300 text-base lg:text-lg"
/>
<button
onClick={() => handleSearch(searchQuery)}
className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white px-4 lg:px-8 py-2 rounded-full font-semibold hover:shadow-lg transition-all text-sm lg:text-base"
>
 Suchen
</button>
</div>
</div>

{/* Trending & Recent Searches */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
<div>
<h3 className="font-semibold mb-3 text-slate-200">Trending:</h3>
<div className="flex flex-wrap gap-2">
{trendingSearches.slice(0, 4).map((search, index) => (
<button
key={index}
onClick={() => handleSearch(search)}
className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full text-sm transition-colors"
>
{search}
</button>
 ))}
</div>
</div>
<div>
<h3 className="font-semibold mb-3 text-slate-200">Zuletzt gesucht:</h3>
<div className="flex flex-wrap gap-2">
{recentSearches.map((search, index) => (
<button
key={index}
onClick={() => handleSearch(search)}
className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full text-sm transition-colors"
>
{search}
</button>
 ))}
</div>
</div>
</div>
</div>
</div>
</section>

{/* Main Content */}
<div className="flex flex-col lg:flex-row">
{/* Desktop Filter Sidebar */}
<div className="hidden lg:block flex-shrink-0">
<FilterSidebar />
</div>

{/* Main Content Area */}
<div className="flex-1 min-w-0">
{/* Toolbar */}
<div className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="flex items-center space-x-4">
<button
onClick={() => setFiltersOpen(true)}
className="lg:hidden flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
>
<SlidersHorizontal className="w-4 h-4 mr-2" />
 Filter
</button>

<div className="text-gray-600 text-sm lg:text-base">
{loading ? (
<div className="flex items-center">
<Loader2 className="w-4 h-4 mr-2 animate-spin" />
 Suche läuft...
</div>
 ) : (
<span>{sortedArtworks.length} Kunstwerke gefunden</span>
 )}
</div>
</div>

<div className="flex items-center space-x-3">
{/* Sort Dropdown */}
<div className="relative flex-1 sm:flex-none">
<select
value={sortBy}
onChange={(e) => setSortBy(e.target.value)}
className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm w-full sm:w-auto"
>
<option value="featured">Featured</option>
<option value="newest">Neueste zuerst</option>
<option value="price-asc">Preis: Niedrig → Hoch</option>
<option value="price-desc">Preis: Hoch → Niedrig</option>
<option value="popular">Beliebteste</option>
<option value="trending">Trending</option>
</select>
<ArrowUpDown className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
</div>

{/* View Mode Toggle */}
<div className="flex bg-gray-100 rounded-lg p-1">
<button
onClick={() => setViewMode('grid')}
className={`p-2 rounded transition-colors ${
viewMode === 'grid'
 ? 'bg-white text-slate-700 shadow-sm'
 : 'text-gray-600 hover:text-gray-900'
}`}
>
<Grid3X3 className="w-4 h-4" />
</button>
<button
onClick={() => setViewMode('list')}
className={`p-2 rounded transition-colors ${
viewMode === 'list'
 ? 'bg-white text-slate-700 shadow-sm'
 : 'text-gray-600 hover:text-gray-900'
}`}
>
<List className="w-4 h-4" />
</button>
</div>
</div>
</div>
</div>

{/* Results Grid */}
<div className="p-4 lg:p-6">
{loading ? (
<div className="flex items-center justify-center py-20">
<Loader2 className="w-8 h-8 animate-spin text-slate-600" />
<span className="ml-3 text-gray-600">Kunstwerke werden geladen...</span>
</div>
 ) : sortedArtworks.length === 0 ? (
<div className="text-center py-20">
<Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
<h3 className="text-xl font-semibold text-gray-900 mb-2">Keine Kunstwerke gefunden</h3>
<p className="text-gray-600 mb-6 px-4">
 Versuche deine Suchkriterien zu ändern oder Filter zurückzusetzen.
</p>
<button
onClick={() => {
setSearchQuery('');
setSelectedFilters({
category: [],
priceRange: [0, 50000],
medium: [],
size: [],
year: [2000, 2025],
verified: true,
artist: [],
style: []
 });
 }}
className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
>
 Filter zurücksetzen
</button>
</div>
 ) : (
<>
<div className={`grid gap-4 lg:gap-6 ${
viewMode === 'grid'
 ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'
 : 'grid-cols-1'
}`}>
{sortedArtworks.map((artwork) => (
<ArtworkCard key={artwork.id} artwork={artwork} />
 ))}
</div>

{/* Load More Button */}
<div className="text-center mt-8 lg:mt-12">
<button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 lg:px-8 py-3 rounded-lg font-semibold transition-colors">
 Mehr laden
</button>
</div>
</>
 )}
</div>
</div>
</div>

{/* Mobile Filter Modal */}
{filtersOpen && (
<div className="fixed inset-0 z-50 lg:hidden">
<div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setFiltersOpen(false)} />
<div className="absolute right-0 top-0 h-full w-full sm:w-80 bg-white overflow-hidden">
<div className="flex items-center justify-between p-4 border-b">
<h3 className="text-lg font-bold">Filter</h3>
<button onClick={() => setFiltersOpen(false)}>
<X className="w-6 h-6" />
</button>
</div>
<div className="h-full overflow-y-auto pb-20">
<FilterSidebar />
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
<button
onClick={() => setFiltersOpen(false)}
className="w-full bg-slate-700 text-white py-3 rounded-lg font-semibold"
>
 Filter anwenden
</button>
</div>
</div>
</div>
 )}

{/* Footer */}
<footer className="bg-gray-900 text-white py-12 lg:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<div className="flex items-center mb-4">
<div className="bg-gradient-to-r from-slate-700 to-stone-700 p-2 rounded-lg">
<Palette className="w-6 h-6 text-white" />
</div>
<span className="ml-3 text-xl font-bold">ArtMarket</span>
              <span className="ml-1 text-sm text-gray-600">by Galerie Jaeschke</span>

</div>
<p className="text-gray-400 text-sm">
 Entdecke, kaufe und verkaufe authentische Kunstwerke von verifizierten Künstlern.
</p>
</div>

<div>
<h3 className="font-bold mb-4">Entdecken</h3>
<ul className="space-y-2 text-gray-400 text-sm">
<li><Link href="/search?category=painting" className="hover:text-white transition-colors">Malerei</Link></li>
<li><Link href="/search?category=sculpture" className="hover:text-white transition-colors">Skulptur</Link></li>
<li><Link href="/search?category=photography" className="hover:text-white transition-colors">Fotografie</Link></li>
<li><Link href="/search?verified=true" className="hover:text-white transition-colors">Verifizierte Kunst</Link></li>
</ul>
</div>

<div>
<h3 className="font-bold mb-4">Künstler</h3>
<ul className="space-y-2 text-gray-400 text-sm">
<li><Link href="/artists" className="hover:text-white transition-colors">Alle Künstler</Link></li>
<li><Link href="/artists/trending" className="hover:text-white transition-colors">Trending Artists</Link></li>
<li><Link href="/sell" className="hover:text-white transition-colors">Kunst verkaufen</Link></li>
<li><Link href="/verify" className="hover:text-white transition-colors">Verifizierung</Link></li>
</ul>
</div>

<div>
<h3 className="font-bold mb-4">Support</h3>
<ul className="space-y-2 text-gray-400 text-sm">
<li><a href="#" className="hover:text-white transition-colors">Hilfe-Center</a></li>
<li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
<li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
<li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
</ul>
</div>
</div>

<div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center text-gray-400 text-sm">
<p>&copy; 2025 ArtMarket. Entdecke Kunst mit Vertrauen.</p>
</div>
</div>
</footer>
</div>
 );
};

export default SearchBrowsePage;