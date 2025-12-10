"use client";

import { VolunteerCard } from './VolunteerCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

const volunteerData = [
  {
    title: 'Volunteer Web Development Mentor',
    organization: 'HackYourFuture Denmark',
    period: 'Oct 2025 - Present',
    description: 'Leading sessions, assisting trainees, and conducting code reviews - giving back to the community that helped me transition to tech.',
  },
  {
    title: 'Volunteer Digital Literacy Instructor',
    organization: 'ReDI School of Digital Integration',
    period: 'Sep 2024 - Dec 2024',
    description: 'Taught digital literacy to immigrant and refugee women in Danish, creating inclusive and supportive learning environments.',
  },
];

export function VolunteerWork() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <div className="mt-20 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-8">
        {t.experience.volunteer.title}
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {volunteerData.map((volunteer, index) => (
          <VolunteerCard key={index} {...volunteer} />
        ))}
      </div>
    </div>
  );
}
