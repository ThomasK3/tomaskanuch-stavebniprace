'use client';
// components/Map.tsx
import React from 'react';

export interface MapComponentProps {
  mapUrl: string;
}

export default function Map({ mapUrl }: MapComponentProps) {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto bg-white p-1 rounded-lg shadow-md">
          <div className="rounded-lg overflow-hidden h-96 bg-white">
            <iframe 
              src={mapUrl}
              style={{ border: 0, width: '100%', height: '100%', borderRadius: '0.5rem' }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa"
              className="bg-white"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}