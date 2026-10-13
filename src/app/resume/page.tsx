import type { Metadata } from 'next';

import Container from '@/components/common/Container';
import ArrowUpRight from '@/components/svgs/ArrowUpRight';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Resume',
  description: `Resume of ${site.name}, ${site.role.toLowerCase()} building AI agents.`,
  alternates: { canonical: '/resume' },
};

export default function ResumePage() {
  return (
    <Container className="pt-10 pb-6">
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
        <a
          href={site.resume}
          download="Pranay_Haldiya_Resume.pdf"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-0.5 text-sm"
        >
          Download PDF <ArrowUpRight className="size-3.5" />
        </a>
      </div>
      <object
        data={`${site.resume}#view=FitH`}
        type="application/pdf"
        className="mt-6 h-[80vh] w-full rounded-lg border"
        aria-label="Resume PDF"
      >
        <p className="text-muted-foreground p-6 text-sm">
          Your browser can’t show the PDF here.{' '}
          <a href={site.resume} className="underline underline-offset-2">
            Open it directly
          </a>
          .
        </p>
      </object>
    </Container>
  );
}
