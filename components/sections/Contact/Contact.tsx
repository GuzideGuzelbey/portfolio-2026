"use client";

import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

export function Contact() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <section 
      id="contact" 
      className="py-24 bg-muted/30"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-semibold mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.contact.description}
          </p>
        </div>

        <div className="mx-auto mb-auto mt-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-end">
          {/* Contact Info */}
          <ContactInfo />

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
