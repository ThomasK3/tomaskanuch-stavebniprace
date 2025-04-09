import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Nastavte base path, pokud hostujete v podsložce, např. pro GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/tomaskanuch-stavebniprace' : '',
  images: {
    unoptimized: true, // Pro statický export
  },
}

module.exports = nextConfig