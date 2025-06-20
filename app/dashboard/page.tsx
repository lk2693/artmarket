'use client';

import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export default function DashboardPage() {
  const { user } = useAuth();

  const getDashboardContent = () => {
    switch(user?.role) {
      case 'artist':
        return {
          title: 'Künstler Dashboard',
          stats: [
            { label: 'Kunstwerke', value: '12' },
            { label: 'Verkäufe', value: '8' },
            { label: 'Aufrufe', value: '1,234' },
            { label: 'Favoriten', value: '45' }
          ]
        };
      
      case 'gallery':
        return {
          title: 'Galerie Dashboard',
          stats: [
            { label: 'Künstler', value: '25' },
            { label: 'Ausstellungen', value: '5' },
            { label: 'Besucher', value: '2,456' },
            { label: 'Sammlung', value: '156' }
          ]
        };
      
      case 'collector':
        return {
          title: 'Sammler Dashboard',
          stats: [
            { label: 'Sammlung', value: '18' },
            { label: 'Favoriten', value: '67' },
            { label: 'Investiert', value: '€45,000' },
            { label: 'Wertsteigerung', value: '+12%' }
          ]
        };
      
      default:
        return {
          title: 'Dashboard',
          stats: []
        };
    }
  };

  const content = getDashboardContent();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {content.title}
        </h1>
        <p className="text-gray-600">
          Willkommen zurück, {user?.name || 'Benutzer'}! Hier ist Ihre Übersicht.
        </p>
      </div>

      {content.stats.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100">
                  <div className="w-6 h-6 bg-purple-500 rounded"></div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Letzte Aktivitäten
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-gray-900">Neues Kunstwerk hochgeladen</span>
            <span className="text-sm text-gray-500">vor 2 Stunden</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-gray-900">Profil aktualisiert</span>
            <span className="text-sm text-gray-500">gestern</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-900">Nachricht erhalten</span>
            <span className="text-sm text-gray-500">vor 3 Tagen</span>
          </div>
        </div>
      </div>
    </div>
  );
}