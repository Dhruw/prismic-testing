import { createClient } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import config from '../../slicemachine.config.json';

async function Header() {
  const client = createClient(config.repositoryName);

  const settings = await client.getSingle('settings');

  return (
    <header>
      <Link href="/">{settings.data.site_title}</Link>
      <nav>
        <ul>
          {settings.data.navigation.map(({ label, link }) => (
            <li key={label}>
              <PrismicNextLink field={link} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
