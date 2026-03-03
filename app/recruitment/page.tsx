// app/recruitment/page.tsx
import Image from "next/image";

const IMAGES = {
  // 4 benefit cards (2:1)
  benefitSteady: "/recruitment/benefit-steady.jpg",
  benefitFlexible: "/recruitment/benefit-flexible.jpg",
  benefitIndependent: "/recruitment/benefit-independent.jpg",
  benefitSupport: "/recruitment/benefit-support.jpg",

  // section backgrounds
  bgRoadmap: "/recruitment/bg-roadmap.jpg",
  bgAi: "/recruitment/bg-ai.jpg",

  // roadmap icons (256x256)
  step1: "/recruitment/step-1-info.png",
  step2: "/recruitment/step-2-documents.png",
  step3: "/recruitment/step-3-onboarding.png",
  step4: "/recruitment/step-4-startday.png",
  step5: "/recruitment/step-5-repeat.png",
};

const WHY_CARDS = [
  {
    title: "Regular income with steady routes",
    text:
      "Most roles run on consistent routes. That means predictable days, familiar areas, and a routine you can actually plan around.",
    image: IMAGES.benefitSteady,
  },
  {
    title: "Flexible working days",
    text:
      "Many depots operate 7 days. You can often choose a 5–6 day pattern that fits your life, while keeping steady earnings.",
    image: IMAGES.benefitFlexible,
  },
  {
    title: "No micromanagement",
    text:
      "Once you know your route, you work independently. Clear expectations, sensible targets, and no unnecessary noise.",
    image: IMAGES.benefitIndependent,
  },
  {
    title: "Real support from real people",
    text:
      "When something goes wrong, you speak to a person. We keep the process clear and help you get started properly.",
    image: IMAGES.benefitSupport,
  },
];

const ROADMAP = [
  {
    title: "Gathering information",
    desc:
      "Best decisions start with the right facts. Ask anything that crosses your mind.",
    icon: IMAGES.step1,
    youAreHere: true,
  },
  {
    title: "Required documents",
    desc:
      "Each role has specific document rules. Correct documents keep everything compliant and smooth.",
    icon: IMAGES.step2,
  },
  {
    title: "Onboarding",
    desc:
      "Once documents are correct, onboarding starts. Some roles can be 1 day, others up to 7 working days (e.g. DBS).",
    icon: IMAGES.step3,
  },
  {
    title: "Arrange start day",
    desc:
      "The depot manager contacts you to agree a start day and van collection (if required).",
    icon: IMAGES.step4,
  },
  {
    title: "Drive. Deliver. Repeat.",
    desc:
      "Settle into the route, build rhythm, and keep it consistent. That’s the job done properly.",
    icon: IMAGES.step5,
  },
];

const QUICK_LINKS = [
  {
    title: "Cognito application form",
    desc: "FDLAPPLICATION (secure upload)",
    href: "https://www.cognitoforms.com/FDLParcelNetworkLtd/FDLAPPLICATION",
    badge: "Cognito",
  },
  {
    title: "Message on WhatsApp",
    desc: "+44 7776 770606",
    href: "https://wa.me/message/RAMFPRIYAJARA1",
    badge: "WhatsApp",
  },
];

const FAQS = [
  {
    q: "Do I need my own van?",
    a:
      "Not always. Some roles include a van provided by the depot. Other roles may prefer owner-van drivers. Ask the assistant and we’ll match you to the right option.",
  },
  {
    q: "Is this employed or self-employed work?",
    a:
      "Most roles are self-employed driver partner roles. This means you manage your tax setup and work independently, with clear route expectations and local depot support.",
  },
  {
    q: "How long does onboarding take?",
    a:
      "If documents are correct, some roles can be ready in 1–2 days. If a DBS check is needed, it can take up to 7 working days (sometimes longer depending on the provider).",
  },
  {
    q: "What documents do I need?",
    a:
      "It depends on the depot and contract, but usually includes right to work, driving licence, and other compliance checks. The assistant will tell you exactly what’s required for your role.",
  },
  {
    q: "Can I choose my working days?",
    a:
      "Often yes. Many depots run 7 days and allow flexible patterns (usually 5–6 days). It depends on local needs, so ask and we’ll confirm what’s available.",
  },
  {
    q: "Will I get support if I have an issue on route?",
    a:
      "Yes. On-site teams and depot managers support day-to-day issues, and we keep communication clear so problems are handled quickly and properly.",
  },
];

