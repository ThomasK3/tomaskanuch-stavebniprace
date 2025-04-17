'use client';
// components/FAQ.tsx
import { useState } from 'react';
import TriangleIcon from './TriangleIcon';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "Jaký je postup při zadání rekonstrukce?",
      answer: "Postup je jednoduchý. Nejprve nás kontaktujte telefonicky nebo pomocí kontaktního formuláře. Domluvíme si nezávaznou konzultaci, kde probereme vaše požadavky a představy. Na základě toho vám připravíme cenovou nabídku. Po jejím odsouhlasení dohodneme termín realizace a podepíšeme smlouvu. Následuje samotná realizace a po dokončení prací předání díla."
    },
    {
      id: 2,
      question: "Poskytujete záruku na provedené práce?",
      answer: "Ano, na všechny provedené práce poskytujeme záruku 24 měsíců. Na použité materiály se vztahuje záruka dle podmínek výrobce, obvykle 24-60 měsíců."
    },
    {
      id: 3,
      question: "Jak dlouho trvá rekonstrukce koupelny?",
      answer: "Doba rekonstrukce koupelny závisí na rozsahu prací. Standardní rekonstrukce koupelny trvá přibližně 2-3 týdny. Komplexní rekonstrukce s úpravami dispozic a rozvodů může trvat 3-5 týdnů. Vždy se snažíme dodržet dohodnutý termín dokončení."
    },
    {
      id: 4,
      question: "Zajišťujete i dodávku materiálu?",
      answer: "Ano, zajišťujeme kompletní dodávku veškerého potřebného materiálu včetně odvozu a likvidace odpadu. Díky dlouhodobé spolupráci s dodavateli můžeme nabídnout výhodné ceny materiálů. Pokud máte vlastní materiál, je možné realizovat práce i s ním."
    },
    {
      id: 5,
      question: "Pracujete i o víkendech?",
      answer: "Standardně pracujeme v pracovních dnech od 7:00 do 17:00. Ve výjimečných případech a po dohodě je možné zajistit práce i během víkendu, zejména pokud je potřeba dodržet termín dokončení."
    },
    {
      id: 6,
      question: "Můžete vyhotovit i návrh rekonstrukce?",
      answer: "Ano, v rámci komplexních zakázek spolupracujeme s architekty a designéry, kteří mohou připravit návrh rekonstrukce. Pro menší zakázky jako rekonstrukce koupelny nabízíme základní vizualizaci pro lepší představu o výsledku."
    }
  ];
  
  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <TriangleIcon color="#1AC8ED" size={30} direction="up" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Časté dotazy</h2>
          <p className="text-[#9093A2] max-w-xl mx-auto">
            Odpovědi na nejčastější otázky našich klientů. Nenašli jste odpověď na svou otázku?
            Neváhejte nás kontaktovat.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div key={item.id} className="mb-4">
              <button
                onClick={() => toggleItem(item.id)}
                className={`w-full text-left bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${
                  openId === item.id ? 'shadow-md' : ''
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">{item.question}</h3>
                  <div className={`text-[#1AC8ED] transition-transform duration-300 ${
                    openId === item.id ? 'transform rotate-90' : ''
                  }`}>
                    <TriangleIcon color="#1AC8ED" size={12} direction="right" />
                  </div>
                </div>
                
                {openId === item.id && (
                  <div className="mt-4 text-[#9093A2] leading-relaxed border-t border-gray-100 pt-4">
                    {item.answer}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}