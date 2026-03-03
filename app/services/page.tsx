// app/services/page.tsx
import Image from "next/image";
import Link from "next/link";

/**
 * ✅ IMAGE PLACEHOLDERS (swap anytime)
 * Put your images in /public/services/ and update paths here:
 */
const IMAGES = {
  hero: "/services/services-hero.jpg", // depot/dispatch scene
  approach: "/services/approach.jpg", // team coordination at depot
  deliverBanner: "/services/services-deliver.jpg", // multiple vans leaving depot
  trust: "/services/services-trust.jpg", // manager supervising drivers (no handshake)
  sustainability: "/services/sustainability.jpg", // EV charging / modern delivery
};

/**
 * ✅ ICON IMAGES (JPG) — put these inside: /public/services/
 * IMPORTANT:
 * These filenames MUST match your real files exactly (including hyphens).
 * If your names are different, rename your files to match these.
 */
const ICONS = {
  // Section 4 (4 icons)
  leadership: "/icons/capabilities/icon-leadership.jpg",
  onboarding: "/icons/capabilities/icon-onboarding.jpg",
  fleet: "/icons/capabilities/icon-fleet.jpg",
  depot: "/icons/capabilities/icon-depot.jpg",

  // Section 6 (6 icons)
  step1: "/icons/process/icon-step-1.jpg",
  step2: "/icons/process/icon-step-2.jpg",
  step3: "/icons/process/icon-step-3.jpg",
  step4: "/icons/process/icon-step-4.jpg",
  step5: "/icons/process/icon-step-5.jpg",
  step6: "/icons/process/icon-step-6.jpg",
};

/**
 * Image icon box (replaces emoji icons)
 */
function IconImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <Image src={src} alt={alt} width={44} height={44} className="object-cover" />
    </div>
  );
}

const capabilities = [
  {
    title: "Experienced Operational Leadership",
    text:
      "Our management teams have worked across major logistics networks since 2011, bringing practical knowledge gained from supporting some of the industry’s leading carriers. This experience allows fast adaptation to operational standards and smooth integration into existing delivery frameworks.",
    icon: ICONS.leadership,
  },
  {
    title: "Integrated Recruitment & Driver Onboarding",
    text:
      "Our in-house recruitment and onboarding teams maintain a continuous pipeline of pre-qualified driver partners across multiple UK regions. Because these functions operate internally, we respond quickly to operational demand while maintaining compliance and quality standards.",
    icon: ICONS.onboarding,
  },
  {
    title: "Fleet Coordination & Continuity",
    text:
      "Fleet coordination is managed alongside recruitment and operations, ensuring vehicles, drivers, and routes remain aligned. This integrated model minimises disruption and allows issues to be resolved quickly without impacting service performance.",
    icon: ICONS.fleet,
  },
  {
    title: "On-Site Depot Management",
    text:
      "Dedicated on-site managers oversee daily activities, driver coordination, and operational communication. Local leadership ensures performance targets are maintained while supporting efficient day-to-day depot operations.",
    icon: ICONS.depot,
  },
];

const steps = [
  { title: "Operational Review", desc: "Understanding client requirements", icon: ICONS.step1 },
  { title: "Deployment Planning", desc: "Aligning resources and structure", icon: ICONS.step2 },
  { title: "Driver Allocation", desc: "Approved drivers assigned", icon: ICONS.step3 },
  { title: "On-Site Launch", desc: "Operations begin locally", icon: ICONS.step4 },
  { title: "Performance Monitoring", desc: "Daily KPI tracking", icon: ICONS.step5 },
  { title: "Continuous Improvement", desc: "Ongoing optimisation", icon: ICONS.step6 },
];

