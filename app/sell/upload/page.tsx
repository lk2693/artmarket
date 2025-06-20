"use client";

import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { 
  Menu, X, Palette, Upload, Camera, Shield, DollarSign, CheckCircle, Clock, 
  Star, Award, TrendingUp, Users, Eye, Zap, ChevronRight, ChevronDown, 
  Play, ArrowRight, Building2, Verified, Heart, MessageCircle, Image,
  Trash2, Plus, Info, AlertTriangle, CreditCard, Globe, Package, Paintbrush,
  Ruler, Calendar, FileText, Save, Send, ArrowLeft
} from 'lucide-react';

interface UploadedFile {
  id: number;
  file: File;
  url: string;
  name: string;
  size: string;
}

const UploadPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    medium: '',
    width: '',
    height: '',
    depth: '',
    year: '',
    price: '',
    edition: '',
    signature: false,
    certificate: false,
    tags: [] as string[]
  });
  const [newTag, setNewTag] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const steps = [
    { number: 1, title: "Fotos hochladen", description: "Bis zu 10 hochauflösende Bilder" },
    { number: 2, title: "Kunstwerk-Details", description: "Beschreibung und Spezifikationen" },
    { number: 3, title: "Preis & Verifizierung", description: "Preisgestaltung und Optionen wählen" },
    { number: 4, title: "Überprüfung", description: "Finale Kontrolle vor dem Upload" }
  ];

  const categories = [
    { id: 'painting', name: 'Malerei', icon: '🎨' },
    { id: 'sculpture', name: 'Skulptur', icon: '🗿' },
    { id: 'photography', name: 'Fotografie', icon: '📸' },
    { id: 'digital', name: 'Digital Art', icon: '💻' },
    { id: 'mixed', name: 'Mixed Media', icon: '🎭' },
    { id: 'print', name: 'Drucke', icon: '🖼️' },
    { id: 'drawing', name: 'Zeichnung', icon: '✏️' },
    { id: 'textile', name: 'Textilkunst', icon: '🧵' }
  ];

  const verificationPlans = [
    {
      id: 'standard',
      name: 'Standard',
      price: '8%',
      time: '24-48h',
      features: [
        'KI-Authentizitätsprüfung',
        'Basis-Vermarktung',
        'Standard Support',
        'Digitales Zertifikat'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      id: 'express',
      name: 'Express',
      price: '12%',
      time: '6-12h',
      features: [
        'Alles aus Standard',
        'Express-Verifizierung',
        'Featured Placement',
        'Priority Support',
        'Social Media Boost'
      ],
      popular: true,
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '15%',
      time: '3-6h',
      features: [
        'Alles aus Express',
        'Ultra-Express-Verifizierung',
        'Galerie-Direct-Connect',
        'PR & Marketing',
        'Dedicated Manager'
      ],
      popular: false,
      color: 'from-amber-600 to-amber-700'
    }
  ];

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files) as File[];
    handleFiles(files);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []) as File[];
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    const imageFiles = files.filter((file: File) => file.type.startsWith('image/'));
    const newFiles = imageFiles.slice(0, 10 - uploadedFiles.length).map((file: File, index: number) => ({
      id: Date.now() + index,
      file,
      url: URL.createObjectURL(file),
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + ' MB'
    }));
    
    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (id: number) => {
    setUploadedFiles(prev => {
      const file = prev.find(f => f.id === id);
      if (file) URL.revokeObjectURL(file.url);
      return prev.filter(f => f.id !== id);
    });
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateEstimatedEarnings = () => {
    const price = parseFloat(formData.price) || 0;
    const commission = verificationPlans.find(p => p.id === selectedPlan)?.price;
    const commissionRate = parseFloat(commission || '0') / 100;
    return price * (1 - commissionRate);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 lg:space-y-8">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">Fotos deines Kunstwerks hochladen</h2>
              <p className="text-lg lg:text-xl text-gray-600 px-4">Lade bis zu 10 hochauflösende Fotos aus verschiedenen Winkeln hoch</p>
            </div>

            {/* Upload Area */}
            <div 
              className={`border-2 border-dashed rounded-xl lg:rounded-2xl p-6 lg:p-12 text-center transition-all ${
                isDragging 
                  ? 'border-slate-600 bg-slate-50' 
                  : 'border-gray-300 hover:border-slate-400 hover:bg-gray-50'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Upload className="w-12 h-12 lg:w-16 lg:h-16 text-gray-400 mx-auto mb-3 lg:mb-4" />
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                Ziehe Bilder hierher oder klicke zum Auswählen
              </h3>
              <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base px-4">
                Unterstützte Formate: JPG, PNG, WEBP • Maximale Größe: 20MB pro Bild
              </p>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-gradient-to-r from-slate-700 to-stone-700 text-white px-6 lg:px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Bilder auswählen
              </button>
            </div>

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Hochgeladene Bilder ({uploadedFiles.length}/10)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                  {uploadedFiles.map((file, index) => (
                    <div key={file.id} className="relative group">
                      <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <img 
                          src={file.url} 
                          alt={file.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-lg flex items-center justify-center">
                        <button
                          onClick={() => removeFile(file.id)}
                          className="opacity-0 group-hover:opacity-100 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      {index === 0 && (
                        <div className="absolute top-2 left-2 bg-slate-600 text-white px-2 py-1 rounded text-xs font-bold">
                          Hauptbild
                        </div>
                      )}
                      <div className="mt-2">
                        <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                        <p className="text-xs text-gray-600">{file.size}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Photo Tips */}
            <div className="bg-slate-50 rounded-xl lg:rounded-2xl p-4 lg:p-6">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                <Camera className="w-5 h-5 mr-2" />
                Tipps für bessere Fotos
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 text-sm text-slate-800">
                <div className="space-y-2">
                  <p>✓ Gute Beleuchtung verwenden</p>
                  <p>✓ Verschiedene Winkel fotografieren</p>
                  <p>✓ Details wie Signatur zeigen</p>
                </div>
                <div className="space-y-2">
                  <p>✓ Neutrale Hintergrundfarbe</p>
                  <p>✓ Hohe Auflösung (min. 1500px)</p>
                  <p>✓ Schatten vermeiden</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 lg:space-y-8">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">Beschreibe dein Kunstwerk</h2>
              <p className="text-lg lg:text-xl text-gray-600 px-4">Je detaillierter, desto besser für Käufer und Verifizierung</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Basic Information */}
              <div className="space-y-4 lg:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Titel des Kunstwerks *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => updateFormData('title', e.target.value)}
                    placeholder="z.B. Abstrakte Komposition in Blau"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kategorie *
                  </label>
                  <div className="grid grid-cols-2 gap-2 lg:gap-3">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => updateFormData('category', category.id)}
                        className={`p-3 rounded-lg border-2 text-left transition-all ${
                          formData.category === category.id
                            ? 'border-slate-600 bg-slate-50'
                            : 'border-gray-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="text-lg lg:text-xl mb-1">{category.icon}</div>
                        <div className="font-medium text-xs lg:text-sm">{category.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medium/Technik *
                  </label>
                  <input
                    type="text"
                    value={formData.medium}
                    onChange={(e) => updateFormData('medium', e.target.value)}
                    placeholder="z.B. Öl auf Leinwand, Acryl, Bronze, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3 lg:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Breite (cm) *
                    </label>
                    <input
                      type="number"
                      value={formData.width}
                      onChange={(e) => updateFormData('width', e.target.value)}
                      placeholder="50"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Höhe (cm) *
                    </label>
                    <input
                      type="number"
                      value={formData.height}
                      onChange={(e) => updateFormData('height', e.target.value)}
                      placeholder="70"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tiefe (cm)
                    </label>
                    <input
                      type="number"
                      value={formData.depth}
                      onChange={(e) => updateFormData('depth', e.target.value)}
                      placeholder="3"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Entstehungsjahr *
                  </label>
                  <input
                    type="number"
                    value={formData.year}
                    onChange={(e) => updateFormData('year', e.target.value)}
                    placeholder="2024"
                    min="1800"
                    max={new Date().getFullYear()}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Extended Information */}
              <div className="space-y-4 lg:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Beschreibung *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => updateFormData('description', e.target.value)}
                    placeholder="Beschreibe dein Kunstwerk: Inspiration, Technik, Bedeutung..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm flex items-center"
                      >
                        {tag}
                        <button
                          onClick={() => removeTag(tag)}
                          className="ml-2 text-slate-600 hover:text-slate-800"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                      placeholder="Neuen Tag hinzufügen"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    />
                    <button
                      onClick={addTag}
                      className="bg-slate-600 text-white px-4 py-2 rounded-r-lg hover:bg-slate-700 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Auflage (optional)
                  </label>
                  <input
                    type="text"
                    value={formData.edition}
                    onChange={(e) => updateFormData('edition', e.target.value)}
                    placeholder="z.B. 1/10, 5/25, Unikat"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="signature"
                      checked={formData.signature}
                      onChange={(e) => updateFormData('signature', e.target.checked)}
                      className="w-4 h-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
                    />
                    <label htmlFor="signature" className="ml-3 text-sm text-gray-700">
                      Werk ist signiert
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="certificate"
                      checked={formData.certificate}
                      onChange={(e) => updateFormData('certificate', e.target.checked)}
                      className="w-4 h-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
                    />
                    <label htmlFor="certificate" className="ml-3 text-sm text-gray-700">
                      Ich besitze ein Echtheitszertifikat
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 lg:space-y-8">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">Preis & Verifizierungsplan</h2>
              <p className="text-lg lg:text-xl text-gray-600 px-4">Lege deinen Preis fest und wähle deinen Verifizierungsplan</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Pricing */}
              <div className="space-y-4 lg:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Verkaufspreis (EUR) *
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => updateFormData('price', e.target.value)}
                      placeholder="2500"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-lg lg:text-xl font-semibold"
                    />
                    <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>

                {formData.price && (
                  <div className="bg-emerald-50 rounded-lg p-4 lg:p-6">
                    <h4 className="font-semibold text-emerald-900 mb-3">Gewinn-Übersicht</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Verkaufspreis:</span>
                        <span className="font-semibold">€{parseFloat(formData.price).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Provision ({verificationPlans.find(p => p.id === selectedPlan)?.price}):</span>
                        <span className="text-red-600">-€{(parseFloat(formData.price) * parseFloat(verificationPlans.find(p => p.id === selectedPlan)?.price || '0') / 100).toFixed(2)}</span>
                      </div>
                      <div className="border-t border-emerald-200 pt-2 flex justify-between font-bold text-base lg:text-lg">
                        <span>Dein Gewinn:</span>
                        <span className="text-emerald-600">€{calculateEstimatedEarnings().toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-slate-50 rounded-lg p-4 lg:p-6">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <Info className="w-5 h-5 mr-2" />
                    Preisempfehlung
                  </h4>
                  <p className="text-sm text-slate-800 mb-3">
                    Basierend auf ähnlichen Werken empfehlen wir einen Preis zwischen €1.800 - €3.200
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => updateFormData('price', '1800')}
                      className="px-3 py-1 bg-slate-200 text-slate-800 rounded text-sm hover:bg-slate-300 transition-colors"
                    >
                      €1.800
                    </button>
                    <button
                      onClick={() => updateFormData('price', '2500')}
                      className="px-3 py-1 bg-slate-200 text-slate-800 rounded text-sm hover:bg-slate-300 transition-colors"
                    >
                      €2.500
                    </button>
                    <button
                      onClick={() => updateFormData('price', '3200')}
                      className="px-3 py-1 bg-slate-200 text-slate-800 rounded text-sm hover:bg-slate-300 transition-colors"
                    >
                      €3.200
                    </button>
                  </div>
                </div>
              </div>

              {/* Verification Plans */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Verifizierungsplan wählen</h3>
                <div className="space-y-3 lg:space-y-4">
                  {verificationPlans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`border-2 rounded-lg p-4 lg:p-6 cursor-pointer transition-all ${
                        selectedPlan === plan.id
                          ? 'border-slate-600 bg-slate-50'
                          : 'border-gray-200 hover:border-slate-300'
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.popular && (
                        <div className="bg-slate-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-3">
                          Beliebteste Wahl
                        </div>
                      )}
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                        <div>
                          <h4 className="font-bold text-lg">{plan.name}</h4>
                          <p className="text-gray-600 text-sm">Verifizierung in {plan.time}</p>
                        </div>
                        <div className="text-left sm:text-right mt-2 sm:mt-0">
                          <div className="text-xl lg:text-2xl font-bold">{plan.price}</div>
                          <div className="text-gray-600 text-sm">Provision</div>
                        </div>
                      </div>
                      <ul className="space-y-1 lg:space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 lg:space-y-8">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">Finale Überprüfung</h2>
              <p className="text-lg lg:text-xl text-gray-600 px-4">Kontrolliere alle Angaben bevor du dein Kunstwerk einstellst</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Preview */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vorschau</h3>
                <div className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
                  {uploadedFiles.length > 0 && (
                    <div className="aspect-square">
                      <img 
                        src={uploadedFiles[0].url} 
                        alt={formData.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4 lg:p-6">
                    <h4 className="font-bold text-lg lg:text-xl text-gray-900 mb-2">{formData.title || 'Titel des Kunstwerks'}</h4>
                    <p className="text-gray-600 mb-4 text-sm lg:text-base">{formData.description || 'Beschreibung...'}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Medium:</span> {formData.medium || 'Nicht angegeben'}
                      </div>
                      <div>
                        <span className="font-medium">Jahr:</span> {formData.year || 'Nicht angegeben'}
                      </div>
                      <div>
                        <span className="font-medium">Größe:</span> {formData.width && formData.height ? `${formData.width} × ${formData.height} cm` : 'Nicht angegeben'}
                      </div>
                      <div>
                        <span className="font-medium">Kategorie:</span> {categories.find(c => c.id === formData.category)?.name || 'Nicht ausgewählt'}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                      <div className="text-xl lg:text-2xl font-bold text-emerald-600">
                        €{formData.price || '0'}
                      </div>
                      <div className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm">
                        {verificationPlans.find(p => p.id === selectedPlan)?.name} Plan
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-4 lg:space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Zusammenfassung</h3>
                  <div className="space-y-3 lg:space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Bilder</h4>
                      <p className="text-gray-600 text-sm">{uploadedFiles.length} Bilder hochgeladen</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Verifizierungsplan</h4>
                      <p className="text-gray-600 text-sm">
                        {verificationPlans.find(p => p.id === selectedPlan)?.name} - 
                        Verifizierung in {verificationPlans.find(p => p.id === selectedPlan)?.time}
                      </p>
                    </div>

                    <div className="bg-emerald-50 rounded-lg p-4">
                      <h4 className="font-medium text-emerald-900 mb-2">Gewinn-Kalkulation</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Verkaufspreis:</span>
                          <span>€{parseFloat(formData.price || '0').toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ArtMarket Provision:</span>
                          <span>€{(parseFloat(formData.price || '0') * parseFloat(verificationPlans.find(p => p.id === selectedPlan)?.price || '0') / 100).toFixed(2)}</span>
                        </div>
                        <div className="border-t border-emerald-200 pt-1 flex justify-between font-bold">
                          <span>Dein Gewinn:</span>
                          <span>€{calculateEstimatedEarnings().toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 lg:p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Was passiert als nächstes?</h4>
                  <div className="space-y-2 text-sm text-slate-800">
                    <p>✓ Sofortiger Upload und Bestätigung</p>
                    <p>✓ KI-Analyse startet automatisch</p>
                    <p>✓ Expertenprüfung binnen {verificationPlans.find(p => p.id === selectedPlan)?.time}</p>
                    <p>✓ Live im Marktplatz nach Verifizierung</p>
                    <p>✓ Automatische Galerie-Benachrichtigung</p>
                  </div>
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
              <span className="text-slate-700 font-medium">Upload</span>
            </nav>

            <div className="flex items-center space-x-2">
              <Link href="/sell" className="hidden sm:flex text-gray-700 hover:text-slate-700 transition-colors items-center">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Zurück
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
                <span className="block text-slate-700 font-medium py-2">Upload</span>
                <hr />
                <Link href="/sell" className="flex items-center text-gray-700 py-2">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Zurück
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center ${index < steps.length - 1 ? 'mr-2 lg:mr-4' : ''}`}>
                  <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-xs lg:text-sm font-bold ${
                    currentStep >= step.number 
                      ? 'bg-slate-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle className="w-4 h-4 lg:w-6 lg:h-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="ml-2 lg:ml-3 hidden sm:block">
                    <div className={`text-xs lg:text-sm font-medium ${
                      currentStep >= step.number ? 'text-slate-700' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500 hidden lg:block">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-6 lg:w-12 h-0.5 mx-2 lg:mx-4 ${
                    currentStep > step.number ? 'bg-slate-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        {renderStepContent()}

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-8 lg:mt-12">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all ${
              currentStep === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-500 text-white hover:bg-gray-600'
            }`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Zurück
          </button>

          {currentStep < 4 ? (
            <button
              onClick={nextStep}
              disabled={
                (currentStep === 1 && uploadedFiles.length === 0) ||
                (currentStep === 2 && (!formData.title || !formData.category || !formData.description)) ||
                (currentStep === 3 && !formData.price)
              }
              className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-slate-700 to-stone-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Weiter
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          ) : (
            <button className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
              <Send className="w-5 h-5 mr-2" />
              Kunstwerk einreichen
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default UploadPage;