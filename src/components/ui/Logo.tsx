import Link from "next/link";

interface LogoProps {
  className?: string;
  iconSize?: number;
}

export default function Logo({ className = "", iconSize = 28 }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 group ${className}`}
      aria-label="Rebel Cyclers — Home"
    >
      {/* Bicycle icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Rear wheel */}
        <circle cx="7" cy="22" r="5.5" stroke="#FF6B00" strokeWidth="1.75" />
        {/* Rear wheel hub */}
        <circle cx="7" cy="22" r="1.2" fill="#FF6B00" />

        {/* Front wheel */}
        <circle cx="25" cy="22" r="5.5" stroke="white" strokeWidth="1.75" />
        {/* Front wheel hub */}
        <circle cx="25" cy="22" r="1.2" fill="white" />

        {/* Frame: seat stay (rear axle → seat tube top) */}
        <line x1="7" y1="22" x2="14" y2="10" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
        {/* Frame: top tube (seat → head tube) */}
        <line x1="14" y1="10" x2="21" y2="10" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
        {/* Frame: down tube (head tube → bottom bracket) */}
        <line x1="21" y1="10" x2="14" y2="22" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
        {/* Frame: chain stay (bottom bracket → rear axle) */}
        <line x1="14" y1="22" x2="7" y2="22" stroke="#FF6B00" strokeWidth="1.75" strokeLinecap="round" />
        {/* Fork (head tube → front axle) */}
        <line x1="21" y1="10" x2="25" y2="22" stroke="white" strokeWidth="1.75" strokeLinecap="round" />

        {/* Handlebar */}
        <line x1="19" y1="10" x2="23" y2="8" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
        {/* Saddle */}
        <line x1="12" y1="10" x2="16" y2="10" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" />

        {/* Chainring (bottom bracket) */}
        <circle cx="14" cy="22" r="2.5" stroke="#FF6B00" strokeWidth="1.5" />
      </svg>

      {/* Wordmark */}
      <span className="font-heading font-bold text-white text-base leading-none tracking-tight group-hover:text-white/90 transition-colors">
        Rebel<span className="text-[#FF6B00]">Cyclers</span>
      </span>
    </Link>
  );
}
