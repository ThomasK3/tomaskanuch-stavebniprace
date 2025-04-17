'use client';
// components/Contact.tsx
import { useState } from 'react';
import TriangleIcon from './TriangleIcon';

interface ContactProps {
  showTitle?: boolean;
}

export default function Contact({ showTitle = true }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'rekonstrukce'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulace odeslání formuláře - v reálném projektu by zde byl API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset formuláře po 3 sekundách
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          service: 'rekonstrukce'
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="kontakt" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Dekorativní trojúhelník */}
      <div className="absolute top-0 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/2 opacity-5">
        <div className="w-full h-full bg-[#1AC8ED]" style={{
          clipPath: 'polygon(0 100%, 100% 0, 100% 100%)'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <TriangleIcon color="#1AC8ED" size={30} direction="up" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Kontaktujte nás</h2>
            <p className="text-[#9093A2] max-w-xl mx-auto">
              Máte zájem o naše služby nebo potřebujete poradit? Neváhejte nás kontaktovat.
              Ozveme se vám co nejdříve.
            </p>
          </div>
        )}
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Kontaktní informace */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
                <span>Kontaktní údaje</span>
                <div className="ml-2">
                  <TriangleIcon color="#1AC8ED" size={12} direction="right" />
                </div>
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#1AC8ED] mb-1">Tomáš Kanůch - Stavební práce</h4>
                  <p className="text-[#9093A2]">Profesionální stavební a rekonstrukční služby</p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-1 text-gray-800">Adresa</h4>
                  <p className="text-[#9093A2]">Stavební 123, 123 45 Město</p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-1 text-gray-800">Telefon</h4>
                  <a href="tel:+420775028131" className="text-[#1AC8ED] hover:underline">+420 775 028 131</a>
                </div>
                
                <div>
                  <h4 className="font-bold mb-1 text-gray-800">Email</h4>
                  <a href="mailto:info@tomaskanuch.cz" className="text-[#1AC8ED] hover:underline">info@tomaskanuch.cz</a>
                </div>
                
                <div>
                  <h4 className="font-bold mb-1 text-gray-800">Otevírací doba</h4>
                  <p className="text-[#9093A2]">Po - Pá: 8:00 - 17:00</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-bold mb-3 text-gray-800">Sledujte nás</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-[#1AC8ED] text-white flex items-center justify-center rounded-full hover:bg-[#16b5d6] transition duration-300">
                    F
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#1AC8ED] text-white flex items-center justify-center rounded-full hover:bg-[#16b5d6] transition duration-300">
                    I
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Kontaktní formulář */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
                <span>Napište nám</span>
                <div className="ml-2">
                  <TriangleIcon color="#1AC8ED" size={12} direction="right" />
                </div>
              </h3>
              
              {submitSuccess ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Vaše zpráva byla úspěšně odeslána. Děkujeme!
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Jméno a příjmení *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1AC8ED] focus:border-[#1AC8ED] outline-none transition"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1AC8ED] focus:border-[#1AC8ED] outline-none transition"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1AC8ED] focus:border-[#1AC8ED] outline-none transition"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Služba
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1AC8ED] focus:border-[#1AC8ED] outline-none transition"
                      >
                        <option value="rekonstrukce">Rekonstrukce</option>
                        <option value="zednicke_prace">Zednické práce</option>
                        <option value="obklady_dlazby">Obklady a dlažby</option>
                        <option value="jine">Jiné</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Zpráva *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1AC8ED] focus:border-[#1AC8ED] outline-none transition"
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-[#1AC8ED] hover:bg-[#16b5d6] text-white font-bold py-3 px-8 rounded-md transition duration-300 flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Odesílám...' : 'Odeslat zprávu'}
                      {!isSubmitting && (
                        <div className="ml-2">
                          <TriangleIcon color="white" size={12} direction="right" />
                        </div>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}