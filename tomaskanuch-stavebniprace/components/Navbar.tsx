'use client';
// components/Navbar.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import TriangleIcon from './TriangleIcon';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Sledování scrollu pro změnu stylu navigace
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Zavření menu po kliknutí na odkaz
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 bg-[#1AC8ED] mr-3 flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45 text-white font-bold text-xl">TK</div>
            </div>
            <div className="font-bold text-xl text-gray-800">
              Tomáš Kanůch
            </div>
          </Link>
          
          {/* Hlavní menu - desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-800 hover:text-[#1AC8ED] transition duration-300"
            >
              Domů
            </Link>
            <Link 
              href="/sluzby" 
              className="text-gray-800 hover:text-[#1AC8ED] transition duration-300"
            >
              Služby
            </Link>
            <Link 
              href="/galerie" 
              className="text-gray-800 hover:text-[#1AC8ED] transition duration-300"
            >
              Galerie
            </Link>
            <Link 
              href="/kontakt" 
              className="text-gray-800 hover:text-[#1AC8ED] transition duration-300"
            >
              Kontakt
            </Link>
            <Link 
              href="tel:+420123456789" 
              className="bg-[#1AC8ED] hover:bg-[#16b5d6] text-white px-5 py-2 rounded-md transition duration-300 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +420 775 028 131
            </Link>
          </div>
          
          {/* Hamburger menu - mobilní verze */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center"
          >
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? 'transform rotate-45 translate-y-1' : 'mb-1.5'
            }`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'mb-1.5'
            }`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? 'transform -rotate-45 -translate-y-1' : ''
            }`}></span>
          </button>
        </div>
        
        {/* Mobilní menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
            <Link 
              href="/"
              onClick={handleLinkClick}
              className="block text-gray-800 hover:text-[#1AC8ED] transition duration-300 py-2 border-b border-gray-100"
            >
              Domů
            </Link>
            <Link 
              href="#sluzby"
              onClick={handleLinkClick}
              className="block text-gray-800 hover:text-[#1AC8ED] transition duration-300 py-2 border-b border-gray-100"
            >
              Služby
            </Link>
            <Link 
              href="#galerie"
              onClick={handleLinkClick}
              className="block text-gray-800 hover:text-[#1AC8ED] transition duration-300 py-2 border-b border-gray-100"
            >
              Galerie
            </Link>
            <Link 
              href="#kontakt"
              onClick={handleLinkClick}
              className="block text-gray-800 hover:text-[#1AC8ED] transition duration-300 py-2 border-b border-gray-100"
            >
              Kontakt
            </Link>
            <Link 
              href="tel:+420123456789"
              onClick={handleLinkClick}
              className="bg-[#1AC8ED] text-white py-2 px-4 rounded-md flex items-center justify-center mt-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +420 775 028 131
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}