// app/about/page.tsx
import Image from "next/image";

const IMAGES = {
  heroPerson: "/about/about-hero-person.png",
  story: "/about/about-story.jpg",
  contactBg: "/about/about-contact-bg.jpg",
  values: {
    drivers: "/about/value-drivers.png",
    support: "/about/value-support.png",
    reliability: "/about/value-reliability.png",
    smiles: "/about/value-smiles.png",
  },
};

const values = [
  {
    title: "Drivers First",
    text:
      "Every person in FDL PARCEL NETWORK started on the road. We build systems that support the driver, not stress them.",
    img: IMAGES.values.drivers,
    alt: "Drivers first icon",
  },
  {
    title: "Real Support, Real People",
    text:
      "When issues happen, you get calm, practical help. Recruitment, fleet, and depot teams work together, not in silos.",
    img: IMAGES.values.support,
    alt: "Support icon",
  },
  {
    title: "Reliable, Steady Operations",
    text:
      "Clear expectations, stable day-to-day processes, and strong on-site management keep the operation consistent.",
    img: IMAGES.values.reliability,
    alt: "Reliability icon",
  },
  {
    title: "Deliver Smiles",
    text:
      "The goal is simple: parcels delivered safely, customers happy, and drivers able to focus on the route without drama.",
    img: IMAGES.values.smiles,
    alt: "Deliver smiles icon",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-14">
      {/* =========================================================
          HERO (75/25 split) — About FDL PARCEL NETWORK
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 md:px-0">
        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          {/* Left (text) */}
          <div className="md:col-span-9">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
              <h1 className="text-3xl font-extrabold tracking-tight text-black md:text-5xl">
                About FDL PARCEL NETWORK
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
                FDL PARCEL NETWORK supports last-mile delivery operations across the UK through structured
                onboarding, strong local management, and a clear day-to-day operating model. Our experience
                is built from the ground up — every person in the company started as a delivery driver.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
                Drivers are the heart of the operation. Recruitment, fleet, and depot teams work together to
                remove friction, reduce confusion, and help every driver focus on what matters most: safe
                deliveries and happy customers.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
                Our aim is simple: deliver smiles — with calm support, clear expectations, and reliable performance.
              </p>
            </div>
          </div>

          {/* Right (person image) */}
          <div className="md:col-span-3">
            <div className="relative mx-auto h-[420px] w-full max-w-[320px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 md:h-[460px] md:max-w-none">
              <Image
                src={IMAGES.heroPerson}
                alt="FDL PARCEL NETWORK team member"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OPTIONAL STORY IMAGE (small wide accent)
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 md:px-0">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
          <div className="relative h-[360px] md:h-[520px]">
            <Image
              src={IMAGES.story}
              alt="Depot operations and team coordination"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="text-lg font-extrabold text-black">Built from the road</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              We know what a good route feels like — and what causes frustration. That is why we focus on stable
              processes and clear communication.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="text-lg font-extrabold text-black">Structured, not chaotic</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              We keep recruitment and onboarding organised, so drivers know what is required, what happens next,
              and who to speak to when needed.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="text-lg font-extrabold text-black">Performance with stability</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Reliable operations come from consistency. Our focus is steady delivery performance and dependable
              day-to-day support.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES (cards with image icons)
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 md:px-0">
        <div className="text-center">
          <div className="text-xs font-semibold tracking-widest text-slate-500">OUR ETHOS</div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black md:text-4xl">
            What We Stand For
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-700">
            We keep it simple. Support the driver, keep operations clear, and protect consistency.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 transition-transform duration-200 hover:scale-[1.02]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3">
                  <Image
                    src={v.img}
                    alt={v.alt}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>

                <div className="text-lg font-extrabold text-black">{v.title}</div>
              </div>

              <p className="text-sm leading-relaxed text-slate-700">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          VISION (short single section)
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 md:px-0">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <div className="text-xs font-semibold tracking-widest text-slate-500">VISION</div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black">
                Reliable Last-Mile Delivery, Done Properly
              </h2>
              <p className="mt-4 text-slate-700">
                We aim to be a trusted operational partner that helps delivery networks run smoothly, with stable teams,
                clear processes, and consistent support on the ground.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-lg font-extrabold text-black">What this means in practice</div>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li>• Clear expectations from the start</li>
                <li>• Fast, structured onboarding with correct compliance checks</li>
                <li>• On-site leadership that supports day-to-day performance</li>
                <li>• Consistent communication without noise or drama</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT FORM (visual only for now)
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 pb-12 md:px-0">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={IMAGES.contactBg}
              alt="Contact background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                Contact our team
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-white/85">
                Share a few details and we will come back to you shortly.
              </p>
            </div>

            <form className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none"
                />

                <input
                  type="text"
                  placeholder="Company"
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none"
                />
              </div>

              <textarea
                rows={6}
                placeholder="Your message..."
                className="mt-4 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none"
              />

              <div className="mt-6 text-center">
                <button type="button" className="btn btn-primary">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}