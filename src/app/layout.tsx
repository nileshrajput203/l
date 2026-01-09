import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Preloader } from '@/components/common/Preloader';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Navkar Group | Best Construction & Real Estate in Palghar',
  description: 'Navkar Group is a leading real estate and construction company in Palghar, dedicated to crafting quality landmarks that elevate city skylines. Discover our residential and commercial projects.',
  keywords: 'Navkar Group, Navkar Living, construction Palghar, real estate Palghar, property developer Palghar, best construction group in Palghar, residential projects Palghar, commercial projects Palghar',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-body antialiased`}>
        <Preloader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
