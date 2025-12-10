"use client";

import { site } from '@/lib/data';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left" suppressHydrationWarning>
            © {currentYear} {site.name}. {t.footer.rights}
          </p>
          
          <p className="text-sm text-muted-foreground">
            {t.footer.builtWith} Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
