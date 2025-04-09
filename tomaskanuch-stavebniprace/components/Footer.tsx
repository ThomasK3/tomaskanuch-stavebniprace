// components/Footer.tsx
import Link from 'next/link';
import TriangleIcon from './TriangleIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#222] text-white">
      <div className="container mx-auto px-4">
        {/* Horní část patičky */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* O nás */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span>O nás</span>
              <div className="ml-2">
                <TriangleIcon color="#1AC8ED" size={10} direction="right" />
              </div>
            </h3>
            <p className="text-gray-400 mb-4">
              Tomáš Kanůch - Stavební práce nabízí profesionální zednické služby
              s důrazem na kvalitu a spokojenost zákazníka již více než 15 let.
            </p>
            <p className="text-gray-400">
              Specializujeme se na rekonstrukce, zednické práce a pokládku obkladů a dlažeb.
            </p>
          </div>
          
          {/* Rychlé odkazy */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span>Rychlé odkazy</span>
              <div className="ml-2">
                <TriangleIcon color="#1AC8ED" size={10} direction="right" />
              </div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#1AC8ED] transition duration-300 flex items-center">
                  <div className="mr-2">
                    <TriangleIcon color="#1AC8ED" size={8} direction="right" />
                  </div>
                  Domů
                </Link>
              </li>
              <li>
                <Link href="#sluzby" className="text-gray-400 hover:text-[#1AC8ED] transition duration-300 flex items-center">
                  <div className="mr-2">
                    <TriangleIcon color="#1AC8ED" size={8} direction="right" />
                  </div>
                  Služby
                </Link>
              </li>
              <li>
                <Link href="#galerie" className="text-gray-400 hover:text-[#1AC8ED] transition duration-300 flex items-center">
                  <div className="mr-2">
                    <TriangleIcon color="#1AC8ED" size={8} direction="right" />
                  </div>
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="text-gray-400 hover:text-[#1AC8ED] transition duration-300 flex items-center">
                  <div className="mr-2">
                    <TriangleIcon color="#1AC8ED" size={8} direction="right" />
                  </div>
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Služby */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span>Služby</span>
              <div className="ml-2">
                <TriangleIcon color="#1AC8ED" size={10} direction="right" />
              </div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#1AC8ED] transition duration-300 flex items-center">
                  <div className="mr-2">
                    <TriangleIcon color="#1AC8ED" size={8} direction="right" />
                  </div>
                  Rekonstrukce
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#1AC8ED] transition duration-300 flex items-center">
                  <div className="mr-2">
                    <TriangleIcon color="#1AC8ED" size={8} direction="right" />
                  </div>
                  Zednické práce
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#1AC8ED] transition duration-300 flex items-center">
                  <div className="mr-2">
                    <TriangleIcon color="#1AC8ED" size={8} direction="right" />
                  </div>
                  Obklady a dlažby
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#1AC8ED] transition duration-300 flex items-center">
                  <div className="mr-2">
                    <TriangleIcon color="#1AC8ED" size={8} direction="right" />
                  </div>
                  Realizace koupelen
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Kontakt */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span>Kontakt</span>
              <div className="ml-2">
                <TriangleIcon color="#1AC8ED" size={10} direction="right" />
              </div>
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-[#1AC8ED]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Stavební 123, 123 45 Město</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-[#1AC8ED]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+420 123 456 789</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-[#1AC8ED]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>info@tomaskanuch.cz</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Spodní část patičky */}
        <div className="py-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Tomáš Kanůch - Stavební práce. Všechna práva vyhrazena.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-[#1AC8ED] transition duration-300">Zásady ochrany osobních údajů</a>
            <a href="#" className="text-gray-400 hover:text-[#1AC8ED] transition duration-300">Obchodní podmínky</a>
          </div>
        </div>
      </div>
    </footer>
  );
}