'use client';
// components/ContactPageBanner.tsx
import TriangleIcon from './TriangleIcon';

export default function ContactPageBanner() {
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
            <TriangleIcon color="#1AC8ED" size={30} direction="up" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Kontaktujte nás</h1>
          <p className="text-[#9093A2] max-w-2xl mx-auto text-lg">
            Potřebujete rekonstrukci, zednické práce nebo pokládku obkladů a dlažeb? 
            Kontaktujte nás a my vám rádi pomůžeme s realizací vašich představ.
            Ozveme se vám co nejdříve s nezávaznou nabídkou.
          </p>
        </div>
      </div>
    </section>
  );
}