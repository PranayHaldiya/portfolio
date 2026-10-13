import { site } from '@/config/site';

import ArrowUpRight from '../svgs/ArrowUpRight';
import ContributionGraph, { type Activity } from './ContributionGraph';

type ContributionsResponse = {
  total: Record<string, number>;
  contributions: Activity[];
};

// Public, cached once a day. If it fails, the section is skipped.
async function getContributions(): Promise<{
  total: number;
  days: Activity[];
} | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${site.githubUsername}?y=last`,
      { next: { revalidate: 60 * 60 * 24 } },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as ContributionsResponse;
    if (!Array.isArray(data.contributions) || data.contributions.length === 0)
      return null;
    return { total: data.total.lastYear ?? 0, days: data.contributions };
  } catch {
    return null;
  }
}

export default async function Github() {
  const data = await getContributions();
  if (!data) return null;

  return (
    <section id="github">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight">GitHub</h2>
        <a
          href={`https://github.com/${site.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-0.5 text-sm"
        >
          @{site.githubUsername} <ArrowUpRight className="size-3.5" />
        </a>
      </div>
      <p className="text-muted-foreground mt-1 text-sm">
        {data.total} contributions in the last year, most of them in private
        work repos.
      </p>
      <div className="mt-4">
        <ContributionGraph data={data.days} />
      </div>
    </section>
  );
}
