"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "da" : "en";
    setLanguage(newLanguage);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        disabled
        aria-label="Switch language"
        className={className}
      >
        <Languages className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      aria-label={language === "en" ? "Switch to Danish" : "Switch to English"}
      className={className}
      title={language === "en" ? "DA" : "EN"}
    >
      <Languages className="h-5 w-5" aria-hidden="true" />
      <span className="sr-only">
        {language === "en" ? "Switch to Danish" : "Switch to English"}
      </span>
    </Button>
  );
}
