// app/galerie/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryPageContent from '@/components/GalleryPageContent';

export const metadata = {
  title: 'Galerie prací | Tomáš Kaňuch - Stavební práce',
  description: 'Prohlédněte si naše dokončené projekty rekonstrukcí, zednických prací, obkladů a dlažeb. Kvalita a profesionalita ve všech našich realizacích.',
};

export default function GalleriePage() {
  return (
    <main>
      <Navbar />
      <GalleryPageContent />
      <Footer />
    </main>
  );
}