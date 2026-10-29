interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-[#FF6B00] text-xs font-semibold tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-white/60 text-base sm:text-lg leading-relaxed ${
            center ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
