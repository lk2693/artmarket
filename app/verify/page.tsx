"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Next.js Link Component hinzufügen
import { 
  Menu, X, Palette, Upload, Camera, Shield, DollarSign, CheckCircle, Clock, 
  Star, Award, TrendingUp, Users, Eye, Zap, ChevronRight, ChevronDown, 
  Play, ArrowRight, Building2, Verified, Heart, MessageCircle, Image,
  Trash2, Plus, Info, AlertCircle, CreditCard, Globe, Package, Paintbrush,
  Ruler, Calendar, FileText, Save, Send, ArrowLeft, Search, Microscope,
  Database, UserCheck, Fingerprint, ScanLine, Bot, Brain,
  BadgeCheck, Lock, Layers, Target, Lightbulb, Timer, Smartphone
} from 'lucide-react';

const VerifyPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTab, setSelectedTab] = useState('process');

  const verificationSteps = [
    {
      step: 1,
      title: "KI-Analyse",
      time: "1-2 Stunden",
      icon: <Brain className="w-8 h-8 lg:w-12 lg:h-12" />,
      description: "Automatische Stil- und Authentizitätsprüfung",
      details: [
        "Stilanalyse und Epoch-Identifikation",
        "Pinselstrich-Pattern-Erkennung", 
        "Farbpigment-Spektralanalyse",
        "Ähnlichkeitsvergleich mit Datenbank",
        "Technische Konsistenz-Prüfung"
      ],
      accuracy: "94%",
      color: "bg-blue-600"
    },
    {
      step: 2,
      title: "Experten-Review",
      time: "6-24 Stunden",
      icon: <UserCheck className="w-8 h-8 lg:w-12 lg:h-12" />,
      description: "Manuelle Prüfung durch zertifizierte Kunstexperten",
      details: [
        "Kunsthistorische Einordnung",
        "Material- und Technikanalyse",
        "Provenienz-Überprüfung",
        "Signatur-Authentizität",
        "Marktwert-Assessment"
      ],
      accuracy: "99.2%",
      color: "bg-slate-600"
    },
    {
      step: 3,
      title: "Blockchain-Zertifikat",
      time: "Sofort",
      icon: <FileText className="w-8 h-8 lg:w-12 lg:h-12" />,
      description: "Fälschungssicheres digitales Authentizitätszertifikat",
      details: [
        "Unveränderliche Blockchain-Registrierung",
        "QR-Code für sofortige Verifikation",
        "Digitaler Fingerprint des Kunstwerks",
        "Transferhistorie-Tracking",
        "Lebenslange Gültigkeit"
      ],
      accuracy: "100%",
      color: "bg-emerald-600"
    }
  ];

  const verificationPlans = [
    {
      id: 'standard',
      name: 'Standard',
      price: '€49',
      originalPrice: null,
      time: '24-48h',
      popular: false,
      features: [
        'KI-Authentizitätsprüfung',
        'Basis-Expertenreview',
        'Digitales Zertifikat',
        'QR-Code Verifizierung',
        'Standard Support'
      ],
      notIncluded: [],
      color: 'bg-slate-600',
      description: 'Perfekt für Kunstwerke bis €5.000'
    },
    {
      id: 'express',
      name: 'Express',
      price: '€99',
      originalPrice: '€149',
      time: '6-12h',
      popular: true,
      features: [
        'Alles aus Standard',
        'Express-Bearbeitung',
        'Detailliertes Expertengutachten',
        'Marktpreis-Assessment',
        'Priority Support',
        'Marketing-Boost'
      ],
      notIncluded: [],
      color: 'bg-blue-600',
      description: 'Optimal für Kunstwerke €5.000 - €25.000'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '€199',
      originalPrice: '€299',
      time: '3-6h',
      popular: false,
      features: [
        'Alles aus Express',
        'Ultra-Express-Verifizierung',
        'Umfassendes Provenienz-Research',
        'Investment-Analyse',
        'Galerie-Direct-Connect',
        'PR & Marketing Package',
        'Dedicated Art Expert'
      ],
      notIncluded: [],
      color: 'bg-gray-700',
      description: 'Exklusiv für Kunstwerke über €25.000'
    }
  ];

  // ... (rest of the component data stays the same)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">ArtMarket</span>
                            <span className="ml-1 text-sm text-gray-600">by Galerie Jaeschke</span>

            </Link>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Startseite
              </Link>
              <Link href="/sell" className="text-gray-700 hover:text-blue-600 transition-colors">
                Verkaufen
              </Link>
              <span className="text-blue-600 font-medium">Verifizierung</span>
              <Link href="/search" className="text-gray-700 hover:text-blue-600 transition-colors">
                Entdecken
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/auth/login" className="text-gray-700 hover:text-blue-600 transition-colors">
                Anmelden
              </Link>
              <Link href="/verify">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
                  Jetzt verifizieren
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
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Startseite</Link>
              <Link href="/sell" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Verkaufen</Link>
              <span className="block px-3 py-2 text-blue-600 font-medium">Verifizierung</span>
              <Link href="/search" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Entdecken</Link>
              <div className="border-t border-gray-200 pt-2">
                <Link href="/auth/login" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Anmelden</Link>
                <Link href="/verify">
                  <button className="w-full bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-all mt-2">
                    Jetzt verifizieren
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900 text-white py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 mb-4 lg:mb-6">
                <Shield className="w-4 h-4 mr-2 text-emerald-400" />
                <span className="text-sm text-gray-100">99.8% Authentizitätsrate • Blockchain-gesichert</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                Kunstwerk
                <span className="block text-blue-400">
                  verifizieren lassen
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl mb-6 lg:mb-8 text-gray-200">
                Die fortschrittlichste Kunstverifizierung der Welt. KI-gestützt, expertengeprüft, blockchain-gesichert. 
                Authentizität garantiert in unter 24 Stunden.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6 lg:mb-8">
                <Link href="/sell/upload">
                  <button className="bg-white text-blue-600 px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center">
                    <Upload className="w-5 h-5 mr-2" />
                    Kunstwerk hochladen
                  </button>
                </Link>
                <button 
                  onClick={() => setSelectedTab('process')}
                  className="border-2 border-white text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Prozess ansehen
                </button>
              </div>

              {/* Process Flow - Mobile Optimized */}
              <div className="overflow-x-auto">
                <div className="flex items-center space-x-2 min-w-max">
                  {[
                    { step: "Upload", icon: <Upload className="w-4 h-4 lg:w-5 lg:h-5" />, description: "Kunstwerk hochladen" },
                    { step: "KI-Check", icon: <Bot className="w-4 h-4 lg:w-5 lg:h-5" />, description: "Automatische Analyse" },
                    { step: "Experten", icon: <UserCheck className="w-4 h-4 lg:w-5 lg:h-5" />, description: "Manuelle Prüfung" },
                    { step: "Zertifikat", icon: <FileText className="w-4 h-4 lg:w-5 lg:h-5" />, description: "Blockchain-Registrierung" },
                    { step: "Live", icon: <Globe className="w-4 h-4 lg:w-5 lg:h-5" />, description: "Marktplatz-Freigabe" }
                  ].map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 lg:px-3 lg:py-2">
                        {step.icon}
                        <span className="ml-1 lg:ml-2 text-xs lg:text-sm font-medium text-gray-100">{step.step}</span>
                      </div>
                      {index < 4 && (
                        <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-gray-300 mx-1 lg:mx-2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Live Verifizierung</h3>
                
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-center justify-between p-3 lg:p-4 bg-emerald-50 rounded-lg">
                    <div className="flex items-center min-w-0">
                      <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-500 mr-2 lg:mr-3 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="font-medium text-gray-900 text-sm lg:text-base truncate">Abstrakte Komposition I</div>
                        <div className="text-xs lg:text-sm text-gray-600">Maria Schmidt • Express</div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <div className="text-emerald-600 font-bold text-sm lg:text-base">Verifiziert</div>
                      <div className="text-xs text-gray-500">vor 3 Min</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 lg:p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center min-w-0">
                      <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-blue-500 mr-2 lg:mr-3 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="font-medium text-gray-900 text-sm lg:text-base truncate">Moderne Skulptur</div>
                        <div className="text-xs lg:text-sm text-gray-600">Alex Weber • Standard</div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <div className="text-blue-600 font-bold text-sm lg:text-base">In Prüfung</div>
                      <div className="text-xs text-gray-500">14h verbleibend</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 lg:p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center min-w-0">
                      <Brain className="w-4 h-4 lg:w-5 lg:h-5 text-slate-500 mr-2 lg:mr-3 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="font-medium text-gray-900 text-sm lg:text-base truncate">Digitale Collage</div>
                        <div className="text-xs lg:text-sm text-gray-600">Lisa Klein • Premium</div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <div className="text-slate-600 font-bold text-sm lg:text-base">KI-Analyse</div>
                      <div className="text-xs text-gray-500">2h verbleibend</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 lg:mt-6">
                  <Link href="/sell/upload">
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                      Dein Kunstwerk hinzufügen
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { number: "50,247", label: "Verifizierte Kunstwerke", icon: <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6" /> },
              { number: "99.8%", label: "Authentizitätsrate", icon: <Shield className="w-5 h-5 lg:w-6 lg:h-6" /> },
              { number: "12,450", label: "Zertifizierte Künstler", icon: <Users className="w-5 h-5 lg:w-6 lg:h-6" /> },
              { number: "6.2h", label: "Ø Verifizierungszeit", icon: <Clock className="w-5 h-5 lg:w-6 lg:h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3 lg:mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 lg:mb-2">{stat.number}</div>
                <div className="text-sm lg:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Navigation - Mobile Optimized */}
      <section className="bg-gray-50 py-2 lg:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <div className="flex space-x-4 lg:space-x-8 min-w-max">
              {[
                { id: 'process', label: 'Prozess', icon: <Eye className="w-4 h-4 lg:w-5 lg:h-5" /> },
                { id: 'technology', label: 'Technologie', icon: <Brain className="w-4 h-4 lg:w-5 lg:h-5" /> },
                { id: 'experts', label: 'Experten', icon: <Users className="w-4 h-4 lg:w-5 lg:h-5" /> },
                { id: 'pricing', label: 'Preise', icon: <DollarSign className="w-4 h-4 lg:w-5 lg:h-5" /> },
                { id: 'examples', label: 'Beispiele', icon: <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                    selectedTab === tab.id
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {tab.icon}
                  <span className="ml-1 lg:ml-2 text-sm lg:text-base">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content - Rest of the content stays the same with color adjustments */}
      {/* ... (continue with other sections, replacing navy colors with blue) */}

      {/* CTA */}
      <section className="py-12 lg:py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Bereit für die Verifizierung?
          </h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-blue-100">
            Lass dein Kunstwerk von der fortschrittlichsten Verifizierungstechnologie prüfen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 lg:mb-8">
            <Link href="/sell/upload">
              <button className="bg-white text-blue-600 px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold hover:shadow-xl transition-all flex items-center justify-center">
                <Upload className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                Kunstwerk hochladen
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all">
                Beratung vereinbaren
              </button>
            </Link>
          </div>

          <div className="text-center text-blue-100 text-xs lg:text-sm">
            ✓ 99.8% Authentizitätsrate ✓ Blockchain-gesichert ✓ Geld-zurück-Garantie
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold text-white">ArtMarket</span>
                <span className="ml-2 text-xs bg-emerald-500 text-white px-2 py-1 rounded-full">Verifiziert</span>
              </Link>
              <p className="text-gray-300 text-sm lg:text-base">
                Die fortschrittlichste Kunstverifizierung der Welt.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-3 lg:mb-4 text-sm lg:text-base text-white">Verifizierung</h3>
              <ul className="space-y-2 text-gray-300 text-xs lg:text-sm">
                <li><Link href="/verify" className="hover:text-white transition-colors">Prozess</Link></li>
                <li><Link href="/verify#technology" className="hover:text-white transition-colors">Technologie</Link></li>
                <li><Link href="/verify#experts" className="hover:text-white transition-colors">Experten</Link></li>
                <li><Link href="/verify#examples" className="hover:text-white transition-colors">Zertifikate</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-3 lg:mb-4 text-sm lg:text-base text-white">Services</h3>
              <ul className="space-y-2 text-gray-300 text-xs lg:text-sm">
                <li><Link href="/sell/upload" className="hover:text-white transition-colors">Kunstwerk hochladen</Link></li>
                <li><Link href="/verify" className="hover:text-white transition-colors">Express-Service</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition-colors">Bulk-Verifizierung</Link></li>
                <li><Link href="/api" className="hover:text-white transition-colors">API-Zugang</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-3 lg:mb-4 text-sm lg:text-base text-white">Support</h3>
              <ul className="space-y-2 text-gray-300 text-xs lg:text-sm">
                <li><Link href="/help" className="hover:text-white transition-colors">Hilfe-Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Kontakt</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">AGB</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Datenschutz</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center text-gray-300">
            <p className="text-xs lg:text-sm">&copy; 2025 ArtMarket. Authentizität durch KI, geprüft von Experten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VerifyPage;