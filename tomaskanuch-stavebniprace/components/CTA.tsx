// components/CTA.tsx
import React from 'react';
import Link from 'next/link';
import TriangleIcon from './TriangleIcon';

interface CTAProps {
  title?: string;
  description?: string;
  contactUrl?: string;
  phoneNumber?: string;
  className?: string;
}

const CTA: React.FC<CTAProps> = ({
  title = "Máte zájem o podobný projekt?",
  description = "Neváhejte nás kontaktovat pro nezávaznou konzultaci a cenovou nabídku. Rádi vám pomůžeme s realizací vašich představ.",
  contactUrl = "/kontakt",
  phoneNumber = "+420 775 028 131",
  className = "",
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden ${className}`}>
          {/* Dekorativní trojúhelník */}
          <div className="absolute -bottom-16 -right-16 opacity-5">
            <div className="w-40 h-40 bg-[#1AC8ED]" style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
            }}></div>
          </div>
          
          <div className="text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">{title}</h2>
            <p className="text-[#9093A2] mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href={contactUrl} 
                className="bg-[#1AC8ED] hover:bg-[#16b5d6] text-white font-bold py-3 px-8 rounded-md transition duration-300 flex items-center justify-center"
              >
                Kontaktujte nás
                <div className="ml-2">
                  <TriangleIcon color="white" size={12} direction="right" />
                </div>
              </Link>
              <Link 
                href={`tel:${phoneNumber.replace(/\s+/g, '')}`} 
                className="border-2 border-[#9093A2] hover:border-[#1AC8ED] text-[#9093A2] hover:text-[#1AC8ED] font-bold py-3 px-8 rounded-md transition duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {phoneNumber}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;