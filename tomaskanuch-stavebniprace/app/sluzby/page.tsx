// app/sluzby/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';
import CTA from '@/components/CTA';
import TriangleIcon from '@/components/TriangleIcon';

export default function Services() {
  const services = [
    {
      id: 'rekonstrukce',
      title: 'Rekonstrukce',
      description: [
        'Nabízíme komplexní i částečné rekonstrukce bytů, domů a komerčních prostor s důrazem na kvalitu a spokojenost zákazníka.',
        'Naše služby zahrnují demoliční práce, stavební úpravy, změny dispozic, rekonstrukce koupelen a kuchyní, nové omítky, podlahy, elektroinstalaci a další.',
        'Ke každému projektu přistupujeme individuálně a snažíme se maximálně vyhovět potřebám a představám zákazníka.'
      ],
      imageUrl: 'https://placehold.co/600x400?text=Rekonstrukce',
      benefits: [
        'Komplexní řešení na klíč',
        'Odborné poradenství a návrhy',
        'Kvalitní materiály a zpracování',
        'Dodržení dohodnutých termínů',
        'Cenová transparentnost'
      ]
    },
    {
      id: 'zednicke-prace',
      title: 'Zednické práce',
      description: [
        'Provádíme veškeré zednické práce od drobných oprav až po rozsáhlejší stavební úpravy.',
        'Specializujeme se na zdění příček, opravy omítek, betonování, sádrování, štukování a další zednické práce.',
        'Klademe důraz na precizní provedení a používáme kvalitní materiály pro zajištění dlouhé životnosti.'
      ],
      imageUrl: 'https://placehold.co/600x400?text=Zednické+práce',
      benefits: [
        'Profesionální přístup',
        'Letité zkušenosti v oboru',
        'Kvalitní řemeslné zpracování',
        'Flexibilita a přizpůsobení požadavkům',
        'Čistota a pořádek na pracovišti'
      ],
      reverse: true
    },
    {
      id: 'obklady-dlazby',
      title: 'Obklady a dlažby',
      description: [
        'Nabízíme profesionální pokládku obkladů a dlažeb v koupelnách, kuchyních, na terasách i v komerčních prostorách.',
        'Pracujeme s různými typy materiálů včetně keramiky, porcelánu, přírodního kamene a velkoformátových obkladů.',
        'Zajistíme kompletní realizaci včetně přípravy podkladu, hydroizolace, pokládky a spárování.'
      ],
      imageUrl: 'https://placehold.co/600x400?text=Obklady+a+dlažby',
      benefits: [
        'Precizní pokládka a zaměření',
        'Zkušenosti s různými druhy materiálů',
        'Řešení komplexních projektů',
        'Poradenství při výběru materiálů',
        'Moderní techniky a postupy'
      ]
    }
  ];

  return (
    <main>
      <Navbar />
      
      {/* Banner sekce - obsahuje padding-top pro odsazení od fixed navigace */}
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
              Prohlédněte si detaily služeb, které nabízíme. Specializujeme se na rekonstrukce, zednické práce a pokládku obkladů a dlažeb. 
              Ke každé zakázce přistupujeme individuálně a s maximální pečlivostí.
            </p>
          </div>
        </div>
      </section>
      
      {/* Služby - detail */}
      {services.map((service, index) => (
        <ServiceDetail 
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          imageUrl={service.imageUrl}
          benefits={service.benefits}
          reverse={service.reverse}
        />
      ))}
      
      {/* CTA sekce */}
      <CTA 
        title="Zaujala vás některá z našich služeb?"
        description="Kontaktujte nás pro nezávaznou konzultaci nebo cenovou nabídku. Rádi vám poradíme s vaším projektem a najdeme optimální řešení."
      />
      
      <Footer />
    </main>
  );
}