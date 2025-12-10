"use client";

import { skills } from '@/lib/data';
import { SkillCategory } from './SkillCategory';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

export function Skills() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const categories = {
    frontend: {
      title: t.skills.categories.frontend,
      color: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
    },
    backend: {
      title: t.skills.categories.backend,
      color: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
    },
    testing: {
      title: t.skills.categories.testing,
      color: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20',
    },
    tools: {
      title: t.skills.categories.tools,
      color: 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20',
    },
    design: {
      title: t.skills.categories.design,
      color: 'bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-500/20',
    },
  };

  return (
    <section 
      id="skills" 
      className="py-24"
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-semibold mb-4">
            {t.skills.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            A blend of design expertise and modern development skills
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {Object.entries(skills).map(([category, skillList]) => {
            const categoryInfo = categories[category as keyof typeof categories];
            
            return (
              <SkillCategory
                key={category}
                title={categoryInfo.title}
                skills={skillList}
                color={categoryInfo.color}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
