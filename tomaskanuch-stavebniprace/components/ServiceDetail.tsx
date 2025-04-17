'use client';

import React from 'react';
import Image from 'next/image';
import TriangleIcon from './TriangleIcon';

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string[];
  imageUrl: string;
  benefits: string[];
  reverse?: boolean;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  id,
  title,
  description,
  imageUrl,
  benefits,
  reverse = false
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 px-4 sm:px-6 ${reverse ? 'bg-white' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
          {/* Obrázek */}
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-w-16 aspect-h-9 relative rounded-lg overflow-hidden shadow-md">
              <Image 
                src={imageUrl} 
                alt={title}
                width={600}
                height={400}
                className="object-cover"
                priority={false}
              />
              
              {/* Dekorativní trojúhelník */}
              <div className={`absolute ${reverse ? 'top-0 left-0' : 'bottom-0 right-0'} w-16 h-16 opacity-80`}>
                <TriangleIcon 
                  color={reverse ? "#9CD336" : "#1AC8ED"} 
                  size={64} 
                  direction={reverse ? "down" : "up"} 
                />
              </div>
            </div>
          </div>
          
          {/* Textový obsah */}
          <div className="w-full md:w-1/2">
            <div className="mb-3">
              <TriangleIcon color="#1AC8ED" size={20} direction="up" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-[#333333]">{title}</h2>
            
            {description.map((paragraph, index) => (
              <p key={index} className="text-[#9093A2] mb-4">
                {paragraph}
              </p>
            ))}
            
            {/* Výhody */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-[#333333]">Výhody naší služby:</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1">
                      <TriangleIcon color="#9CD336" size={12} direction="right" />
                    </div>
                    <span className="text-[#9093A2]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;