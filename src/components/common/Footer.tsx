import { site } from '@/config/site';

import Container from './Container';

export default function Footer() {
  return (
    <Container className="py-10">
      <footer className="text-muted-foreground flex flex-col gap-1 border-t pt-6 text-xs sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          Design based on{' '}
          <a
            href="https://github.com/ramxcodes/sleek-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground underline underline-offset-2"
          >
            sleek-portfolio
          </a>{' '}
          by ramxcodes.
        </p>
      </footer>
    </Container>
  );
}
