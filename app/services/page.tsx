import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold leading-tight text-black">
            Last-mile delivery operations, built and stabilised fast.
          </h1>

          <p className="text-slate-700">
            FDL Parcel Network supports delivery partners across the UK.
            When a carrier (e.g. DPD, Parcel Force) needs coverage in specific
            locations, we build the driver operation, onboard the team, and keep
            performance stable — using in-house recruitment, fleet support and
            day-to-day driver management.
          </p>

          {/* FIXED BUTTONS */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/recruitment" className="btn btn-primary">
              Work with us (drivers)
            </Link>

            <Link href="/about" className="btn btn-secondary">
              About FDL
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-semibold text-black">What we deliver</h2>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-800">
            <li>Fast mobilisation for new routes / new depots</li>
            <li>Reliable driver pipeline (continuous recruitment)</li>
            <li>Onboarding and compliance checks (right documents, ready to start)</li>
            <li>Fleet readiness support (van availability planning)</li>
            <li>Driver support and performance stability after go-live</li>
          </ul>
        </div>
      </section>

      {/* In-house model */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-black">Why “all in-house” matters</h2>

        <p className="text-slate-700">
          We don’t rely on multiple external agencies. Our in-house departments
          reduce delays, improve communication, and remove “blame shifting”.
          If we agree to deliver coverage — we deliver it.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold text-black">Recruitment</h3>
            <p className="mt-2 text-sm text-slate-700">
              Consistent sourcing, screening and pipeline management for each location.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold text-black">Onboarding & Compliance</h3>
            <p className="mt-2 text-sm text-slate-700">
              Document collection, checks and readiness tracking so drivers can start.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold text-black">Operations Support</h3>
            <p className="mt-2 text-sm text-slate-700">
              Day-to-day driver comms, support, and stability to meet partner standards.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-bold text-black">Need coverage in a location?</h2>

        <p className="mt-2 text-slate-700">
          If you are a carrier or delivery partner looking for a reliable operating
          partner, we can adapt quickly and mobilise.
        </p>

        <p className="mt-3 text-sm text-slate-600">
          (Next step) We’ll add a simple business enquiry form here.
        </p>
      </section>
    </div>
  );
}
