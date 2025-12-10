import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  color: string;
}

export function SkillCategory({ title, skills, color }: SkillCategoryProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        <span className={`h-3 w-3 rounded-full ${color.split(' ')[0].replace('/10', '')}`} aria-hidden="true" />
        {title}
      </h3>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className={`${color} px-4 py-2 text-sm font-medium transition-all hover:scale-105`}
          >
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
