import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface PassionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  index: number;
}

export function PassionCard({ icon: Icon, title, description, color, bgColor, index }: PassionCardProps) {
  return (
    <Card
      className="p-6 border-2 animate-in fade-in slide-in-from-right-8"
      style={{ 
        animationDelay: `${(index + 2) * 100}ms`,
      }}
    >
      <div className="space-y-4">
        <div className={`w-12 h-12 rounded-2xl ${bgColor} flex items-center justify-center`}>
          <Icon className={`h-6 w-6 ${color}`} aria-hidden="true" />
        </div>
        
        <h3 className="text-xl font-semibold">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
}
