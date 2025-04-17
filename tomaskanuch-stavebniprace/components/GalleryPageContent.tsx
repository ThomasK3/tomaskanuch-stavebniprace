'use client';
// components/GalleryPageContent.tsx
import { useState } from 'react';
import TriangleIcon from './TriangleIcon';

// Definice typu pro projekty
interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  location?: string;
  year?: string;
}

export default function GalleryPageContent() {
  // Rozšířený seznam projektů pro celou galerii
  const allProjects: Project[] = [
    // Rekonstrukce
    {
      id: 1,
      title: 'Rekonstrukce koupelny',
      category: 'rekonstrukce',
      imageUrl: 'https://placehold.co/600x400?text=Koupelna',
      description: 'Kompletní rekonstrukce koupelny včetně nových obkladů a sanity.',
      location: 'Liberec',
      year: '2024'
    },
    {
      id: 2,
      title: 'Rekonstrukce bytu',
      category: 'rekonstrukce',
      imageUrl: 'https://placehold.co/600x400?text=Byt',
      description: 'Celková rekonstrukce bytu 2+1 včetně nových omítek a podlah.',
      location: 'Jablonec nad Nisou',
      year: '2023'
    },
    {
      id: 3,
      title: 'Rekonstrukce kuchyně',
      category: 'rekonstrukce',
      imageUrl: 'https://placehold.co/600x400?text=Kuchyň',
      description: 'Rekonstrukce kuchyně včetně nové elektroinstalace a rozvodů vody.',
      location: 'Liberec',
      year: '2023'
    },
    {
      id: 4,
      title: 'Rekonstrukce rodinného domu',
      category: 'rekonstrukce',
      imageUrl: 'https://placehold.co/600x400?text=Dům',
      description: 'Kompletní rekonstrukce rodinného domu včetně zateplení a nové fasády.',
      location: 'Turnov',
      year: '2022'
    },
    
    // Obklady
    {
      id: 5,
      title: 'Obklady v kuchyni',
      category: 'obklady',
      imageUrl: 'https://placehold.co/600x400?text=Kuchyň+obklady',
      description: 'Montáž obkladů v moderní kuchyni.',
      location: 'Jablonec nad Nisou',
      year: '2024'
    },
    {
      id: 6,
      title: 'Koupelna v podkroví',
      category: 'obklady',
      imageUrl: 'https://placehold.co/600x400?text=Podkroví',
      description: 'Realizace koupelny v podkrovním prostoru.',
      location: 'Liberec',
      year: '2023'
    },
    {
      id: 7,
      title: 'Obklady koupelny',
      category: 'obklady',
      imageUrl: 'https://placehold.co/600x400?text=Koupelna+obklady',
      description: 'Moderní obklady v koupelně včetně mozaiky.',
      location: 'Turnov',
      year: '2023'
    },
    {
      id: 8,
      title: 'Obklad krbu',
      category: 'obklady',
      imageUrl: 'https://placehold.co/600x400?text=Krb',
      description: 'Obklad krbu přírodním kamenem.',
      location: 'Železný Brod',
      year: '2022'
    },
    
    // Dlažby
    {
      id: 9,
      title: 'Venkovní dlažba',
      category: 'dlazby',
      imageUrl: 'https://placehold.co/600x400?text=Terasa',
      description: 'Pokládka venkovní dlažby na terasu rodinného domu.',
      location: 'Jablonec nad Nisou',
      year: '2024'
    },
    {
      id: 10,
      title: 'Dlažba v koupelně',
      category: 'dlazby',
      imageUrl: 'https://placehold.co/600x400?text=Koupelna+dlažba',
      description: 'Pokládka dlažby a mozaiky v koupelně.',
      location: 'Liberec',
      year: '2023'
    },
    {
      id: 11,
      title: 'Venkovní schodiště',
      category: 'dlazby',
      imageUrl: 'https://placehold.co/600x400?text=Schodiště',
      description: 'Pokládka mrazuvzdorné dlažby na venkovní schodiště.',
      location: 'Turnov',
      year: '2023'
    },
    {
      id: 12,
      title: 'Dlažba v obývacím pokoji',
      category: 'dlazby',
      imageUrl: 'https://placehold.co/600x400?text=Obývák',
      description: 'Velkoformátová dlažba v obývacím pokoji.',
      location: 'Jablonec nad Nisou',
      year: '2022'
    },
    
    // Zednické práce
    {
      id: 13,
      title: 'Přístavba domu',
      category: 'zednicke-prace',
      imageUrl: 'https://placehold.co/600x400?text=Přístavba',
      description: 'Realizace přístavby rodinného domu.',
      location: 'Liberec',
      year: '2024'
    },
    {
      id: 14,
      title: 'Zateplení fasády',
      category: 'zednicke-prace',
      imageUrl: 'https://placehold.co/600x400?text=Fasáda',
      description: 'Zateplení fasády rodinného domu včetně finální omítky.',
      location: 'Jablonec nad Nisou',
      year: '2023'
    },
    {
      id: 15,
      title: 'Sádrokartonové příčky',
      category: 'zednicke-prace',
      imageUrl: 'https://placehold.co/600x400?text=Příčky',
      description: 'Realizace sádrokartonových příček a podhledů.',
      location: 'Turnov',
      year: '2023'
    },
    {
      id: 16,
      title: 'Oprava omítek',
      category: 'zednicke-prace',
      imageUrl: 'https://placehold.co/600x400?text=Omítky',
      description: 'Oprava historických omítek v bytovém domě.',
      location: 'Liberec',
      year: '2022'
    }
  ];

  // Filtry pro galerii
  const filters = [
    { id: 'all', label: 'Všechny projekty' },
    { id: 'rekonstrukce', label: 'Rekonstrukce' },
    { id: 'obklady', label: 'Obklady' },
    { id: 'dlazby', label: 'Dlažby' },
    { id: 'zednicke-prace', label: 'Zednické práce' }
  ];

  // State pro aktivní filtr a zobrazený projekt
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filtrování projektů podle kategorie
  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <>
      {/* Header s doplňkovou mezerou pro navigaci */}
      <div className="h-20"></div>
      
      {/* Banner sekce */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Dekorativní trojúhelník */}
        <div className="absolute top-0 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/2 opacity-5">
          <div className="w-full h-full bg-[#1AC8ED]" style={{
            clipPath: 'polygon(0 100%, 100% 0, 100% 100%)'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <TriangleIcon color="#9CD336" size={30} direction="up" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Naše realizace</h1>
            <p className="text-[#9093A2] max-w-2xl mx-auto text-lg">
              Prohlédněte si ukázky našich dokončených projektů. Každý projekt realizujeme s maximální 
              péčí o detail a s důrazem na spokojenost zákazníka. Stovky spokojených klientů jsou 
              naší nejlepší referencí.
            </p>
          </div>
        </div>
      </section>
      
      {/* Hlavní galerie */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filtry projektů */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-md transition duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#1AC8ED] text-white shadow-md'
                    : 'bg-gray-100 text-[#9093A2] hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          {/* Počet zobrazených projektů */}
          <div className="text-center mb-8">
            <p className="text-[#9093A2]">
              Zobrazeno <span className="font-bold text-[#1AC8ED]">{filteredProjects.length}</span> projektů
              {activeFilter !== 'all' && ` v kategorii "${filters.find(f => f.id === activeFilter)?.label}"`}
            </p>
          </div>
          
          {/* Grid s projekty */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProjects.map(project => (
              <div 
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                {/* Obrázek projektu */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-[#1AC8ED] text-white text-xs py-1 px-3 rounded-sm">
                    {filters.find(f => f.id === project.category)?.label || project.category}
                  </div>
                </div>
                
                {/* Informace o projektu */}
                <div className="p-5 border-t border-gray-100">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 flex items-center">
                    {project.title}
                    <div className="ml-2 text-[#1AC8ED] transform transition group-hover:translate-x-1">
                      <TriangleIcon color="#1AC8ED" size={10} direction="right" />
                    </div>
                  </h3>
                  <p className="text-[#9093A2] mb-3">{project.description}</p>
                  
                  {/* Lokace a rok */}
                  <div className="flex justify-between text-sm text-[#9093A2] mb-4">
                    {project.location && (
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[#9CD336]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.location}
                      </div>
                    )}
                    {project.year && (
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[#9CD336]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {project.year}
                      </div>
                    )}
                  </div>
                  
                  <button className="text-[#1AC8ED] font-medium flex items-center group-hover:underline">
                    <span>Zobrazit detail</span>
                    <div className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                      <TriangleIcon color="#1AC8ED" size={8} direction="right" />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pokud nejsou žádné projekty k zobrazení */}
          {filteredProjects.length === 0 && (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-[#9093A2] text-lg">Pro tento filtr nebyly nalezeny žádné projekty.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA sekce */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Dekorativní trojúhelník */}
            <div className="absolute -bottom-16 -right-16 opacity-5">
              <div className="w-40 h-40 bg-[#1AC8ED]" style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
              }}></div>
            </div>
            
            <div className="text-center relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Máte zájem o podobný projekt?</h2>
              <p className="text-[#9093A2] mb-8 max-w-2xl mx-auto">
                Neváhejte nás kontaktovat pro nezávaznou konzultaci a cenovou nabídku. 
                Rádi vám pomůžeme s realizací vašich představ.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/kontakt" 
                  className="bg-[#1AC8ED] hover:bg-[#16b5d6] text-white font-bold py-3 px-8 rounded-md transition duration-300 flex items-center justify-center"
                >
                  Kontaktujte nás
                  <div className="ml-2">
                    <TriangleIcon color="white" size={12} direction="right" />
                  </div>
                </a>
                <a 
                  href="tel:+420775028131" 
                  className="border-2 border-[#9093A2] hover:border-[#1AC8ED] text-[#9093A2] hover:text-[#1AC8ED] font-bold py-3 px-8 rounded-md transition duration-300 flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +420 775 028 131
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
            
      {/* Lightbox pro zobrazení detailu projektu */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md text-gray-800 hover:bg-gray-100 transition"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 h-64 md:h-auto">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/3 p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{selectedProject.title}</h3>
                <div className="mb-4">
                  <span className="inline-block bg-[#1AC8ED]/10 text-[#1AC8ED] text-sm px-3 py-1 rounded-sm">
                    {filters.find(f => f.id === selectedProject.category)?.label || selectedProject.category}
                  </span>
                </div>
                <p className="text-[#9093A2] mb-6">{selectedProject.description}</p>
                
                {/* Detailní informace */}
                {(selectedProject.location || selectedProject.year) && (
                  <div className="mb-6 space-y-2">
                    <h4 className="font-semibold text-gray-800">Detaily projektu:</h4>
                    {selectedProject.location && (
                      <div className="flex items-center text-[#9093A2]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#9CD336]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Lokace: {selectedProject.location}</span>
                      </div>
                    )}
                    {selectedProject.year && (
                      <div className="flex items-center text-[#9093A2]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#9CD336]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Rok realizace: {selectedProject.year}</span>
                      </div>
                    )}
                  </div>
                )}
                
                <a 
                  href="/kontakt" 
                  className="bg-[#1AC8ED] hover:bg-[#16b5d6] text-white font-bold py-2 px-6 rounded-md transition duration-300 flex items-center"
                >
                  Kontaktovat pro podobný projekt
                  <div className="ml-2">
                    <TriangleIcon color="white" size={10} direction="right" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}