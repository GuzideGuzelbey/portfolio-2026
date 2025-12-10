export function HeroBackground() {
  return (
    <>
      {/* Organic background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 organic-blob animate-float"
          style={{ animationDelay: "0s" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 -left-20 w-80 h-80 bg-accent/15 organic-blob-2 animate-breathe"
          style={{ animationDelay: "1s" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl"
          aria-hidden="true"
        />
      </div>

      {/* Decorative flowing line */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 text-muted/30"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z"
          fill="currentColor"
          className="animate-breathe"
        />
      </svg>
    </>
  );
}
