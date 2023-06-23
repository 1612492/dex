import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from '_components/header';
import cl from '_utils/cl';
import './globals.css';

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DEX',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cl(poppins.className, 'bg-gray-100')}>
        <Header />
        {children}
      </body>
    </html>
  );
}
