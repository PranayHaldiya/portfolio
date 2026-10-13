import Link from 'next/link';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Resume', href: '/resume' },
];

export default function Navbar() {
  return (
    <Container className="bg-background/70 sticky top-0 z-20 py-3 backdrop-blur-md">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-5 text-sm">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <ThemeToggleButton variant="circle" start="top-right" blur />
      </nav>
    </Container>
  );
}
