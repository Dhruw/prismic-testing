import { createClient } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import config from '../../slicemachine.config.json';

async function Footer() {
  const client = createClient(config.repositoryName);

  const settings = await client.getSingle('settings');

  return (
    <footer>
      <Link href="/">{settings.data.site_title}</Link>
      <div>
        &copy; {new Date().getFullYear()} {settings.data.site_title}
      </div>
      <ul>
        {settings.data.navigation.map(({ label, link }) => (
          <li key={label}>
            <PrismicNextLink field={link} />
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
