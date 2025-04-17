// components/Services.tsx
import TriangleIcon from './TriangleIcon';
import ServiceCard from './ServiceCard';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Rekonstrukce',
      description: 'Kompletní i částečné rekonstrukce bytů, domů a komerčních prostor s důrazem na kvalitu a spokojenost zákazníka.',
      icon: '🏠',
      href: '/sluzby#rekonstrukce'
    },
    {
      id: 2,
      title: 'Zednické práce',
      description: 'Odborné zednické práce včetně zdění, omítek, betonování, sádrování a dalších stavebních úprav.',
      icon: '🧱',
      href: '/sluzby#zednicke-prace'
    },
    {
      id: 3,
      title: 'Obklady a dlažby',
      description: 'Precizní pokládka obkladů a dlažeb v koupelnách, kuchyních, na terasách i v komerčních prostorách.',
      icon: '🛁',
      href: '/sluzby#obklady-dlazby'
    }
  ];

  return (
    <section id="sluzby" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <TriangleIcon color="#1AC8ED" size={30} direction="up" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Naše služby</h2>
          <p className="text-[#9093A2] max-w-xl mx-auto">
            Nabízíme širokou škálu profesionálních služeb v oblasti stavebnictví a rekonstrukcí.
            Všechny práce provádíme s maximální pečlivostí a nasazením.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block">
            <Link
              href="/sluzby"
              className="bg-white border-2 border-[#1AC8ED] text-[#1AC8ED] hover:bg-[#1AC8ED] hover:text-white font-bold py-3 px-8 rounded-md transition duration-300 flex items-center"
            >
              Více o našich službách
              <div className="ml-2">
                <TriangleIcon color="currentColor" size={12} direction="right" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}