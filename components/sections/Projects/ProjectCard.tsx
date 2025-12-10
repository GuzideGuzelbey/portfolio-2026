import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export function ProjectCard({ title, description, tech, github, live }: ProjectCardProps) {
  return (
    <Card className="flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="line-clamp-2">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {tech.map((techItem) => (
            <Badge key={techItem} variant="secondary" className="text-xs">
              {techItem}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        {github && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1"
          >
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
            >
              <Github aria-hidden="true" />
              Code
            </a>
          </Button>
        )}
        {live && (
          <Button
            variant="default"
            size="sm"
            asChild
            className="flex-1"
          >
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink aria-hidden="true" />
              Live
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
