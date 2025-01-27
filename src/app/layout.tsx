import { createClient } from '@prismicio/client';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Nunito, Nunito_Sans } from 'next/font/google';
import './globals.css';
import config from '../../slicemachine.config.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient(config.repositoryName);

  const settings = await client.getSingle('settings');

  return {
    title: settings.data.site_title,
    description: settings.data.meta_description,
    openGraph: {
      images: [settings.data.og_image.url || ''],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(nunito.variable, nunito_sans.variable)}>
        <Header />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <Footer />
        <div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0 opacity-50"></div>
      </body>
    </html>
  );
}
