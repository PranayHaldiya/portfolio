import { experience } from '@/config/site';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20">
      <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
      <div className="mt-4 divide-y">
        {experience.map((job) => (
          <details
            key={job.company}
            className="group py-4"
            open={job === experience[0]}
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
              <div className="min-w-0">
                <p className="flex flex-wrap items-center gap-2 font-medium">
                  {job.href ? (
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:underline-offset-4"
                    >
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                  {job.companyNote && (
                    <span className="rounded-md bg-orange-500/10 px-1.5 py-0.5 text-xs font-normal text-orange-600 dark:text-orange-400">
                      {job.companyNote}
                    </span>
                  )}
                </p>
                <p className="text-muted-foreground text-sm">{job.role}</p>
              </div>
              <div className="text-muted-foreground flex shrink-0 items-start gap-2 text-right text-sm">
                <div>
                  <p>
                    {job.start} – {job.end}
                  </p>
                  <p>{job.location}</p>
                </div>
                <svg
                  aria-hidden
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  className="mt-1 size-3.5 transition-transform group-open:rotate-180"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
              </div>
            </summary>
            <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="mt-3 flex flex-wrap gap-1.5">
              {job.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-muted text-muted-foreground rounded-md px-2 py-0.5 text-xs"
                >
                  {tech}
                </span>
              ))}
            </p>
          </details>
        ))}
      </div>
      <p className="text-muted-foreground mt-2 text-xs">
        Tap a role for details. B.Tech in Computer Science, Amity University
        Jaipur, 2021–2025.
      </p>
    </section>
  );
}
