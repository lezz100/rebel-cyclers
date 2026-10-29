import Link from "next/link";

export default function JoinSection() {
  return (
    <section className="py-24 sm:py-32 px-4 bg-[#161616]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#FF6B00] text-xs font-semibold tracking-widest uppercase mb-4">
          Get Started
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Ready to ride with us?
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Whether you&apos;re brand new to cycling or a seasoned rider looking
          for a crew — we have a ride for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#FF6B00] text-white font-semibold rounded hover:bg-[#e55f00] transition-colors"
          >
            Join the Club
          </Link>
          <Link
            href="/rides"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 text-white font-semibold rounded hover:border-white/50 hover:bg-white/5 transition-colors"
          >
            See Upcoming Rides
          </Link>
        </div>
      </div>
    </section>
  );
}
