// app/sluzby/page.tsx
import Navbar from '@/components/Navbar';
import TriangleIcon from '@/components/TriangleIcon';
import ServiceDetail from '@/components/ServiceDetail';
import Contact from '@/components/Contact';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

export default function SluzbyPage() {
  // Data pro detailní popis služeb
  const serviceDetails = [
    {
      id: 'rekonstrukce',
      title: 'Rekonstrukce',
      description: [
        'Nabízíme profesionální rekonstrukce bytových i nebytových prostor s důrazem na kvalitu a preciznost.',
        'Každý projekt začíná podrobnou konzultací, během které zjistíme vaše požadavky a navrhneme nejlepší řešení.',
        'Naše služby zahrnují kompletní realizaci od bourání, přes instalace až po finální úpravy povrchů.'
      ],
      imageUrl: '/images/projects/rekonstrukce.jpg',
      benefits: [
        'Rychlé a profesionální provedení',
        'Dodržování termínů a rozpočtů',
        'Konzultace a poradenství v průběhu celého projektu',
        'Kvalitní materiály a moderní technologie'
      ]
    },
    {
      id: 'zednicke-prace',
      title: 'Zednické práce',
      description: [
        'Specializujeme se na všechny typy zednických prací od drobných oprav až po rozsáhlé stavební projekty.',
        'Využíváme moderní technologie a postupy, které zaručují dlouhou životnost a špičkovou kvalitu.',
        'Naši zkušení řemeslníci mají mnohaletou praxi a dbají na každý detail.'
      ],
      imageUrl: '/images/projects/zednicke-prace.jpg',
      benefits: [
        'Kvalitní řemeslné zpracování',
        'Odborné poradenství při výběru materiálů',
        'Čistota na pracovišti během i po dokončení prací',
        'Flexibilita a přizpůsobení harmonogramu'
      ]
    },
    {
      id: 'obklady-dlazby',
      title: 'Obklady a dlažby',
      description: [
        'Pokládáme veškeré typy obkladů a dlažeb včetně velkoformátových prvků a mozaik.',
        'Pracujeme s keramikou, přírodním kamenem, porcelánem a dalšími materiály podle vašich preferencí.',
        'Zajistíme nejen samotnou pokládku, ale i přípravu podkladu, hydroizolaci a finální spárování.'
      ],
      imageUrl: '/images/projects/obklady-dlazby.jpg',
      benefits: [
        'Precizní pokládka i složitých vzorů',
        'Zkušenosti s velkoplošnými formáty',
        'Kvalitní hydroizolace a podkladové vrstvy',
        'Detailní zaměření a plánování spotřeby materiálu'
      ]
    }
  ];

  return (
    <main>
      <Navbar />

      {/* Hero sekce pro stránku služeb */}
      <section className="relative h-80 md:h-96 flex items-center overflow-hidden bg-white mt-16">
        {/* Pozadí s geometrickými prvky */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -right-20 top-20 opacity-10">
            <TriangleIcon color="#1AC8ED" size={200} direction="left" />
          </div>
          <div className="absolute left-40 bottom-20 opacity-10">
            <TriangleIcon color="#9CD336" size={150} direction="up" />
          </div>
        </div>
        
        {/* Obsah Hero sekce */}
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="flex justify-center mb-4">
            <TriangleIcon color="#1AC8ED" size={30} direction="up" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Naše <span className="text-[#1AC8ED]">služby</span>
          </h1>
          <p className="text-[#9093A2] text-xl mb-8 max-w-2xl mx-auto">
            Specializujeme se na rekonstrukce, zednické práce a pokládku 
            obkladů a dlažeb. Vždy s důrazem na kvalitu a spokojenost zákazníka.
          </p>
        </div>
      </section>

      {/* Detailní popis jednotlivých služeb */}
      {serviceDetails.map((service, index) => (
        <ServiceDetail 
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          imageUrl={service.imageUrl}
          benefits={service.benefits}
          reverse={index % 2 !== 0}
        />
      ))}

      {/* Kontaktní sekce */}
      <Contact />
      
      {/* Patička */}
      <Footer />
    </main>
  );
}