export default function ServicesPage() {
  return (
    <div className="space-y-14">
      {/* =========================================================
          SECTION 1 — HERO (Full width)
      ========================================================= */}
      <section className="relative -mx-6 overflow-hidden rounded-3xl border border-slate-200 md:-mx-0">
        <div className="relative h-[360px] w-full md:h-[460px]">
          <Image
            src={IMAGES.hero}
            alt="FDL PARCEL NETWORK depot and dispatch operations"
            fill
            priority
            className="object-cover"
          />
          {/* dark overlay 40–50% */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-6">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                  A Complete Last-Mile Delivery Partner for Modern Logistics
                </h1>

                <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
                  FDL PARCEL NETWORK provides fully managed last-mile delivery solutions for major carriers across the UK.
                  We combine experienced operational leadership, in-house recruitment and onboarding, fleet coordination,
                  and on-site management to deliver reliable performance aligned with each partner’s systems, procedures,
                  and operational goals.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="mailto:sev@fdlparcel.co.uk" className="btn btn-primary">
                    Contact Our Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2 — OUR APPROACH (Two columns)
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 md:px-0">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-black">
              One Partner. One Integrated Solution.
            </h2>

            <p className="text-slate-700">
              At FDL PARCEL NETWORK, last-mile delivery is not divided into separate services.
              We provide a complete operational solution where recruitment, onboarding, fleet coordination,
              and depot management work together as one integrated system.
            </p>

            <p className="text-slate-700">
              Having supported multiple major carriers across the sector, our management teams bring over a decade of
              hands-on logistics experience. This broad industry background allows us to understand operational challenges
              from every angle and adapt quickly to new environments.
            </p>

            <p className="text-slate-700">
              Our structured approach enables rapid alignment with client procedures and systems, reducing onboarding time
              and accelerating the path to strong delivery performance.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3">
            <div className="relative h-[260px] overflow-hidden rounded-2xl md:h-[340px]">
              <Image src={IMAGES.approach} alt="Team coordination at depot" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3 — WHAT WE DELIVER (Full width)
      ========================================================= */}
      <section className="-mx-6 bg-slate-50 py-12 md:-mx-0 md:rounded-3xl">
        <div className="mx-auto max-w-6xl px-6">
          {/* Optional banner image */}
          <div className="mb-8 overflow-hidden rounded-3xl border border-slate-200">
            <div className="relative h-[200px] md:h-[280px]">
              <Image src={IMAGES.deliverBanner} alt="Dispatch wave leaving the depot" fill className="object-cover" />
            </div>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-black">
            End-to-End Last-Mile Operations
          </h2>

          <p className="mt-4 max-w-3xl text-slate-700">
            We manage the final stage of delivery operations on behalf of our partners, ensuring parcels reach customers
            efficiently, safely, and consistently.
          </p>

          <p className="mt-4 max-w-3xl text-slate-700">
            From day one, FDL PARCEL NETWORK deploys experienced teams supported by established internal processes.
            Our integrated structure allows us to scale operations responsibly while maintaining service quality and
            operational stability.
          </p>

          <p className="mt-4 max-w-3xl text-slate-700">
            We operate using both fuel and fully electric vehicle fleets, supporting modern logistics requirements and
            sustainability objectives.
          </p>
        </div>
      </section>

      {/* =========================================================
          SECTION 4 — OPERATIONAL CAPABILITIES (4 cards)
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 md:px-0">
        <h2 className="text-3xl font-extrabold tracking-tight text-black">
          Operational Capabilities
        </h2>

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 transition-transform duration-200 hover:scale-[1.02]"
            >
              <div className="mb-4">
                <IconImage src={c.icon} alt={c.title} />
              </div>

              <div className="text-lg font-extrabold text-black">{c.title}</div>
              <p className="mt-2 text-sm text-slate-700">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SECTION 5 — WHY PARTNERS CHOOSE US (Two columns)
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 md:px-0">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Image left */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3">
            <div className="relative h-[260px] overflow-hidden rounded-2xl md:h-[340px]">
              <Image src={IMAGES.trust} alt="On-site depot supervision" fill className="object-cover" />
            </div>
          </div>

          {/* Text right */}
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-black">
              Built for Reliability and Adaptability
            </h2>

            <p className="text-slate-700">
              Working with multiple logistics partners over the years has given FDL PARCEL NETWORK a deep understanding
              of the realities of last-mile delivery.
            </p>

            <p className="text-slate-700">
              Our teams have experienced the operational challenges, pressures, and performance expectations faced across
              the industry. This knowledge allows us to adapt quickly, align with partner systems, and deliver consistent
              results without lengthy transition periods.
            </p>

            <p className="text-slate-700">
              Because recruitment, onboarding, fleet coordination, and operations function as one well-structured system,
              we are able to meet demand efficiently while maintaining stability for both clients and driver partners.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6 — HOW WE WORK (Timeline)
      ========================================================= */}
      <section className="-mx-6 bg-white py-4 md:-mx-0">
        <div className="mx-auto max-w-6xl px-6 md:px-0">
          <h2 className="text-3xl font-extrabold tracking-tight text-black">
            A Structured Path to Operational Success
          </h2>

          {/* Desktop / Tablet: clean 2-row flow that suggests progression */}
          <div className="mt-8 hidden md:block">
            <div className="grid gap-5 md:grid-cols-3">
              {steps.slice(0, 3).map((s, i) => (
                <div key={s.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center gap-3">
                    <IconImage src={s.icon} alt={s.title} />
                    <div className="text-sm font-semibold text-slate-500">Step {i + 1}</div>
                  </div>
                  <div className="mt-3 text-lg font-extrabold text-black">{s.title}</div>
                  <div className="mt-1 text-sm text-slate-700">{s.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {steps.slice(3, 6).map((s, i) => (
                <div key={s.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center gap-3">
                    <IconImage src={s.icon} alt={s.title} />
                    <div className="text-sm font-semibold text-slate-500">Step {i + 4}</div>
                  </div>
                  <div className="mt-3 text-lg font-extrabold text-black">{s.title}</div>
                  <div className="mt-1 text-sm text-slate-700">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="mt-8 md:hidden">
            <div className="relative space-y-5">
              <div className="absolute left-5 top-2 bottom-2 w-px bg-slate-200" />
              {steps.map((s, idx) => (
                <div key={s.title} className="relative pl-14">
                  <div className="absolute left-0 top-0">
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white">
                      <Image src={s.icon} alt={s.title} width={40} height={40} className="object-cover" />
                    </div>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="text-xs font-semibold text-slate-500">Step {idx + 1}</div>
                    <div className="mt-1 text-lg font-extrabold text-black">{s.title}</div>
                    <div className="mt-1 text-sm text-slate-700">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7 — SUSTAINABILITY & MODERN FLEETS (Full width)
      ========================================================= */}
      <section className="relative -mx-6 overflow-hidden rounded-3xl border border-slate-200 md:-mx-0">
        <div className="relative h-[320px] w-full md:h-[380px]">
          <Image src={IMAGES.sustainability} alt="Electric fleet and sustainable delivery" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Supporting Responsible Delivery
              </h2>
              <p className="mt-4 text-white/90">
                FDL PARCEL NETWORK operates with both traditional fuel vehicles and fully electric fleets,
                supporting partners working towards reduced emissions and sustainable delivery models.
              </p>
              <p className="mt-3 text-white/90">
                We continuously adapt operations to meet evolving industry standards while maintaining efficiency and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 8 — FINAL CTA (Simple centred)
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 pb-2 md:px-0">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-black">
            Looking for a Reliable Last-Mile Partner?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-700">
            FDL PARCEL NETWORK works alongside leading carriers to deliver stable, scalable, and performance-driven last-mile operations.
            Speak with our team to discuss your operational requirements and explore how we can support your network.
          </p>

          <div className="mt-6 flex justify-center">
            <a href="mailto:sev@fdlparcel.co.uk" className="btn btn-primary">
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}