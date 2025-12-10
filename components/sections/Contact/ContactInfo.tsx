"use client";

import { site } from '@/lib/data';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

export function ContactInfo() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <div className="space-y-8 flex flex-col">
      <div>
        <h3 className="text-2xl font-bold mb-6">{t.contact.title}</h3>
        <div className="space-y-4">
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </div>
            <span>{site.email}</span>
          </a>

          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </div>
            <span>{t.contact.info.linkedin}</span>
          </a>

          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Github className="h-5 w-5" aria-hidden="true" />
            </div>
            <span>{t.contact.info.github}</span>
          </a>

          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </div>
            <span>{site.location}</span>
          </div>
        </div>
      </div>

      <div className="bg-card border rounded-lg p-6">
        <h4 className="font-semibold mb-3 text-primary">
          Currently Available For
        </h4>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li>Full-time positions</li>
          <li>Freelance projects</li>
          <li>Collaboration opportunities</li>
        </ul>
      </div>
    </div>
  );
}
