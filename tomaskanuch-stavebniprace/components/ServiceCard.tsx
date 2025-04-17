// components/ServiceCard.tsx
import Link from 'next/link';
import TriangleIcon from './TriangleIcon';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string; // Přidaný prop pro odkaz
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden text-gray-800">
      {/* Dekorativní trojúhelník v pozadí */}
      <div className="absolute -bottom-16 -right-16 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        <div className="w-40 h-40 bg-[#1AC8ED]" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
        }}></div>
      </div>
      
      {/* Ikona služby */}
      <div className="text-4xl mb-6 relative z-10">{icon}</div>
      
      {/* Obsah karty */}
      <h3 className="text-xl font-bold mb-4 relative z-10 flex items-center">
        <span>{title}</span>
        <div className="ml-2 text-[#1AC8ED]">
          <TriangleIcon color="#1AC8ED" size={10} direction="right" />
        </div>
      </h3>
      
      <p className="text-[#9093A2] relative z-10">{description}</p>
      
      {/* Tlačítko s hover efektem - změněno na Link komponentu */}
      <Link 
        href={href} 
        className="mt-6 text-[#1AC8ED] font-medium flex items-center group-hover:underline relative z-10"
      >
        <span>Zjistit více</span>
        <div className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
          <TriangleIcon color="#1AC8ED" size={8} direction="right" />
        </div>
      </Link>
    </div>
  );
}