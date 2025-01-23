import { createClient } from '@prismicio/client';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Nunito, Nunito_Sans } from 'next/font/google';
import './globals.css';
import config from '../../slicemachine.config.json';

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

  const page = await client.getSingle('settings');

  console.log(page);
  return {
    title: page.data.site_title,
    description: page.data.meta_description,
    openGraph: {
      images: [page.data.og_image.url || ''],
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
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
