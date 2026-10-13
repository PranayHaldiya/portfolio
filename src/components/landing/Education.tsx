import { education } from '@/config/site';

import { Logo } from './Experience';

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20">
      <h2 className="text-xl font-semibold tracking-tight">Education</h2>
      <div className="mt-4 space-y-4">
        {education.map((item) => (
          <div
            key={item.school}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex min-w-0 items-center gap-3">
              <Logo src={item.logo} alt={item.school} />
              <div className="min-w-0">
                <p className="font-medium">{item.school}</p>
                <p className="text-muted-foreground text-sm">{item.detail}</p>
              </div>
            </div>
            <p className="text-muted-foreground shrink-0 text-sm">
              {item.start} – {item.end}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
