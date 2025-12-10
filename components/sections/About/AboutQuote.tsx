export function AboutQuote() {
  return (
    <div className="mt-20 max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
      <blockquote className="relative">
        <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif" aria-hidden="true">"</div>
        <p className="text-2xl md:text-3xl font-light text-foreground/90 italic px-8">
          Design is not just what it looks like. Design is how it works—and how it makes people feel.
        </p>
        <div className="absolute -bottom-4 -right-4 text-6xl text-primary/20 font-serif" aria-hidden="true">"</div>
      </blockquote>
    </div>
  );
}
