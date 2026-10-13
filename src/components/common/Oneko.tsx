import Script from 'next/script';

// oneko.js (MIT, github.com/adryd325/oneko.js): a pixel pet that chases the
// cursor. The dog sprite is from kyrie25/spicetify-oneko (MIT). It skips
// itself on touch screens and with reduced motion.
export default function Oneko() {
  return (
    <Script
      src="/oneko/oneko.js"
      data-cat="/oneko/oneko-dog.gif"
      strategy="lazyOnload"
    />
  );
}
