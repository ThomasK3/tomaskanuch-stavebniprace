'use client';
// components/ServicePageBanner.tsx
import TriangleIcon from './TriangleIcon';

export default function ServicePageBanner() {
  return (
    <section className="pt-32 pb-16 bg-gray-50 relative overflow-hidden">
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
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Naše služby</h1>
          <p className="text-[#9093A2] max-w-2xl mx-auto text-lg">
            Nabízíme komplexní stavební služby od rekonstrukcí přes zednické práce až po 
            pokládku obkladů a dlažeb. Všechny naše služby poskytujeme s důrazem na kvalitu,
            precizní provedení a spokojenost zákazníka.
          </p>
        </div>
        
        {/* Navigační prvky pro rychlý přesun na jednotlivé služby */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a 
            href="#rekonstrukce" 
            className="bg-white hover:bg-[#1AC8ED] hover:text-white text-[#333333] px-5 py-2 rounded-md shadow-sm transition duration-300 flex items-center"
          >
            <span>Rekonstrukce</span>
            <div className="ml-2">
              <TriangleIcon color="currentColor" size={10} direction="right" />
            </div>
          </a>
          <a 
            href="#zednicke-prace" 
            className="bg-white hover:bg-[#1AC8ED] hover:text-white text-[#333333] px-5 py-2 rounded-md shadow-sm transition duration-300 flex items-center"
          >
            <span>Zednické práce</span>
            <div className="ml-2">
              <TriangleIcon color="currentColor" size={10} direction="right" />
            </div>
          </a>
          <a 
            href="#obklady-dlazby" 
            className="bg-white hover:bg-[#1AC8ED] hover:text-white text-[#333333] px-5 py-2 rounded-md shadow-sm transition duration-300 flex items-center"
          >
            <span>Obklady a dlažby</span>
            <div className="ml-2">
              <TriangleIcon color="currentColor" size={10} direction="right" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}