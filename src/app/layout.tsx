import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Rebel Cyclers — Ride Together. Explore Further.",
    template: "%s | Rebel Cyclers",
  },
  description:
    "A Kenyan cycling community for riders of every level — built on shared roads, honest effort, and the belief that every ride is better together.",
  keywords: ["cycling", "Kenya", "Nairobi", "cycling club", "gravel", "road cycling", "community rides"],
  authors: [{ name: "Rebel Cyclers" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Rebel Cyclers",
    title: "Rebel Cyclers — Ride Together. Explore Further.",
    description:
      "A Kenyan cycling community for riders of every level — built on shared roads, honest effort, and the belief that every ride is better together.",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebel Cyclers — Ride Together. Explore Further.",
    description:
      "A Kenyan cycling community for riders of every level — built on shared roads, honest effort, and the belief that every ride is better together.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#FF6B00] focus:text-white focus:rounded focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
