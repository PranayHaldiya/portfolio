'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import ActivityCalendar from 'react-activity-calendar';

export type Activity = { date: string; count: number; level: number };

const theme = {
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  dark: ['#1f2328', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

export default function ContributionGraph({ data }: { data: Activity[] }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  // On narrow screens, start at the most recent weeks.
  useEffect(() => {
    setMounted(true);
    const el = scroller.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, []);

  return (
    <div ref={scroller} className="[scrollbar-width:thin] overflow-x-auto pb-1">
      <div className="w-max min-w-full" dir="ltr">
        <ActivityCalendar
          data={data}
          theme={theme}
          colorScheme={mounted && resolvedTheme === 'dark' ? 'dark' : 'light'}
          blockSize={9}
          blockMargin={3}
          fontSize={12}
          hideTotalCount
          hideColorLegend
        />
      </div>
    </div>
  );
}
