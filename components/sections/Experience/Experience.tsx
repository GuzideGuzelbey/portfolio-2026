"use client";

import { experience } from '@/lib/data';
import { ExperienceCard } from './ExperienceCard';
import { VolunteerWork } from './VolunteerWork';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

export function Experience() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <section 
      id="experience" 
      className="py-24"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-semibold mb-4">
            {t.experience.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional journey from design education to software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div 
              className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border"
              aria-hidden="true"
            />

            <div className="space-y-12">
              {experience.map((exp) => (
                <ExperienceCard key={exp.id} {...exp} />
              ))}
            </div>
          </div>
        </div>

        {/* Volunteer work highlight */}
        <VolunteerWork />
      </div>
    </section>
  );
}
