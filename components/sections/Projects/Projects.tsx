"use client";

import { projects, site } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { ProjectsFooter } from "./ProjectsFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function Projects() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  
  return (
    <section
      id="projects"
      className="flex items-center justify-center gap-0 bg-muted/30 py-24"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-semibold mb-4">
            {t.projects.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects showcasing my development journey
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <ProjectsFooter githubUrl={site.github} />
      </div>
    </section>
  );
}