function OverlayCard({
  imageSrc,
  title,
  text,
}: {
  imageSrc: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
      <div className="relative aspect-[2/1] w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 p-6 md:p-7">
          <div className="flex h-full flex-col justify-end">
            <div className="text-xl font-extrabold text-white md:text-2xl">
              {title}
            </div>
            <div className="mt-2 text-sm text-white/90 md:text-base">
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconCircle({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-15 w-15 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white p-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <div className="text-base font-semibold text-black">{q}</div>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition-transform duration-200 group-open:rotate-45">
          +
        </div>
      </summary>
      <p className="mt-3 text-sm text-slate-700 md:text-base">{a}</p>
    </details>
  );
}

export default function RecruitmentPage() {
  return (
    <div className="space-y-14">
      {/* =========================================================
          HERO (title + short description above 4 cards)
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 md:px-0">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10">
          {/* centered title + description */}
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-black md:text-5xl">
              JOIN OUR TEAM
            </h1>
            <p className="mt-4 text-base text-slate-700 md:text-lg">
              Join delivery networks supported by{" "}
              <span className="font-semibold text-black">FDL PARCEL NETWORK</span>.
              Clear expectations, steady operations, and real support — without the drama.
            </p>
          </div>

          {/* 4 cards: 2 top, 2 bottom, full width */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {WHY_CARDS.map((c) => (
              <OverlayCard
                key={c.title}
                imageSrc={c.image}
                title={c.title}
                text={c.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ROADMAP (straight line desktop, vertical mobile)
      ========================================================= */}
      <section className="relative -mx-6 overflow-hidden md:-mx-0 md:rounded-3xl">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.bgRoadmap}
            alt="Recruitment roadmap background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-12 md:px-0">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold tracking-wider text-slate-500">
              THE PROCESS
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-black md:text-4xl">
              A simple path from questions to your first route
            </h2>
            <p className="mt-4 text-base text-slate-700 md:text-lg">
              We keep recruitment clear and structured. Start with information, then move step-by-step.
            </p>
          </div>

          {/* Desktop: straight line with alternating text blocks */}
          <div className="mt-10 hidden md:block">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-8">
              <div className="absolute left-10 right-10 top-1/2 h-px -translate-y-1/2 bg-slate-200" />

              <div className="grid grid-cols-5 gap-4">
                {ROADMAP.map((s, idx) => {
                  const above = idx % 2 === 0; // 1,3,5 above; 2,4 below
                  return (
                    <div key={s.title} className="relative">
                      <div className="flex flex-col items-center">
                        <div className={["w-full text-center", above ? "mb-6" : "mt-6 order-3"].join(" ")}>
                          <div className="inline-flex items-center justify-center gap-2">
                            <div className="text-sm font-extrabold text-black">{s.title}</div>
                            {s.youAreHere ? (
                              <span className="rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold tracking-wide text-white">
                                YOU ARE HERE
                              </span>
                            ) : null}
                          </div>
                          <div className="mt-1 text-xs text-slate-700">{s.desc}</div>
                        </div>

                        <div className="relative z-10">
                          <IconCircle src={s.icon} alt={s.title} />
                        </div>

                        <div className="mt-3 text-xs font-semibold text-slate-500">
                          Step {idx + 1}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="mt-10 md:hidden">
            <div className="relative space-y-5">
              <div className="absolute left-6 top-2 bottom-2 w-px bg-slate-200" />
              {ROADMAP.map((s, idx) => (
                <div key={s.title} className="relative pl-16">
                  <div className="absolute left-0 top-0">
                    <IconCircle src={s.icon} alt={s.title} />
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-white p-5">
                    <div className="flex items-center gap-2">
                      <div className="text-xs font-semibold text-slate-500">
                        Step {idx + 1}
                      </div>
                      {s.youAreHere ? (
                        <span className="rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold tracking-wide text-white">
                          YOU ARE HERE
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-2 text-lg font-extrabold text-black">{s.title}</div>
                    <div className="mt-1 text-sm text-slate-700">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AI SECTION (center heading + full-width chat placeholder)
      ========================================================= */}
      <section className="relative -mx-6 overflow-hidden md:-mx-0 md:rounded-3xl">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.bgAi}
            alt="AI assistant background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-12 md:px-0">
          {/* center top text */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Ask our AI recruitment assistant
            </h2>
            <p className="mt-4 text-white/90">
              Any time, any place — get clear answers without waiting for office hours. The assistant shares our latest available job details and guides you through the first stage with calm, consistent information.
            </p>
            <p className="mt-3 text-white/90">
              No emotions. No confusion. Just the facts you need to make a good decision.
            </p>
          </div>

          {/* full-width chat area */}
          <div className="mt-8 rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-white">Recruitment Assistant</div>
                <div className="mt-1 text-sm text-white/80">
                  The live assistant widget will appear here. No login required.
                </div>
              </div>

              <div className="hidden md:block rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white">
                Live chat
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/15 bg-black/20 p-8">
              <div className="text-center text-sm text-white/80">
                Chat widget placeholder
              </div>
              <div className="mt-3 text-center text-xs text-white/60">
                (We’ll connect your custom GPT here later.)
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-white/85">
              <span className="font-semibold text-white">Suggested first message:</span>{" "}
              “Hi, I’m in <span className="underline">[your city/postcode]</span>. What roles are available and what documents do I need?”
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAST TRACK LINKS (above FAQ)
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 md:px-0">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold tracking-wider text-slate-500">
              FAST TRACK LINKS TO:
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-black md:text-4xl">
              Apply or message us directly
            </h2>
            <p className="mt-4 text-base text-slate-700 md:text-lg">
              If you are not aware of the work term and conditions we suggest to use the AI chat above, before you move forward.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {QUICK_LINKS.map((l) => (
              <a
                key={l.title}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-transform duration-200 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-extrabold text-black">
                      {l.title}
                    </div>
                    <div className="mt-1 text-sm text-slate-700">{l.desc}</div>
                  </div>

                  <span className="shrink-0 rounded-full bg-black px-3 py-1 text-[11px] font-semibold text-white">
                    {l.badge}
                  </span>
                </div>

                <div className="mt-4 text-sm font-semibold text-slate-900">
                  Click to open →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 md:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold tracking-wider text-slate-500">
            FAQ
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-black md:text-4xl">
            Common questions
          </h2>
          <p className="mt-4 text-base text-slate-700 md:text-lg">
            Quick answers to the things drivers ask most often.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {FAQS.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* =========================================================
          FINAL CTA (keep the existing last section)
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 pb-2 md:px-0">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 text-center md:p-10">
          <div className="text-2xl font-extrabold tracking-tight text-black md:text-3xl">
            Ready to get started?
          </div>
          <p className="mx-auto mt-3 max-w-3xl text-slate-700">
            Start with the assistant for clear answers, then use the Cognito form when you’re ready.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#ai" className="btn btn-primary">
              Ask the Assistant
            </a>
            <a
              href="https://www.cognitoforms.com/FDLParcelNetworkLtd/FDLAPPLICATION"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Open application form
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}