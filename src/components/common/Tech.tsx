import { type Tech, type TechKey, tech } from '@/config/tech';
import { cn } from '@/lib/utils';

// Near-black brand colors would vanish in dark mode, so draw those in the
// text color instead.
function brandFill(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.06 ? 'currentColor' : `#${hex}`;
}

export function TechGlyph({
  id,
  className,
}: {
  id: TechKey;
  className?: string;
}) {
  const item: Tech = tech[id];
  if (item.icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className={cn('size-4 shrink-0', className)}
        fill={brandFill(item.icon.hex)}
      >
        <path d={item.icon.path} />
      </svg>
    );
  }
  if (item.custom) {
    return (
      <span className={cn('size-4 shrink-0 [&_svg]:size-full', className)}>
        {item.custom}
      </span>
    );
  }
  return (
    <span
      aria-hidden
      className={cn(
        'bg-foreground text-background flex size-4 shrink-0 items-center justify-center rounded-[4px] text-[9px] font-bold',
        className,
      )}
    >
      {item.name.slice(0, 1)}
    </span>
  );
}

// Square tile with a hover label, for the experience rows.
export function TechTile({ id }: { id: TechKey }) {
  const { name } = tech[id];
  return (
    <span
      tabIndex={0}
      aria-label={name}
      className="group/tile bg-muted/40 relative flex size-8 items-center justify-center rounded-md border outline-none"
    >
      <TechGlyph id={id} />
      <span
        role="tooltip"
        className="bg-foreground text-background pointer-events-none absolute -top-8 left-1/2 z-10 hidden -translate-x-1/2 rounded px-2 py-0.5 text-xs whitespace-nowrap group-hover/tile:block group-focus/tile:block"
      >
        {name}
      </span>
    </span>
  );
}

// Icon plus name, for running text and the stack list.
export function TechChip({ id, label }: { id: TechKey; label?: string }) {
  return (
    <span className="bg-muted/50 text-foreground inline-flex items-center gap-1.5 rounded-md border px-1.5 py-0.5 align-middle text-sm leading-tight">
      <TechGlyph id={id} className="size-3.5" />
      {label ?? tech[id].name}
    </span>
  );
}
