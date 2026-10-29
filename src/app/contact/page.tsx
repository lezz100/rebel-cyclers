import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rebel Cyclers — ask about joining, upcoming rides, or anything else. We'll get back to you.",
  openGraph: {
    title: "Contact | Rebel Cyclers",
    description:
      "Get in touch with Rebel Cyclers — ask about joining, upcoming rides, or anything else. We'll get back to you.",
    url: "/contact",
  },
  twitter: {
    title: "Contact | Rebel Cyclers",
    description: "Get in touch with Rebel Cyclers — ask about joining or upcoming rides.",
  },
};

const faqs = [
  {
    q: "Do I need to be experienced?",
    a: "Not at all. We have beginner-friendly rides every week. Just let us know your current level and we'll point you to the right ride.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="9" r="4" fill="white" />
        <path d="M8 22c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M20 5l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
        <path d="M22 9h-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />
      </svg>
    ),
  },
  {
    q: "Is there a membership fee?",
    a: "No. Show up to a ride and you're part of the crew. No paperwork, no fees.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="9" width="20" height="12" rx="2" stroke="white" strokeWidth="1.8" />
        <path d="M4 14h20" stroke="white" strokeWidth="1.5" />
        <circle cx="9" cy="18" r="1.5" fill="white" opacity="0.7" />
        <circle cx="14" cy="18" r="1.5" fill="white" opacity="0.7" />
      </svg>
    ),
  },
  {
    q: "What kind of bike do I need?",
    a: "It depends on the ride. Road bikes for road routes, hardtail or gravel bikes for mixed terrain. Check each ride's details.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="8" cy="18" r="5" stroke="white" strokeWidth="1.8" />
        <circle cx="20" cy="18" r="5" stroke="white" strokeWidth="1.8" />
        <path d="M8 18l6-8 6 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="10" r="1.5" fill="white" />
        <path d="M12 5h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's Talk."
        subtitle="Have a question, want to join, or enquire about a specific ride? Send us a message."
      />

      {/* FAQ strip */}
      <section className="py-16 sm:py-20 px-4 bg-[#161616]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-heading font-bold text-white uppercase text-center leading-[0.92] tracking-tight mb-12" style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}>
              Common Questions
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 0.1}>
                <div className="bg-[#0B0B0B] border border-white/8 rounded-lg p-8 flex flex-col h-full hover:border-white/15 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <h3 className="font-heading text-lg font-bold text-white leading-tight tracking-wide">{faq.q}</h3>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF6B00] flex items-center justify-center shadow-lg shadow-[#FF6B00]/20">
                      {faq.icon}
                    </div>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed flex-1">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-16 sm:py-24 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          <FadeIn direction="left" className="lg:col-span-2">
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#161616] border border-white/10 rounded-full px-4 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" aria-hidden="true" />
                  <span className="text-white/60 text-xs font-bold tracking-widest uppercase">How this works</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  When you click <strong className="text-white">Send Message</strong>, your email client will open with your message pre-filled. You can review it before it gets sent — nothing leaves your device until you hit Send.
                </p>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 bg-[#161616] border border-white/10 rounded-full px-4 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" aria-hidden="true" />
                  <span className="text-white/60 text-xs font-bold tracking-widest uppercase">Quick links</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "View upcoming rides", href: "/rides" },
                    { label: "About the club", href: "/about" },
                    { label: "Club achievements", href: "/achievements" },
                  ].map((link) => (
                    <a key={link.href} href={link.href} className="flex items-center gap-3 text-white/55 hover:text-white text-sm transition-colors group">
                      <span className="w-5 h-5 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#FF6B00]/50 transition-colors">
                        <svg width="8" height="8" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1} className="lg:col-span-3">
            <Suspense fallback={
              <div className="space-y-5 animate-pulse">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-12 bg-[#161616] rounded border border-white/5" />
                ))}
              </div>
            }>
              <ContactForm />
            </Suspense>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
