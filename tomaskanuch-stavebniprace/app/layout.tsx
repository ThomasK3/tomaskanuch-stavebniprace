// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Načtení fontu Inter
const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tomáš Kanůch - Stavební práce',
  description: 'Profesionální stavební a zednické práce, rekonstrukce, obklady a dlažby.',
  keywords: 'stavební práce, zedník, rekonstrukce, obklady, dlažby, řemeslník',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}