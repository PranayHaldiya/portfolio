import { projects, site } from '@/config/site';

import ArrowUpRight from '../svgs/ArrowUpRight';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
      <div className="mt-4 divide-y">
        {projects.map((project) => (
          <article key={project.name} className="py-4">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-medium">
                <a
                  href={project.live ?? project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:underline-offset-4"
                >
                  {project.name}
                </a>
              </h3>
              <div className="text-muted-foreground flex shrink-0 items-center gap-3 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground inline-flex items-center gap-0.5"
                >
                  Code <ArrowUpRight className="size-3.5" />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground inline-flex items-center gap-0.5"
                  >
                    Live <ArrowUpRight className="size-3.5" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
              {project.description}
            </p>
            <p className="text-muted-foreground/80 mt-2 text-xs">
              {project.tags.join(' · ')}
            </p>
          </article>
        ))}
      </div>
      <a
        href={`https://github.com/${site.githubUsername}?tab=repositories`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground mt-2 inline-flex items-center gap-0.5 text-sm"
      >
        More on GitHub <ArrowUpRight className="size-3.5" />
      </a>
    </section>
  );
}
