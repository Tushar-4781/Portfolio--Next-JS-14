import type { Metadata } from 'next';
import { Poppins, Quicksand } from 'next/font/google';
import './globals.scss';
import './customize.scss';

import Header from './_components/Header';

export const metadata: Metadata = {
  title: 'Tushar Inani - Portfolio',
  description:
    'Experienced Full Stack Developer specializing in web development, blockchain technology, and AI integration. Skilled in building RESTful APIs, developing pixel-perfect UIs, and deploying smart contracts. Explore my portfolio showcasing projects in DeFi, NLP, and decentralized applications. Contact me for software development opportunities and collaborations.',
};

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const quicksand_init = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
});

export default function RootLayout({
  children,
  hero,
  skills,
  experience,
  recommendations,
  products,
}: Readonly<{
  children: React.ReactNode;
  hero: React.ReactNode;
  skills: React.ReactNode;
  experience: React.ReactNode;
  recommendations: React.ReactNode;
  products: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        style={{ background: '#FFF7E6' }}
        className={`${poppins_init.variable} ${quicksand_init.variable}`}
      >
        <Header />
        {children}
        {hero}
        {skills}
        {experience}
        {recommendations}
        {products}
      </body>
    </html>
  );
}
