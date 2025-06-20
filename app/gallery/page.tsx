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
  Briefcase, Scale, Filter, Settings, Download, ExternalLink
} from 'lucide-react';

const GalleryAccessPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [applicationStep, setApplicationStep] = useState(1);
  const [formData, setFormData] = useState({
    galleryName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    website: '',
    yearsInBusiness: '',
    specialization: '',
    annualVolume: '',
    physicalGallery: true,
    onlinePresence: true,
    references: ''
  });

  const galleryPlans = [
    {
      id: 'starter',
      name: 'Gallery Starter',
      price: 'Kostenlos',
      originalPrice: null,
      description: 'Perfekt für neue Galerien',
      features: [
        'Zugang zu 1.000+ verifizierten Werken',
        'Basis-Suchfilter',
        'Standard-Support',
        'Monatliches Limit: 5 Käufe',
        'Standardversand'
      ],
      notIncluded: [
        'Rabatte',
        'Priority Support',
        'Bulk-Features'
      ],
      popular: false,
      color: 'from-gray-600 to-gray-700'
    },
    {
      id: 'professional',
      name: 'Gallery Professional',
      price: '€199/Monat',
      originalPrice: '€299',
      description: 'Für etablierte Galerien',
      features: [
        'Zugang zu allen 50.000+ verifizierten Werken',
        'Erweiterte Suchfilter & KI-Empfehlungen',
        'Priority Support',
        'Unbegrenzte Käufe',
        'Bis zu 25% Großhandelsrabatt',
        'Express-Versand inklusive',
        'Dedicated Account Manager',
        'Exklusive Previews neuer Werke'
      ],
      notIncluded: [],
      popular: true,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'enterprise',
      name: 'Gallery Enterprise',
      price: 'Custom Pricing',
      originalPrice: null,
      description: 'Für große Galerie-Ketten',
      features: [
        'Alles aus Professional',
        'Bis zu 40% Großhandelsrabatt',
        'API-Zugang für Integration',
        'White-Label Lösungen',
        'Custom Kurierung',
        'Mehrere Nutzer-Accounts',
        'Inventory Management System',
        'Analytics & Reporting Dashboard',
        'VIP-Support & Beratung'
      ],
      notIncluded: [],
      popular: false,
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const partnerBenefits = [
    {
      icon: <Verified className="w-8 h-8" />,
      title: "100% Verifizierte Kunst",
      description: "Jedes Werk durchläuft unseren 3-Stufen Authentizitätsprozess",
      highlight: "Authentizitätsgarantie"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Großhandelspreise",
      description: "Bis zu 40% Rabatt gegenüber Einzelkundenpreisen",
      highlight: "Höhere Margen"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Express-Beschaffung",
      description: "Direkte Verbindung zu Künstlern, 24-48h Lieferung",
      highlight: "Schneller Nachschub"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Marktanalysen",
      description: "Trends, Preisdaten und Verkaufsprognosen",
      highlight: "Datenbasierte Entscheidungen"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Exklusive Previews",
      description: "Erste Sicht auf neue Werke vor der öffentlichen Freigabe",
      highlight: "Competitive Advantage"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "Persönlicher Account Manager und Priority Support",
      highlight: "VIP-Behandlung"
    }
  ];

  const successStories = [
    {
      name: "Galerie Moderne München",
      owner: "Dr. Thomas Weber",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      location: "München",
      revenue: "€450k",
      timeframe: "12 Monate",
      artworksSold: "127 Werke",
      quote: "ArtMarket hat unsere Beschaffung revolutioniert. Wir finden authentische Werke 3x schneller als zuvor.",
      highlights: [
        "300% mehr Neuentdeckungen",
        "25% niedrigere Beschaffungskosten",
        "98% Kundenzufriedenheit"
      ]
    },
    {
      name: "Contemporary Art Berlin",
      owner: "Sarah Schmidt",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      location: "Berlin",
      revenue: "€280k",
      timeframe: "8 Monate",
      artworksSold: "89 Werke",
      quote: "Die Verifizierung gibt unseren Kunden absolutes Vertrauen. Reklamationen sind praktisch null.",
      highlights: [
        "0% Authentizitätsprobleme",
        "40% Zeitersparnis bei Einkauf",
        "Expansion in 2 neue Standorte"
      ]
    },
    {
      name: "Art Collection Hamburg",
      owner: "Michael Klein",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      location: "Hamburg",
      revenue: "€680k",
      timeframe: "18 Monate",
      artworksSold: "203 Werke",
      quote: "Der API-Zugang hat unsere Inventory-Systeme perfekt integriert. Alles läuft automatisiert.",
      highlights: [
        "Vollautomatisierte Beschaffung",
        "60% weniger administrative Arbeit",
        "200% Umsatzsteigerung"
      ]
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Galerie-Informationen",
      description: "Grunddaten und Kontakt"
    },
    {
      step: 2,
      title: "Geschäftstätigkeit",
      description: "Spezialisierung und Volumen"
    },
    {
      step: 3,
      title: "Plan wählen",
      description: "Passenden Zugang auswählen"
    },
    {
      step: 4,
      title: "Verifikation",
      description: "Dokumente und Prüfung"
    }
  ];

  const featuredArtworks = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Abstrakte Komposition VII",
      artist: "Maria Schmidt",
      year: "2024",
      price: "€3.450",
      galleryPrice: "€2.760",
      discount: "20%",
      verified: true,
      category: "Zeitgenössisch",
      medium: "Öl auf Leinwand",
      size: "100 × 80 cm"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Urban Reflection",
      artist: "Alex Müller", 
      year: "2023",
      price: "€5.200",
      galleryPrice: "€3.900",
      discount: "25%",
      verified: true,
      category: "Skulptur",
      medium: "Bronze",
      size: "45 × 30 × 60 cm"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Digital Dreams",
      artist: "Lisa Wagner",
      year: "2024",
      price: "€2.100",
      galleryPrice: "€1.680",
      discount: "20%",
      verified: true,
      category: "Digital Art",
      medium: "Digital Print",
      size: "70 × 50 cm"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Nature's Geometry",
      artist: "Tom Klein",
      year: "2023",
      price: "€4.800",
      galleryPrice: "€3.360",
      discount: "30%",
      verified: true,
      category: "Mixed Media",
      medium: "Acryl & Collage",
      size: "120 × 90 cm"
    }
  ];

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (applicationStep < 4) {
      setApplicationStep(applicationStep + 1);
    }
  };

  const prevStep = () => {
    if (applicationStep > 1) {
      setApplicationStep(applicationStep - 1);
    }
  };

  const renderApplicationStep = () => {
    switch (applicationStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Galerie-Informationen</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name der Galerie *
                </label>
                <input
                  type="text"
                  value={formData.galleryName}
                  onChange={(e) => updateFormData('galleryName', e.target.value)}
                  placeholder="z.B. Galerie Moderne München"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ansprechpartner *
                </label>
                <input
                  type="text"
                  value={formData.contactPerson}
                  onChange={(e) => updateFormData('contactPerson', e.target.value)}
                  placeholder="Dr. Thomas Weber"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail Adresse *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="info@galerie-moderne.de"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder="+49 89 123456789"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse *
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => updateFormData('address', e.target.value)}
                  placeholder="Maximilianstraße 12"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stadt *
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => updateFormData('city', e.target.value)}
                  placeholder="München"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Land *
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => updateFormData('country', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Land auswählen</option>
                  <option value="DE">Deutschland</option>
                  <option value="AT">Österreich</option>
                  <option value="CH">Schweiz</option>
                  <option value="FR">Frankreich</option>
                  <option value="UK">Vereinigtes Königreich</option>
                  <option value="US">USA</option>
                  <option value="other">Anderes</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => updateFormData('website', e.target.value)}
                  placeholder="https://www.galerie-moderne.de"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Geschäftstätigkeit</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jahre im Geschäft *
                </label>
                <select
                  value={formData.yearsInBusiness}
                  onChange={(e) => updateFormData('yearsInBusiness', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Auswählen</option>
                  <option value="0-1">Unter 1 Jahr</option>
                  <option value="1-3">1-3 Jahre</option>
                  <option value="3-5">3-5 Jahre</option>
                  <option value="5-10">5-10 Jahre</option>
                  <option value="10+">Über 10 Jahre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Spezialisierung *
                </label>
                <select
                  value={formData.specialization}
                  onChange={(e) => updateFormData('specialization', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Auswählen</option>
                  <option value="contemporary">Zeitgenössische Kunst</option>
                  <option value="modern">Moderne Kunst</option>
                  <option value="classical">Klassische Kunst</option>
                  <option value="photography">Fotografie</option>
                  <option value="sculpture">Skulptur</option>
                  <option value="digital">Digital Art</option>
                  <option value="mixed">Gemischt</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jährliches Einkaufsvolumen *
                </label>
                <select
                  value={formData.annualVolume}
                  onChange={(e) => updateFormData('annualVolume', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Auswählen</option>
                  <option value="0-50k">€0 - €50.000</option>
                  <option value="50k-150k">€50.000 - €150.000</option>
                  <option value="150k-500k">€150.000 - €500.000</option>
                  <option value="500k-1m">€500.000 - €1.000.000</option>
                  <option value="1m+">Über €1.000.000</option>
                </select>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="physicalGallery"
                    checked={formData.physicalGallery}
                    onChange={(e) => updateFormData('physicalGallery', e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="physicalGallery" className="ml-3 text-sm text-gray-700">
                    Physische Galerie vorhanden
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="onlinePresence"
                    checked={formData.onlinePresence}
                    onChange={(e) => updateFormData('onlinePresence', e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="onlinePresence" className="ml-3 text-sm text-gray-700">
                    Online-Präsenz/E-Commerce
                  </label>
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Referenzen (optional)
                </label>
                <textarea
                  value={formData.references}
                  onChange={(e) => updateFormData('references', e.target.value)}
                  placeholder="Bekannte Künstler, Museen oder andere Galerien mit denen Sie zusammenarbeiten..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Plan auswählen</h3>
            <div className="space-y-6">
              {galleryPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                    selectedPlan === plan.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-3">
                      Empfohlen
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-xl">{plan.name}</h4>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{plan.price}</div>
                      {plan.originalPrice && (
                        <div className="text-gray-500 line-through text-sm">{plan.originalPrice}</div>
                      )}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-green-900 mb-2">Inkludiert:</h5>
                      <ul className="space-y-1">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {plan.notIncluded.length > 0 && (
                      <div>
                        <h5 className="font-semibold text-red-900 mb-2">Nicht inkludiert:</h5>
                        <ul className="space-y-1">
                          {plan.notIncluded.map((feature, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <X className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Verifikation & Abschluss</h3>
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-bold text-blue-900 mb-4">Benötigte Dokumente</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Gewerbeanmeldung oder Handelsregisterauszug</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Nachweis der Geschäftstätigkeit (Website, Broschüren, etc.)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Referenzen oder Portfolio bisheriger Arbeiten</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Ausweis des Ansprechpartners</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-bold text-green-900 mb-4">Was passiert als nächstes?</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1</div>
                  <span>Ihre Anmeldung wird binnen 24h geprüft</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">2</div>
                  <span>Sie erhalten Zugangsdaten per E-Mail</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3</div>
                  <span>Persönliche Einführung mit Ihrem Account Manager</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">4</div>
                  <span>Sofortiger Zugang zu verifizierten Kunstwerken</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Ihre Anmeldung im Überblick</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Galerie:</span> {formData.galleryName || 'Nicht angegeben'}
                </div>
                <div>
                  <span className="font-medium">Ansprechpartner:</span> {formData.contactPerson || 'Nicht angegeben'}
                </div>
                <div>
                  <span className="font-medium">E-Mail:</span> {formData.email || 'Nicht angegeben'}
                </div>
                <div>
                  <span className="font-medium">Stadt:</span> {formData.city || 'Nicht angegeben'}
                </div>
                <div>
                  <span className="font-medium">Spezialisierung:</span> {formData.specialization || 'Nicht ausgewählt'}
                </div>
                <div>
                  <span className="font-medium">Gewählter Plan:</span> {galleryPlans.find(p => p.id === selectedPlan)?.name || 'Nicht ausgewählt'}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">ArtMarket</span>
              <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Galerien</span>
            </Link>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
                Startseite
              </Link>
              <Link href="/sell" className="text-gray-700 hover:text-purple-600 transition-colors">
                Verkaufen
              </Link>
              <Link href="/verify" className="text-gray-700 hover:text-purple-600 transition-colors">
                Verifizierung
              </Link>
              <span className="text-purple-600 font-medium">Galerien</span>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/auth/login" className="text-gray-700 hover:text-purple-600 transition-colors">
                Anmelden
              </Link>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                Galerie beantragen
              </button>
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Building2 className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm">500+ Partner-Galerien • 100% verifizierte Kunst</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Exklusiver
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Galerie-Zugang
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Beschaffen Sie authentische, verifizierte Kunstwerke direkt von Künstlern. 
                Großhandelspreise, Express-Lieferung, Authentizitätsgarantie.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">50k+</div>
                  <div className="text-blue-200 text-sm">Verifizierte Werke</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">40%</div>
                  <div className="text-blue-200 text-sm">Großhandelsrabatt</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">24h</div>
                  <div className="text-blue-200 text-sm">Express-Lieferung</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  Galerie anmelden
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Demo ansehen
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Aktuelle Galerie-Angebote</h3>
                
                <div className="space-y-4">
                  {featuredArtworks.slice(0, 3).map((artwork) => (
                    <div key={artwork.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <img 
                        src={artwork.image} 
                        alt={artwork.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{artwork.title}</h4>
                        <p className="text-gray-600 text-xs">{artwork.artist}</p>
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500 line-through text-xs">{artwork.price}</span>
                            <span className="text-green-600 font-bold text-sm">{artwork.galleryPrice}</span>
                          </div>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">
                            -{artwork.discount}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Alle Angebote ansehen
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Warum 500+ Galerien uns vertrauen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exklusive Vorteile für professionelle Kunsthändler und Galerien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {benefit.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exklusive Galerie-Preise
            </h2>
            <p className="text-xl text-gray-600">
              Bis zu 40% Rabatt gegenüber Einzelkundenpreisen - nur für verifizierte Galerien.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArtworks.map((artwork) => (
              <div key={artwork.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Verified className="w-3 h-3 mr-1" />
                    Verifiziert
                  </div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    -{artwork.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{artwork.title}</h3>
                  <p className="text-gray-600 text-sm mb-1">Von {artwork.artist}</p>
                  <p className="text-gray-500 text-xs mb-4">{artwork.medium} • {artwork.size}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Listenpreis:</span>
                      <span className="text-gray-500 line-through">{artwork.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">Galerie-Preis:</span>
                      <span className="text-green-600 font-bold text-lg">{artwork.galleryPrice}</span>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                    In Warenkorb
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Über 50.000 verifizierte Kunstwerke verfügbar
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all">
              Vollständigen Katalog durchsuchen
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Galerie-Mitgliedschaften
            </h2>
            <p className="text-xl text-gray-600">
              Wählen Sie den passenden Plan für Ihre Galerie. Jederzeit kündbar.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {galleryPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${plan.popular ? 'border-blue-500 transform scale-105' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold text-center mb-6">
                    Beliebteste Wahl
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  {plan.originalPrice && (
                    <div className="text-gray-500 line-through">{plan.originalPrice}</div>
                  )}
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all`}>
                  {plan.id === 'enterprise' ? 'Kontakt aufnehmen' : 'Plan wählen'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Erfolgreiche Partner-Galerien
            </h2>
            <p className="text-xl text-gray-600">
              Echte Geschichten von Galerien, die mit ArtMarket wachsen.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src={story.image} 
                    alt={story.owner}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{story.name}</h3>
                    <p className="text-gray-600 text-sm">{story.owner}</p>
                    <p className="text-gray-500 text-xs flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {story.location}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-xl font-bold text-green-600">{story.revenue}</div>
                    <div className="text-gray-600 text-xs">Umsatz</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">{story.artworksSold}</div>
                    <div className="text-gray-600 text-xs">in {story.timeframe}</div>
                  </div>
                </div>

                <blockquote className="text-gray-700 italic mb-6">
                  "{story.quote}"
                </blockquote>

                <div className="space-y-2">
                  {story.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Galerie-Zugang beantragen
            </h2>
            <p className="text-xl text-gray-600">
              Werden Sie Teil unseres exklusiven Galerie-Netzwerks in 4 einfachen Schritten.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {applicationSteps.map((step, index) => (
                <div key={step.step} className="flex items-center">
                  <div className={`flex items-center ${index < applicationSteps.length - 1 ? 'mr-4' : ''}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      applicationStep >= step.step 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {applicationStep > step.step ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        step.step
                      )}
                    </div>
                    <div className="ml-3 hidden md:block">
                      <div className={`text-sm font-medium ${
                        applicationStep >= step.step ? 'text-blue-600' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-500">{step.description}</div>
                    </div>
                  </div>
                  {index < applicationSteps.length - 1 && (
                    <div className={`hidden md:block w-12 h-0.5 mx-4 ${
                      applicationStep > step.step ? 'bg-blue-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-gray-50 rounded-2xl p-8">
            {renderApplicationStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={applicationStep === 1}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                  applicationStep === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-500 text-white hover:bg-gray-600'
                }`}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Zurück
              </button>

              {applicationStep < 4 ? (
                <button
                  onClick={nextStep}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Weiter
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              ) : (
                <button className="flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                  <Send className="w-5 h-5 mr-2" />
                  Anmeldung absenden
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für den exklusiven Galerie-Zugang?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Schließen Sie sich 500+ erfolgreichen Galerien an und profitieren Sie von verifizierten Kunstwerken zu Großhandelspreisen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all flex items-center justify-center">
              <Building2 className="w-5 h-5 mr-2" />
              Jetzt beantragen
            </button>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all">
                Beratung vereinbaren
              </button>
            </Link>
          </div>

          <div className="text-center text-blue-200 text-sm">
            ✓ 24h Prüfungszeit ✓ Sofortiger Zugang ✓ Keine Setup-Gebühren
          </div>
        </div>
      </section>

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
                              <span className="ml-1 text-sm text-gray-600">by Galerie Jaeschke</span>

                <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded-full">Galerien</span>
              </div>
              <p className="text-gray-400">
                Der exklusive B2B-Marktplatz für professionelle Kunsthändler.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Für Galerien</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/gallery" className="hover:text-white transition-colors">Zugang beantragen</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Großhandel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API-Integration</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partnervorteile</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Verifizierte Kunst</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Express-Lieferung</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bulk-Einkauf</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Account Management</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Galerie-Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ArtMarket. Exklusive B2B-Lösungen für professionelle Galerien.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GalleryAccessPage;