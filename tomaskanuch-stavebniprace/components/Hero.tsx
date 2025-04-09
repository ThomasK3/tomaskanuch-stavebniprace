'use client';
// components/Hero.tsx
import TriangleIcon from './TriangleIcon';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-white">
      {/* Pozadí s geometrickými prvky */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-20 top-20 opacity-10">
          <TriangleIcon color="#1AC8ED" size={300} direction="left" />
        </div>
        <div className="absolute left-40 bottom-40 opacity-10">
          <TriangleIcon color="#9CD336" size={200} direction="up" />
        </div>
        <div className="absolute right-1/4 bottom-1/4 opacity-10">
          <TriangleIcon color="#9093A2" size={150} direction="down" />
        </div>
      </div>
      
      {/* Obsah Hero sekce */}
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Profesionální <span className="text-[#1AC8ED]">zednické práce</span> 
            <br />s důrazem na kvalitu
          </h1>
          <p className="text-[#9093A2] text-xl mb-8 max-w-lg">
            Více než 15 let zkušeností v oboru. Specializujeme se na rekonstrukce, 
            zednické práce a pokládku obkladů a dlažeb.
          </p>
          <div className="flex space-x-4">
            <button className="bg-[#1AC8ED] hover:bg-[#16b5d6] text-white font-bold py-3 px-8 rounded-md transition duration-300 flex items-center">
              Kontaktovat
              <div className="ml-2">
                <TriangleIcon color="white" size={12} direction="right" />
              </div>
            </button>
            <button className="border-2 border-[#9093A2] hover:border-[#1AC8ED] text-[#9093A2] hover:text-[#1AC8ED] font-bold py-3 px-8 rounded-md transition duration-300">
              Galerie prací
            </button>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-md shadow-xl">
            <img 
              src="/images/hero-image.jpg" 
              alt="Zednické práce ukázka"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 bg-white/90 p-4 rounded shadow-lg">
              <div className="flex items-center mb-2">
                <TriangleIcon color="#1AC8ED" size={14} direction="right" />
                <span className="ml-2 font-bold text-[#1AC8ED]">15+ let zkušeností</span>
              </div>
              <p className="text-sm text-[#9093A2]">Zaručujeme precizní práci a profesionální přístup</p>
            </div>
          </div>
          
          {/* Dekorativní trojúhelník v rohu */}
          <div className="absolute -top-5 -right-5 w-20 h-20 bg-[#9CD336] z-10 hidden lg:block" style={{
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
          }}></div>
        </div>
      </div>
    </section>
  );
}