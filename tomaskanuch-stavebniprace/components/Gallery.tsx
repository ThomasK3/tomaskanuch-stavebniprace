'use client';
// components/Gallery.tsx
import { useState } from 'react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  return (
    <div>
      <div className="flex space-x-4 mb-6">
        <button 
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 ${activeFilter === 'all' ? 'bg-[#1AC8ED] text-white' : 'bg-gray-200'}`}
        >
          Všechny
        </button>
        <button 
          onClick={() => setActiveFilter('rekonstrukce')}
          className={`px-4 py-2 ${activeFilter === 'rekonstrukce' ? 'bg-[#1AC8ED] text-white' : 'bg-gray-200'}`}
        >
          Rekonstrukce
        </button>
        {/* Další filtry */}
      </div>
      
      {/* Obsah galerie */}
    </div>
  );
}