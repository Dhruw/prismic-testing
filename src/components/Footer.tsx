import { createClient } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import config from '../../slicemachine.config.json';
import Logo from '@/components/Logo';
import Bounded from './Bounded';

async function Footer() {
  const client = createClient(config.repositoryName);

  const settings = await client.getSingle('settings');

  return (
    <Bounded as="footer">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-6">
        <Link href="/">
          <Logo />
        </Link>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {settings.data.site_title}
        </p>
        <ul className="flex">
          {settings.data.navigation.map(({ label, link }) => (
            <li key={label}>
              <PrismicNextLink field={link} />
            </li>
          ))}
        </ul>
      </div>
    </Bounded>
  );
}

export default Footer;
