interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  className = "",
}: PageHeroProps) {
  return (
    <div className={`py-20 sm:py-28 px-4 bg-[#0B0B0B] border-b border-white/5 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 bg-[#161616] border border-white/10 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] flex-shrink-0" aria-hidden="true" />
            <span className="text-white/70 text-xs font-bold tracking-widest uppercase">{eyebrow}</span>
          </div>
        )}
        <h1
          className="font-heading font-bold text-white leading-[0.92] tracking-tight max-w-3xl"
          style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-white/55 text-base sm:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
