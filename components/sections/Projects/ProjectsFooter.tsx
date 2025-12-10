"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

interface ProjectsFooterProps {
  githubUrl: string;
}

export function ProjectsFooter({ githubUrl }: ProjectsFooterProps) {
  const { language } = useLanguage();
  const t = getTranslation(language);
  
  return (
    <div className="mt-16 text-center">
      <p className="text-muted-foreground mb-4">
        Want to see more? Check out my GitHub profile for additional projects.
      </p>
      <Button variant="outline" size="lg" asChild>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github aria-hidden="true" />
          {t.projects.allProjects}
        </a>
      </Button>
    </div>
  );
}
