import CookieBanner from "@/components/CookieBanner";
import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FDL Parcel Network",
  description: "Last-mile delivery operations, built and stabilised fast.",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 hover:text-slate-950 transition"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}>
        {/* Top Nav */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-sm font-semibold tracking-tight text-slate-950">
              FDL Parcel Network
            </Link>

            <nav className="flex items-center gap-2">
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/recruitment">Recruitment</NavLink>
              <NavLink href="/about">About</NavLink>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>

        {/* Footer */}
<footer className="border-t border-white/20 footer-gradient footer-glow text-white">
  <div className="mx-auto max-w-6xl px-6 py-8">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      
      {/* LEFT */}
      <div className="text-sm font-semibold text-white">
        © {new Date().getFullYear()} 
        <span className="font-extrabold text-white">
          {" "}FDL PARCEL NETWORK
        </span>
      </div>

      {/* RIGHT LINKS */}
      <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-white">
        <a href="/privacy" className="hover:opacity-80 transition">
          Privacy Policy
        </a>
        <a href="/cookies" className="hover:opacity-80 transition">
          Cookies Policy
        </a>
      </div>
    </div>

    {/* SIGNATURE */}
    <div className="mt-4 text-xs font-semibold text-white">
      Built by <span className="font-extrabold">Sev</span> — first website in my portfolio.
    </div>
  </div>
</footer>
<CookieBanner />
      </body>
    </html>
  );
}