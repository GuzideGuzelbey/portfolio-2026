"use client";

import { ArrowDown } from "lucide-react";

interface HeroScrollIndicatorProps {
  onScrollClick: () => void;
}

export function HeroScrollIndicator({ onScrollClick }: HeroScrollIndicatorProps) {
  return (
    <div className="pt-12 animate-in fade-in duration-700 delay-500">
      <button
        onClick={onScrollClick}
        className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors mx-auto focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-2"
        aria-label="Scroll to about section"
      >
        <span className="text-sm font-medium">Discover More</span>
        <ArrowDown
          className="h-5 w-5 animate-bounce"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
