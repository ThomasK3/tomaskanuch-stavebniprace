// app/galerie/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galerie prací | Tomáš Kaňuch - Stavební práce',
  description: 'Prohlédněte si naše dokončené projekty rekonstrukcí, zednických prací, obkladů a dlažeb. Kvalita a profesionalita ve všech našich realizacích.',
};

export default function GalerieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  );
}