import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#161616] border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-heading font-bold text-white text-lg mb-2">
              <span className="text-[#FF6B00]">✕</span> Rebel Cyclers
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Ride together. Explore further.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {[
                ["About", "/about"],
                ["Rides & Tours", "/rides"],
                ["Members", "/members"],
                ["Achievements", "/achievements"],
                ["Gallery", "/gallery"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
              Get Involved
            </h3>
            <p className="text-white/50 text-sm mb-4">
              New to cycling or looking to push further? We ride for all levels.
            </p>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 bg-[#FF6B00] text-white text-sm font-semibold rounded hover:bg-[#e55f00] transition-colors"
            >
              Join the Club
            </Link>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 text-center text-white/30 text-xs">
          © 2026 Rebel Cyclers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
