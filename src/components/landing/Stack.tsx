import { stack } from '@/config/site';

import { TechChip } from '../common/Tech';

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-20">
      <h2 className="text-xl font-semibold tracking-tight">Stack</h2>
      <dl className="mt-4 space-y-4">
        {stack.map(({ group, items }) => (
          <div key={group} className="sm:flex sm:gap-4">
            <dt className="text-muted-foreground w-28 shrink-0 pt-0.5 text-sm">
              {group}
            </dt>
            <dd className="mt-1.5 flex flex-wrap gap-1.5 sm:mt-0">
              {items.map((id) => (
                <TechChip key={id} id={id} />
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
