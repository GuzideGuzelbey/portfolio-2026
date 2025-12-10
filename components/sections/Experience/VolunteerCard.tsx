interface VolunteerCardProps {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export function VolunteerCard({ title, organization, period, description }: VolunteerCardProps) {
  return (
    <div className="bg-card border rounded-lg p-6">
      <h4 className="font-semibold text-lg mb-2">
        {title}
      </h4>
      <p className="text-primary font-medium mb-2">
        {organization}
      </p>
      <p className="text-sm text-muted-foreground mb-2">
        {period}
      </p>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
