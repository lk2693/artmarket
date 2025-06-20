"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Palette, ShoppingBag, Building2, Shield, TrendingUp, Users, Star, ChevronRight, Search, Heart, Camera, CheckCircle, Clock, Award, Zap, Eye, Upload, DollarSign, Verified, ShoppingCart, UserCheck, BadgeCheck, MessageSquare, Handshake } from 'lucide-react';

const ArtMarketplaceHomepage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const quickActions = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Kunst kaufen",
      description: "Sichere & verifizierte Werke",
      action: "Jetzt stöbern",
      color: "from-emerald-800 to-emerald-900",
      link: "/search"
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Kunst verkaufen",
      description: "In 3 Minuten hochladen",
      action: "Jetzt verkaufen",
      color: "from-amber-600 to-amber-700",
      link: "/sell/upload"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verifizierung",
      description: "24h Express-Prüfung",
      action: "Verifizieren lassen",
      color: "from-slate-700 to-slate-800",
      link: "/verify"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Galerie-Zugang",
      description: "Nur verifizierte Kunst",
      action: "Galerie öffnen",
      color: "from-stone-700 to-stone-800",
      link: "/gallery-access"
    }
  ];

  const verificationSteps = [
    {
      step: "1",
      title: "Upload",
      description: "Lade dein Kunstwerk mit Fotos und Details hoch",
      icon: <Camera className="w-8 h-8" />,
      time: "2 Min"
    },
    {
      step: "2", 
      title: "KI-Analyse",
      description: "Automatische Stil- und Authentizitätsprüfung",
      icon: <Eye className="w-8 h-8" />,
      time: "1 Std"
    },
    {
      step: "3",
      title: "Experten-Check",
      description: "Manuelle Prüfung durch Kunstexperten",
      icon: <Award className="w-8 h-8" />,
      time: "12-24 Std"
    },
    {
      step: "4",
      title: "Zertifikat",
      description: "Digitales Authentizitätszertifikat erhalten",
      icon: <CheckCircle className="w-8 h-8" />,
      time: "Sofort"
    }
  ];

  const userTypes = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Kunstkäufer",
      description: "Entdecke authentische Kunstwerke mit Garantie",
      features: ["Authentizitätsgarantie", "Sichere Zahlung", "14 Tage Rückgaberecht", "Echtheitszertifikat"],
      cta: "Kunst entdecken",
      color: "from-emerald-800 to-emerald-900",
      registerType: "buyer",
      highlight: "Sicher"
    },
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Kunstverkäufer",
      description: "Verkaufe deine Kunst direkt und lass sie verifizieren",
      features: ["Express-Verifizierung", "Nur 8% Provision", "Direkter Galerie-Zugang", "Marketing-Support"],
      cta: "Kunst verkaufen",
      color: "from-amber-600 to-amber-700",
      registerType: "seller",
      highlight: "Bestseller"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Galerien & Experten",
      description: "Kaufe nur verifizierte Kunst für deine Sammlung",
      features: ["Nur zertifizierte Kunst", "Bulk-Einkauf", "Exklusive Previews", "Großhandelspreise"],
      cta: "Galerie werden",
      color: "from-slate-700 to-slate-800",
      registerType: "gallery",
      highlight: "Verifiziert"
    }
  ];

  const howItWorksSteps = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Entdecke Kunst",
      description: "Durchsuche tausende verifizierte Kunstwerke von lokalen und internationalen Künstlern.",
      color: "from-slate-700 to-slate-800"
    },
    {
      icon: <UserCheck className="w-12 h-12" />,
      title: "Prüfe Authentizität",
      description: "Jedes Werk ist durch unsere KI und Kunstexperten auf Echtheit geprüft worden.",
      color: "from-emerald-800 to-emerald-900"
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Sicher kaufen",
      description: "Kaufe mit Käuferschutz, sicherem Versand und 14 Tagen Rückgaberecht.",
      color: "from-amber-600 to-amber-700"
    },
    {
      icon: <BadgeCheck className="w-12 h-12" />,
      title: "Zertifikat erhalten",
      description: "Erhalte ein digitales Authentizitätszertifikat für dein neues Kunstwerk.",
      color: "from-stone-700 to-stone-800"
    }
  ];

  const sellingSteps = [
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Fotos hochladen",
      description: "Lade hochwertige Fotos deines Kunstwerks hoch - wir helfen bei der Optimierung.",
      color: "from-slate-700 to-stone-700"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Verifizierung",
      description: "Unser Expertenteam prüft dein Werk auf Authentizität und Qualität.",
      color: "from-emerald-800 to-emerald-900"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Marketing & Verkauf",
      description: "Wir bewerben dein Werk aktiv und bringen es vor die richtige Zielgruppe.",
      color: "from-amber-600 to-amber-700"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Auszahlung",
      description: "Nach dem Verkauf erhältst du 92% des Verkaufspreises - fair und transparent.",
      color: "from-yellow-700 to-amber-700"
    }
  ];

  const trustFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Käuferschutz",
      description: "100% Geld-zurück-Garantie bei Nicht-Authentizität",
      color: "text-emerald-700",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Sichere Zahlung",
      description: "SSL-verschlüsselt mit allen gängigen Zahlungsmethoden",
      color: "text-slate-700",
      bgColor: "bg-slate-50"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Persönliche Beratung vor, während und nach dem Kauf",
      color: "text-stone-700",
      bgColor: "bg-stone-50"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Qualitätsgarantie",
      description: "Nur handverlesene Werke von verifizierten Künstlern",
      color: "text-amber-700",
      bgColor: "bg-amber-50"
    }
  ];

  const stats = [
    { number: "50K+", label: "Verifizierte Kunstwerke" },
    { number: "12K+", label: "Zertifizierte Künstler" },
    { number: "500+", label: "Partner-Galerien" },
    { number: "99.8%", label: "Authentizitätsrate" }
  ];

  const galleryBenefits = [
    {
      icon: <Verified className="w-6 h-6" />,
      title: "100% Verifizierte Kunst",
      description: "Jedes Werk durchläuft unseren 4-Stufen Authentizitätsprozess"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Express-Beschaffung",
      description: "Direkte Verbindung zu Künstlern, 24h Lieferung möglich"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Großhandelspreise",
      description: "Exklusive Konditionen und Mengenrabatte für Galerien"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="bg-gradient-to-r from-slate-800 to-stone-800 p-2 rounded-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">ArtMarket</span>
              <span className="ml-1 text-sm text-gray-600">by Galerie Jaeschke</span>

            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/search" className="text-gray-700 hover:text-slate-700 transition-colors font-medium">
                Kunst kaufen
              </Link>
              <Link href="/sell" className="text-gray-700 hover:text-slate-700 transition-colors">
                Verkaufen
              </Link>
              <Link href="/verify" className="text-gray-700 hover:text-slate-700 transition-colors">
                Verifizierung
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-slate-700 transition-colors">
                Galerie-Zugang
              </Link>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/auth/login" className="text-gray-700 hover:text-slate-700 transition-colors">
                Anmelden
              </Link>
              <Link href="/auth/register">
                <button className="bg-gradient-to-r from-slate-800 to-stone-800 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                  Registrieren
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-2">
                <Link href="/search" className="text-gray-700 hover:text-slate-700 py-2">Kunst kaufen</Link>
                <Link href="/sell" className="text-gray-700 hover:text-slate-700 py-2">Verkaufen</Link>
                <Link href="/verify" className="text-gray-700 hover:text-slate-700 py-2">Verifizierung</Link>
                <Link href="/gallery" className="text-gray-700 hover:text-slate-700 py-2">Galerie-Zugang</Link>
                <div className="pt-4 space-y-2">
                  <Link href="/auth/login" className="w-full text-left text-gray-700 py-2 block">Anmelden</Link>
                  <Link href="/auth/register">
                    <button className="w-full bg-gradient-to-r from-slate-800 to-stone-800 text-white py-2 rounded-lg">
                      Registrieren
                    </button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-stone-900 to-gray-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80")'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-stone-900/90 to-gray-900/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <CheckCircle className="w-4 h-4 mr-2 text-emerald-400" />
              <span className="text-sm">99.8% Authentizitätsrate • 24h Express-Verifizierung</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Kaufe & Verkaufe
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent"> verifizierte Kunst</span>
              <br />sicher & authentisch.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              Der erste Marktplatz mit integrierter Kunstverifizierung. Kaufe mit Authentizitätsgarantie oder verkaufe mit Expertenprüfung.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/search">
                <button className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Kunst entdecken & kaufen
                </button>
              </Link>
              <Link href="/sell/upload">
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all flex items-center">
                  <Upload className="w-5 h-5 mr-2" />
                  Kunst verkaufen
                </button>
              </Link>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {quickActions.map((action, index) => (
                <Link key={index} href={action.link}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all cursor-pointer group">
                    <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                      {action.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{action.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{action.description}</p>
                    <div className="text-white font-medium flex items-center text-sm">
                      {action.action}
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-700 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Warum Kunden uns vertrauen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sicherheit, Authentizität und Service stehen bei uns an erster Stelle.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {trustFeatures.map((feature, index) => (
              <div key={index} className={`${feature.bgColor} rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}>
                <div className={`w-16 h-16 mx-auto mb-4 ${feature.color} flex items-center justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Buying */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              So einfach kaufst du Kunst
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der Entdeckung bis zum Zertifikat - dein sicherer Weg zu authentischer Kunst.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform -translate-x-1/2"></div>
                )}
                <div className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white mx-auto mb-6 relative z-10`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/search">
              <button className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all">
                Jetzt Kunst entdecken
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Selling */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              So verkaufst du deine Kunst
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der Verifizierung bis zum Verkauf - wir machen es dir einfach.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {sellingSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-slate-700 to-stone-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 mt-4`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/sell/upload">
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all">
                Kunst jetzt verkaufen
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unser Authentizitäts-Prozess
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Patentierter 4-Stufen-Prozess mit KI-Technologie und Expertenprüfung für maximale Sicherheit.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-slate-300 to-stone-300"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {verificationSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-700 to-stone-700 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                      {step.icon}
                    </div>
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {step.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/verify">
              <button className="bg-gradient-to-r from-slate-700 to-stone-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all">
                Verifizierung starten
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfekt für jeden Kunstliebhaber
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ob kaufen, verkaufen oder kuratieren - unser Marktplatz bietet maßgeschneiderte Lösungen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {userTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 relative overflow-hidden border-2 border-transparent hover:border-slate-200">
                {/* Badge */}
                {type.highlight && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                    {type.highlight}
                  </div>
                )}

                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${type.color} rounded-full transform translate-x-8 -translate-y-8`}></div>
                </div>
                
                <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center text-white mb-6 relative z-10`}>
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href={`/auth/register?type=${type.registerType}`}>
                  <button className={`w-full bg-gradient-to-r ${type.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center`}>
                    {type.cta}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Verified Artwork */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frisch verifizierte Kunstwerke
            </h2>
            <p className="text-xl text-gray-600">
              Entdecke die neuesten Highlights - alle mit Authentizitätszertifikat
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Abstrakte Komposition I",
                artist: "Maria Schmidt",
                price: "€2.450",
                verifiedDate: "Heute verifiziert",
                certificate: "ART-2025-001"
              },
              {
                id: 2,
                image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Moderne Skulptur",
                artist: "Alex Müller",
                price: "€3.200",
                verifiedDate: "Heute verifiziert",
                certificate: "ART-2025-002"
              },
              {
                id: 3,
                image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Farbexplosion",
                artist: "Lisa Wagner",
                price: "€1.850",
                verifiedDate: "Gestern verifiziert",
                certificate: "ART-2025-003"
              },
              {
                id: 4,
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Geometrische Formen",
                artist: "Tom Klein",
                price: "€4.100",
                verifiedDate: "Gestern verifiziert",
                certificate: "ART-2025-004"
              }
            ].map((artwork) => (
              <div key={artwork.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verifiziert
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition-colors">
                      <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                    {artwork.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{artwork.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">Von {artwork.artist}</p>
                  <div className="bg-emerald-50 text-emerald-800 text-xs px-3 py-1 rounded-full mb-4 inline-block">
                    {artwork.verifiedDate}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      Zertifikat: {artwork.certificate}
                    </div>
                    <button className="text-slate-700 font-semibold hover:text-slate-900 transition-colors text-sm">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/search?verified=true">
              <button className="bg-gradient-to-r from-slate-700 to-stone-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all">
                Alle verifizierten Werke ansehen
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-stone-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für den verifizierten Kunstmarkt?
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Werde Teil der Zukunft des Kunsthandels - sicher, transparent und authentisch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search">
              <button className="bg-white text-slate-800 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Kunst kaufen & sammeln
              </button>
            </Link>
            <Link href="/sell/upload">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-800 transition-all flex items-center">
                <Upload className="w-5 h-5 mr-2" />
                Kunst verkaufen & verifizieren
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-slate-700 to-stone-700 p-2 rounded-lg">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold">ArtMarket</span>
                <span className="ml-2 text-xs bg-emerald-600 text-white px-2 py-1 rounded-full">Verifiziert</span>
              </div>
              <p className="text-gray-400">
                Der erste vollständig verifizierte Kunstmarktplatz. Authentizität garantiert.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Kaufen & Verkaufen</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/search" className="hover:text-white transition-colors">Kunst kaufen</Link></li>
                <li><Link href="/sell/upload" className="hover:text-white transition-colors">Kunst verkaufen</Link></li>
                <li><Link href="/verify" className="hover:text-white transition-colors">Verifizierung</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Preisgestaltung</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Für Galerien</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/gallery-access" className="hover:text-white transition-colors">Zugang beantragen</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Großhandel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API-Zugang</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partnervorteile</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Support & Sicherheit</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Käuferschutz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Authentizität FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ArtMarket. Alle Rechte vorbehalten. Authentizität garantiert durch patentierte Verifizierung.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArtMarketplaceHomepage;