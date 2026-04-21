import type { Metadata, Viewport } from 'next';
import { Inter, Cormorant_Garamond, Dancing_Script } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-dancing',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Happy Birthday, Hà ♡',
  description: 'A little romantic surprise — seven scenes made with love.',
  openGraph: {
    title: 'Happy Birthday, Hà ♡',
    description: 'A little romantic surprise — seven scenes made with love.',
    type: 'website',
  },
};

// ✅ PINDAH KE SINI
export const viewport: Viewport = {
  themeColor: '#fff1f2',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${dancing.variable}`}
    >
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}