"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const partnerLogos = [
  { name: "HIVED", src: "/logos/hived.png" },
  { name: "Yodel", src: "/logos/yodel.png" },
  { name: "DHL", src: "/logos/dhl.png" },
  { name: "Lime", src: "/logos/lime.png" },
  { name: "DPD", src: "/logos/dpd.png" },
  { name: "DX", src: "/logos/dx.png" },
  { name: "Parcel Force", src: "/logos/parcelforce.png" },
];

const testimonials = [
  {
    title: "Happy with my fixed route",
    text:
      "Best thing about working with FDL Parcel is having the same route every day. Customers know me and I know them. Of course there are small day-to-day problems, but my depot manager always helps. Recommend!",
  },
  {
    title: "Driving job that’s worth it",
    text:
      "I am a driver at the Southampton depot. Happy with the early wave time and 7-day operation because I can choose which 5 or 6 days to work. Our depot manager is a superstar. I had an issue with the van and he sorted it with the fleet team very quickly.",
  },
  {
    title: "Great team, more than just money",
    text:
      "From application to recruitment, documents, onboarding, and first day on the road — everything happened very fast. The team is great. After a few weeks learning my route, now I don’t feel like I work — I enjoy it.",
  },
  {
    title: "Clear onboarding, no confusion",
    text:
      "The document rules were simple and clear. I uploaded everything once and got approved quickly. No back-and-forth messages and no wasted time.",
  },
  {
    title: "Support actually replies",
    text:
      "Whenever I have a question, someone answers. Even when the depot is busy, they still come back to me and help. That matters in this job.",
  },
  {
    title: "Good start time in winter",
    text:
      "The early start makes a big difference in winter. You’re not finishing in the dark every day. The route size is manageable once you learn it.",
  },
  {
    title: "Van rental was simple",
    text:
      "I didn’t have my own van. They explained the rental clearly and it was ready when I started. Easy process and no stress at the beginning.",
  },
  {
    title: "Feels organised",
    text:
      "Compared to other delivery jobs I tried, this feels organised. You know what’s expected, you get the right info, and you can focus on delivering.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-xs">
      <span aria-hidden className="text-emerald-600">★★★★★</span>
      <span className="sr-only">5 star rating</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-10">
      {/* HERO IMAGE BANNER */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
        {/* Background image (put your image in /public/hero/hero.jpg) */}
        <div className="relative h-[320px] w-full md:h-[420px]">
  <Image
    src="/hero/hero-main.jpg"
    alt="FDL delivery operations"
    fill
    priority
    className="object-cover"
  />
</div>

        {/* Soft overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        {/* Content on top */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-6">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-2xl">
                <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                  Reliable last-mile logistics delivered through experienced teams and trusted driver partnerships.
                </h1>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/recruitment" className="btn btn-primary">
                    Work for us
                  </Link>

                  <Link href="/services" className="btn btn-secondary">
                    Our services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER LOGOS (ticker) */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="fdl-marquee fdl-mask-edges">
          {/* We duplicate the logos so the animation can loop smoothly */}
          <div className="fdl-marquee-track">
            {[...partnerLogos, ...partnerLogos].map((p, idx) => (
              <div
                key={`${p.name}-${idx}`}
                className="flex items-center justify-center"
                style={{ minWidth: 120 }}
              >
                {/* Put logo images in /public/logos/*.png */}
                <img
                  src={p.src}
                  alt={p.name}
                  className="h-8 w-auto opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAGLINE */}
      <section className="mx-auto max-w-6xl px-6">
        <p className="text-center text-base font-semibold text-black md:text-lg">
          FDL PARCEL NETWORK is a third-party logistics provider delivering fully managed last-mile solutions for major carriers.{" "}
          <br className="hidden md:block" />
          With in-house recruitment, onboarding, fleet management, and on-site operational leadership, we ensure reliable performance from day one across every location we serve.
        </p>
      </section>

                  {/* FEATURES — stacked full-width cards */}
      <section className="mx-auto max-w-4xl px-6">
        <div className="space-y-4">

          {/* Card 1 */}
          <div className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-6 transition-transform duration-200 hover:scale-[1.02]">
            <div className="h-34 w-34 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img
                src="/features/onboarding.jpg"
                alt="Fast Onboarding"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <div className="text-lg font-extrabold text-black">Driver Compliance & Onboarding</div>
              <p className="mt-1 text-slate-700">
                Structured compliance checks, document verification, and clear onboarding steps ensure every driver partner is approved quickly and ready to operate safely and to client standards from day one.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-6 transition-transform duration-200 hover:scale-[1.02]">
            <div className="h-34 w-34 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img
                src="/features/pipeline.jpg"
                alt="Driver pipeline"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <div className="text-lg font-extrabold text-black">Active Driver Pool</div>
              <p className="mt-1 text-slate-700">
                Our in-house recruitment teams maintain a pre-qualified driver pool across multiple UK regions, allowing us to respond quickly to new contracts, scale operations efficiently, and keep routes consistently covered.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-6 transition-transform duration-200 hover:scale-[1.02]">
            <div className="h-34 w-34 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img
                src="/features/support.jpg"
                alt="Depot support"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <div className="text-lg font-extrabold text-black">On-Site Operational Support</div>
              <p className="mt-1 text-slate-700">
                Experienced on-site managers oversee daily performance, driver coordination, and client communication—ensuring stable operations, strong service metrics, and smooth depot activity.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
<section className="mx-auto max-w-6xl px-6">
  <TestimonialsCarousel />
</section>

      {/* “STAY CONNECTED” */}
      <section className="mx-auto max-w-6xl px-6 pb-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
          <div className="text-sm font-semibold text-black">Stay connected</div>

          <div className="mt-5 flex items-center justify-center gap-4">
  {/* LinkedIn */}
  <a
    href="#"
    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition-transform duration-200 hover:scale-[1.06]"
    aria-label="LinkedIn"
  >
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.05c.53-1 1.84-2.2 3.79-2.2 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.17V24h-4V8Z"/>
    </svg>
  </a>

  {/* TikTok */}
  <a
    href="#"
    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition-transform duration-200 hover:scale-[1.06]"
    aria-label="TikTok"
  >
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M17.5 3c.6 2.6 2.4 4.2 5 4.4v3.4c-2 0-3.8-.6-5.3-1.7v7.2c0 4.1-3.3 7.4-7.4 7.4S2.4 20.4 2.4 16.3 5.7 8.9 9.8 8.9c.4 0 .8 0 1.2.1v3.8c-.4-.1-.8-.2-1.2-.2-2 0-3.7 1.7-3.7 3.7S7.8 20 9.8 20s3.7-1.6 3.7-3.7V3h4Z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a
    href="#"
    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition-transform duration-200 hover:scale-[1.06]"
    aria-label="Facebook"
  >
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.2-1.5 1.6-1.5h1.7V5c-.3 0-1.4-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.9V11H6.9v3h2.4v8h4.2Z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="#"
    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition-transform duration-200 hover:scale-[1.06]"
    aria-label="Instagram"
  >
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5ZM18 6.7a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"/>
    </svg>
  </a>
</div>

        </div>
      </section>
    </div>
  );
}
function TestimonialsCarousel() {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setStart((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const visible = [
    testimonials[start],
    testimonials[(start + 1) % testimonials.length],
    testimonials[(start + 2) % testimonials.length],
  ];

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        {visible.map((t) => (
          <div
            key={t.title}
            className="rounded-2xl border border-slate-200 bg-[#fff7e3] p-5 transition-transform duration-200 hover:scale-[1.02]"
          >
            <Stars />
            <div className="mt-2 font-semibold text-black">{t.title}</div>
            <p className="mt-2 text-sm text-slate-700">{t.text}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setStart(idx)}
            className={`h-2.5 w-2.5 rounded-full border border-slate-300 transition ${
              idx === start ? "bg-black" : "bg-white"
            }`}
            aria-label={`Show testimonials starting at ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
