// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      {/* Mapa */}
      <Map 
        mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.855485513833!2d15.187941877072989!3d50.72262017164536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ecae78324432b%3A0xceea3a2e7c579efc!2sV%20Niv%C3%A1ch%2038%2C%20466%2001%20Jablonec%20nad%20Nisou%201!5e0!3m2!1sen!2scz!4v1744905174753!5m2!1sen!2scz"
      />
      <Footer />
    </main>
  );
}