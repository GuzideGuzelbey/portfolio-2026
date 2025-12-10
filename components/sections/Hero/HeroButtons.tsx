"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface HeroButtonsProps {
  onProjectsClick: () => void;
  onContactClick: () => void;
}

export function HeroButtons({ onProjectsClick, onContactClick }: HeroButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
      <Button
        size="lg"
        onClick={onProjectsClick}
        className="group relative overflow-hidden transition-bounce hover:scale-105"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Sparkles aria-hidden="true" />
          View My Work
        </span>
        <span
          className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />
      </Button>

      <Button
        size="lg"
        variant="outline"
        onClick={onContactClick}
        className="group border-2 transition-bounce hover:scale-105 hover:border-primary hover:bg-primary/5"
      >
        Let's Connect
      </Button>
    </div>
  );
}
