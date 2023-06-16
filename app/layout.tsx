import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from '_components/header';
import './globals.css';

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Example',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
