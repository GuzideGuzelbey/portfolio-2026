import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface ProjectsFooterProps {
  githubUrl: string;
}

export function ProjectsFooter({ githubUrl }: ProjectsFooterProps) {
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
          View All Projects
        </a>
      </Button>
    </div>
  );
}
