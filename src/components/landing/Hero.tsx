import Image from 'next/image';

import { bio, site, socials } from '@/config/site';

import CopyEmail from '../common/CopyEmail';
import { TechChip } from '../common/Tech';
import Github from '../svgs/Github';
import LinkedIn from '../svgs/LinkedIn';
import Mail from '../svgs/Mail';
import X from '../svgs/X';

const icons = {
  GitHub: Github,
  LinkedIn: LinkedIn,
  X: X,
  Email: Mail,
};

export default function Hero() {
  return (
    <section className="pt-10">
      <div className="flex items-center gap-5">
        <Image
          src={site.avatar}
          alt={site.name}
          width={160}
          height={160}
          priority
          className="size-20 rounded-full object-cover"
        />
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold tracking-tight">{site.name}</h1>
          <p className="text-muted-foreground mt-1 flex flex-wrap items-center gap-x-1.5 text-sm">
            <span>{site.role}</span>
            <span aria-hidden>·</span>
            <span>{site.focus}</span>
            <span aria-hidden>·</span>
            <CopyEmail email={site.email} />
          </p>
        </div>
      </div>

      <div className="mt-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
        {site.status} · {site.location} (IST)
      </div>

      <div className="text-muted-foreground mt-5 space-y-3 leading-relaxed">
        {bio.map((paragraph, i) => (
          <p key={i} className="leading-8">
            {paragraph.map((part, j) =>
              typeof part === 'string' ? (
                <span key={j}>{part}</span>
              ) : (
                <TechChip key={j} id={part.tech} label={part.label} />
              ),
            )}
          </p>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4">
        {socials.map((social) => {
          const Icon = icons[social.name];
          const external = !social.href.startsWith('mailto:');
          return (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              title={social.name}
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="text-muted-foreground hover:text-foreground size-5 transition-colors [&_svg]:size-5"
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </section>
  );
}
