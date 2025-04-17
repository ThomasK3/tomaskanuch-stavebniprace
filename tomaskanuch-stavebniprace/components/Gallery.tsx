'use client';
// components/Gallery.tsx
import { useState } from 'react';
import TriangleIcon from './TriangleIcon';

// Definice typu pro projekty
interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export default function Gallery() {
  // Ukázkové projekty s placeholder obrázky
  const projects: Project[] = [
    {
      id: 1,
      title: 'Rekonstrukce koupelny',
      category: 'rekonstrukce',
      imageUrl: 'https://placehold.co/600x400?text=Koupelna',
      description: 'Kompletní rekonstrukce koupelny včetně nových obkladů a sanity.'
    },
    {
      id: 2,
      title: 'Obklady v kuchyni',
      category: 'obklady',
      imageUrl: 'https://placehold.co/600x400?text=Kuchyň',
      description: 'Montáž obkladů v moderní kuchyni.'
    },
    {
      id: 3,
      title: 'Rekonstrukce bytu',
      category: 'rekonstrukce',
      imageUrl: 'https://placehold.co/600x400?text=Byt',
      description: 'Celková rekonstrukce bytu 2+1 včetně nových omítek a podlah.'
    },
    {
      id: 4,
      title: 'Venkovní dlažba',
      category: 'dlazby',
      imageUrl: 'https://placehold.co/600x400?text=Terasa',
      description: 'Pokládka venkovní dlažby na terasu rodinného domu.'
    },
    {
      id: 5,
      title: 'Přístavba domu',
      category: 'zednicke-prace',
      imageUrl: 'https://placehold.co/600x400?text=Přístavba',
      description: 'Realizace přístavby rodinného domu.'
    },
    {
      id: 6,
      title: 'Koupelna v podkroví',
      category: 'obklady',
      imageUrl: 'https://placehold.co/600x400?text=Podkroví',
      description: 'Realizace koupelny v podkrovním prostoru.'
    },
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
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="galerie" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <TriangleIcon color="#9CD336" size={30} direction="up" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Naše projekty</h2>
          <p className="text-[#9093A2] max-w-xl mx-auto">
            Prohlédněte si naše dokončené projekty. Každý projekt realizujeme s maximální 
            péčí o detail a s důrazem na spokojenost zákazníka.
          </p>
        </div>
        
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
        
        {/* Grid s projekty */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <p className="text-[#9093A2] mb-4">{project.description}</p>
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
                  
                  <button className="bg-[#1AC8ED] hover:bg-[#16b5d6] text-white font-bold py-2 px-6 rounded-md transition duration-300 flex items-center">
                    Kontaktovat pro podobný projekt
                    <div className="ml-2">
                      <TriangleIcon color="white" size={10} direction="right" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Tlačítko pro zobrazení více projektů */}
        <div className="mt-12 text-center">
          <button className="bg-[#1AC8ED] hover:bg-[#16b5d6] text-white font-bold py-3 px-8 rounded-md transition duration-300 flex items-center mx-auto">
            Zobrazit více projektů
            <div className="ml-2">
              <TriangleIcon color="white" size={12} direction="right" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}