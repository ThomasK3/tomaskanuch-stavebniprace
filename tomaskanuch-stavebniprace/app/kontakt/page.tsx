// app/kontakt/page.tsx
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Map from '@/components/Map';
import Footer from '@/components/Footer';
import ContactPageBanner from '@/components/ContactPageBanner';
import FAQ from '@/components/FAQ';

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactPageBanner />
      {/* Vypneme nadpis v Contact komponentě, protože už je v banneru */}
      <Contact showTitle={false} />
      <Map mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20309.096121385767!2d15.0493167!3d50.766433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470936924893a843%3A0x8cba41af83c97cff!2sLiberec%2C%20%C4%8Cesko!5e0!3m2!1scs!2scs!4v1650000000000!5m2!1scs!2scs" />
      <FAQ />
      <Footer />
    </main>
  );
}