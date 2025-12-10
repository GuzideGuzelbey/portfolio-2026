import { Calendar, MapPin } from 'lucide-react';

interface ExperienceCardProps {
  id: string;
  company: string;
  role: string;
  description: string;
  period: string;
  location: string;
}

export function ExperienceCard({ company, role, description, period, location }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 md:pl-20">
      {/* Timeline dot */}
      <div 
        className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"
        aria-hidden="true"
      />

      <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold">
              {role}
            </h3>
            <p className="text-lg text-primary font-medium">
              {company}
            </p>
          </div>
          
          <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
            <div className="flex items-center gap-1 md:justify-end">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>{period}</span>
            </div>
            <div className="flex items-center gap-1 md:justify-end">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
