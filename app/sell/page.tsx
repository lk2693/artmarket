"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Palette, Upload, Camera, Shield, DollarSign, CheckCircle, Clock, Star, Award, TrendingUp, Users, Eye, Zap, ChevronRight, ChevronDown, Play, ArrowRight, Building2, Verified, Heart, MessageCircle } from 'lucide-react';

const SellPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedArtType, setSelectedArtType] = useState('painting');

  const sellSteps = [
    {
      step: 1,
      title: "Upload & Details",
      description: "Lade bis zu 10 hochauflösende Fotos hoch und fülle die Kunstwerk-Details aus",
      icon: <Upload className="w-8 h-8" />,
      time: "2-3 Minuten",
      details: [
        "Mehrere Winkel fotografieren",
        "Titel, Größe, Materialien",
        "Entstehungsgeschichte",
        "Preisvorstellung festlegen"
      ]
    },
    {
      step: 2,
      title: "KI-Analyse",
      description: "Unsere KI prüft Stil, Technik und potenzielle Authentizitätsindikatoren",
      icon: <Eye className="w-8 h-8" />,
      time: "1-2 Stunden",
      details: [
        "Stilanalyse automatisch",
        "Technik-Bewertung",
        "Ähnlichkeitscheck",
        "Marktpreis-Schätzung"
      ]
    },
    {
      step: 3,
      title: "Experten-Prüfung",
      description: "Kunstexperten überprüfen dein Werk und erstellen ein Authentizitätsgutachten",
      icon: <Award className="w-8 h-8" />,
      time: "12-24 Stunden",
      details: [
        "Manuelle Expertenprüfung",
        "Authentizitätsbewertung",
        "Qualitäts-Assessment",
        "Marktfähigkeits-Check"
      ]
    },
    {
      step: 4,
      title: "Live & Verkaufen",
      description: "Erhalte dein Zertifikat und verkaufe an Sammler und Galerien",
      icon: <CheckCircle className="w-8 h-8" />,
      time: "Sofort aktiv",
      details: [
        "Digitales Zertifikat",
        "Live im Marktplatz",
        "Galerie-Benachrichtigung",
        "Marketing-Boost"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Standard",
      price: "8%",
      description: "Für alle Kunstwerke",
      features: [
        "Kostenloser Upload",
        "KI-Authentizitätsprüfung",
        "Basis-Vermarktung",
        "Payment Processing",
        "Käuferschutz"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Express",
      price: "12%",
      description: "Schnelle Verifizierung",
      features: [
        "Alles aus Standard",
        "6h Express-Verifizierung",
        "Priority Support",
        "Featured Placement",
        "Social Media Promotion"
      ],
      popular: true,
      color: "from-slate-600 to-slate-700"
    },
    {
      name: "Premium",
      price: "15%",
      description: "Maximale Sichtbarkeit",
      features: [
        "Alles aus Express",
        "3h Ultra-Express",
        "Galerie-Direct-Connect",
        "PR & Marketing",
        "Dedicated Account Manager"
      ],
      popular: false,
      color: "from-amber-600 to-amber-700"
    }
  ];

  const artTypes = [
    { id: 'painting', name: 'Malerei', icon: '🎨', count: '2,100+ verkauft' },
    { id: 'sculpture', name: 'Skulptur', icon: '🗿', count: '420+ verkauft' },
    { id: 'photography', name: 'Fotografie', icon: '📸', count: '650+ verkauft' },
    { id: 'digital', name: 'Digital Art', icon: '💻', count: '180+ verkauft' },
    { id: 'mixed', name: 'Mixed Media', icon: '🎭', count: '340+ verkauft' },
    { id: 'prints', name: 'Drucke', icon: '🖼️', count: '760+ verkauft' }
  ];

  const successStories = [
    {
      name: "Maria Schmidt",
      artType: "Abstrakte Malerei",
      sold: "€12,450",
      timeframe: "2 Wochen",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      quote: "Innerhalb von 24h verifiziert und nach 2 Wochen an eine Galerie in München verkauft!",
      pieces: "8 Werke verkauft"
    },
    {
      name: "Alex Müller",
      artType: "Moderne Skulpturen",
      sold: "€28,900",
      timeframe: "1 Monat",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      quote: "Die Verifizierung hat meiner Kunst instant Glaubwürdigkeit gegeben.",
      pieces: "3 Skulpturen verkauft"
    },
    {
      name: "Lisa Wagner",
      artType: "Digitale Kunst",
      sold: "€8,750",
      timeframe: "3 Wochen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      quote: "Als digitale Künstlerin war die Authentizitätsprüfung perfekt für mich.",
      pieces: "15 NFTs verkauft"
    }
  ];

  const faqs = [
    {
      question: "Wie lange dauert die Verifizierung wirklich?",
      answer: "Standard: 24-48h, Express: 6h, Premium: 3h. 98% aller Werke werden innerhalb der angegebenen Zeit bearbeitet."
    },
    {
      question: "Was passiert, wenn mein Werk nicht verifiziert wird?",
      answer: "Du erhältst detailliertes Feedback und kannst kostenlos Verbesserungen vornehmen. Nur 2% der Einreichungen werden abgelehnt."
    },
    {
      question: "Kann ich meine Preise selbst festlegen?",
      answer: "Ja, du behältst die volle Preiskontrolle. Wir geben dir Marktpreis-Empfehlungen basierend auf ähnlichen Werken."
    },
    {
      question: "Wann erhalte ich mein Geld?",
      answer: "Nach Verkauf und Lieferbestätigung werden 92% (Standard) bis 85% (Premium) des Verkaufspreises binnen 3 Werktagen überwiesen."
    },
    {
      question: "Kann ich auch international verkaufen?",
      answer: "Ja, unser Netzwerk umfasst Galerien und Sammler in über 40 Ländern. Wir kümmern uns um Versand und Zoll."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Authentizitäts-Garantie",
      description: "Jedes Werk erhält ein fälschungssicheres digitales Zertifikat"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Direkter Galerie-Zugang",
      description: "500+ Partner-Galerien erhalten sofort Benachrichtigungen"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Marktanalysen",
      description: "Erhalte Insights über Trends und optimiere deine Preise"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Marketing-Boost",
      description: "Automatische Promotion in unseren Kanälen und Newslettern"
    }
  ];

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
              <span className="text-slate-700 font-medium">Verkaufen</span>
              <Link href="/verify" className="text-gray-700 hover:text-slate-700 transition-colors">
                Verifizierung
              </Link>
              <Link href="/search" className="text-gray-700 hover:text-slate-700 transition-colors">
                Entdecken
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              <Link href="/auth/login" className="hidden sm:block text-gray-700 hover:text-slate-700 transition-colors">
                Anmelden
              </Link>
              <Link href="/sell/upload" className="hidden sm:block">
                <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
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
                <span className="block text-slate-700 font-medium py-2">Verkaufen</span>
                <Link href="/verify" className="block text-gray-700 hover:text-slate-700 py-2">Verifizierung</Link>
                <Link href="/search" className="block text-gray-700 hover:text-slate-700 py-2">Entdecken</Link>
                <hr />
                <Link href="/auth/login" className="block text-gray-700 py-2">Anmelden</Link>
                <Link href="/sell/upload" className="block">
                  <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 rounded-lg">
                    Kunst verkaufen
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 text-white py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 lg:mb-6">
                <CheckCircle className="w-4 h-4 mr-2 text-emerald-300" />
                <span className="text-sm">Über 50.000 verifizierte Kunstwerke verkauft</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                Verkaufe deine Kunst
                <span className="block bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  in 24 Stunden
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 text-emerald-100">
                Upload, Verifizierung, Verkauf. Der einfachste Weg, deine Kunst an Sammler und Galerien zu verkaufen - mit Authentizitätsgarantie.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6 lg:mb-8">
                <Link href="/sell/upload">
                  <button className="bg-white text-emerald-600 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center">
                    <Upload className="w-5 h-5 mr-2" />
                    Jetzt verkaufen
                  </button>
                </Link>
                <button className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Video ansehen
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 lg:gap-6 text-center">
                <div>
                  <div className="text-xl lg:text-2xl font-bold">24h</div>
                  <div className="text-emerald-200 text-sm">Verifizierung</div>
                </div>
                <div>
                  <div className="text-xl lg:text-2xl font-bold">8%</div>
                  <div className="text-emerald-200 text-sm">Provision</div>
                </div>
                <div>
                  <div className="text-xl lg:text-2xl font-bold">500+</div>
                  <div className="text-emerald-200 text-sm">Galerien</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Welche Art von Kunst verkaufst du?</h3>
                <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
                  {artTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedArtType(type.id)}
                      className={`p-3 lg:p-4 rounded-lg border-2 transition-all text-left ${
                        selectedArtType === type.id
                          ? 'border-emerald-600 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="text-xl lg:text-2xl mb-1 lg:mb-2">{type.icon}</div>
                      <div className="font-semibold text-gray-900 text-sm lg:text-base">{type.name}</div>
                      <div className="text-xs lg:text-sm text-gray-600">{type.count}</div>
                    </button>
                  ))}
                </div>
                <Link href="/sell/upload">
                  <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                    Upload starten
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              So verkaufst du in 4 Schritten
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Von Upload bis Verkauf - transparent, schnell und sicher.
            </p>
          </div>

          <div className="relative">
            {/* Progress Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-300 via-slate-300 to-amber-300"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {sellSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all relative z-10 border-2 border-gray-100">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-emerald-600 to-slate-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                    
                    <div className="text-center mb-4 lg:mb-6">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-emerald-600 to-slate-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-3 lg:mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">{step.description}</p>
                      <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {step.time}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 lg:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              Transparente Preisgestaltung
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 px-4">
              Nur Provision bei erfolgreichem Verkauf. Kein Upload-Gebühren, keine versteckten Kosten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 lg:p-8 shadow-lg relative overflow-hidden ${tier.popular ? 'ring-2 ring-slate-600 transform lg:scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 lg:px-6 py-1 lg:py-2 rounded-full text-sm font-bold">
                      Beliebteste Wahl
                    </div>
                  </div>
                )}

                <div className="text-center mb-6 lg:mb-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-3xl lg:text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-2">Provision</span>
                  </div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>

                <ul className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/sell/upload">
                  <button className={`w-full bg-gradient-to-r ${tier.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all`}>
                    {tier.name} wählen
                  </button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 lg:mt-12">
            <p className="text-gray-600 mb-4">
              💡 Du entscheidest erst beim Upload, welche Option du wählst
            </p>
            <Link href="/sell/calculator">
              <button className="text-slate-700 font-semibold hover:text-slate-900 transition-colors">
                Gewinn-Rechner verwenden →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              Erfolgsgeschichten unserer Künstler
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 px-4">
              Echte Verkäufe, echte Künstler, echte Erfolge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-stone-50 rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4 lg:mb-6">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-12 h-12 lg:w-16 lg:h-16 rounded-full mr-3 lg:mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{story.name}</h3>
                    <p className="text-gray-600 text-sm">{story.artType}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 lg:mb-6">
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-emerald-600">{story.sold}</div>
                    <div className="text-gray-600 text-sm">Gesamtumsatz</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-slate-700">{story.timeframe}</div>
                    <div className="text-gray-600 text-sm">Zeit bis Verkauf</div>
                  </div>
                </div>

                <blockquote className="text-gray-700 italic mb-4 text-sm lg:text-base">
                  "{story.quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{story.pieces}</span>
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-amber-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-slate-50 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              Warum bei ArtMarket verkaufen?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-700 to-stone-700 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              Häufige Fragen
            </h2>
          </div>

          <div className="space-y-3 lg:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-stone-50 rounded-lg">
                <button
                  className="w-full text-left p-4 lg:p-6 flex justify-between items-center hover:bg-stone-100 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 text-sm lg:text-base pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-4 lg:px-6 pb-4 lg:pb-6">
                    <p className="text-gray-700 text-sm lg:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8 lg:mt-12">
            <Link href="/support">
              <button className="text-slate-700 font-semibold hover:text-slate-900 transition-colors">
                Weitere Fragen? Support kontaktieren →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">
            Bereit, deine erste Kunst zu verkaufen?
          </h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-emerald-100 px-4">
            Upload in 3 Minuten, Verifizierung in 24h, Verkauf an Galerien weltweit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 lg:mb-8">
            <Link href="/sell/upload">
              <button className="bg-white text-emerald-600 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:shadow-xl transition-all flex items-center justify-center">
                <Upload className="w-5 h-5 mr-2" />
                Jetzt kostenlos starten
              </button>
            </Link>
            <Link href="/sell/guide">
              <button className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all">
                Verkaufs-Guide lesen
              </button>
            </Link>
          </div>

          <div className="text-center text-emerald-200 text-sm">
            ✓ Kostenloser Upload ✓ Keine Setup-Gebühren ✓ Provision nur bei Verkauf
          </div>
        </div>
      </section>

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
              </div>
              <p className="text-gray-400 text-sm">
                Der vertrauensvolle Marktplatz für Künstler, Sammler und Galerien.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Verkaufen</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/sell/upload" className="hover:text-white transition-colors">Upload starten</Link></li>
                <li><Link href="/sell/guide" className="hover:text-white transition-colors">Verkaufs-Guide</Link></li>
                <li><Link href="/sell/calculator" className="hover:text-white transition-colors">Gewinn-Rechner</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Preisgestaltung</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Verifizierung</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/verify" className="hover:text-white transition-colors">Prozess</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Kriterien</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Zertifikate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Express-Service</a></li>
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
            <p>&copy; 2025 ArtMarket. Verkaufe mit Vertrauen - Authentizität garantiert.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SellPage;