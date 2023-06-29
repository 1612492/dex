import { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Footer from '_components/footer';
import Header from '_components/header';
import { merge } from '_utils/classes';

import './globals.css';

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DEX',
  description: 'DEX boilerplate',
  themeColor: 'fff',
  manifest: '/manifest.json',
  metadataBase: new URL('https://dex-boilerplate.vercel.app'),
  icons: [
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/icons/16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/icons/32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/icons/180.png' },
  ],
  openGraph: {
    title: 'DEX',
    description: 'DEX boilerplate',
    url: 'https://dex-boilerplate.vercel.app',
    images: '/og.png',
  },
  twitter: {
    title: 'DEX',
    description: 'DEX boilerplate',
    card: 'summary_large_image',
    images: '/twitter-og.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="flex-1 overflow-y-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
