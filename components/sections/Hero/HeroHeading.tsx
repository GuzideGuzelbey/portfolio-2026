export function HeroHeading() {
  return (
    <div className="space-y-2">
      <h1
        id="hero-heading"
        className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 leading-tight"
      >
        <span className="text-foreground flex flex-col gap-2 md:gap-3">
          <span className="font-normal">Güzide</span>
          <span className="font-bold">Güzelbey Esengün</span>
        </span>
      </h1>

      <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
        Full-Stack Developer & Designer
      </p>
    </div>
  );
}
