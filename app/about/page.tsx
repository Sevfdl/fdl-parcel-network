export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold">About FDL Parcel Network</h1>
        <p className="text-slate-600">
          FDL Parcel Network is a UK last-mile delivery operating partner.
          We support carrier networks by building reliable driver teams for chosen
          locations, onboarding them properly, and keeping operations stable after go-live.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">What we’re good at</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            <li>Fast driver mobilisation for new routes / new depots</li>
            <li>Strong onboarding discipline (documents + readiness)</li>
            <li>Driver support and operational consistency</li>
            <li>Adapting quickly when volumes or requirements change</li>
          </ul>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">How we work</h2>
          <p className="mt-3 text-slate-600">
            Our model is built around in-house teams. That means fewer external
            dependencies, faster decisions, and clear responsibility.
          </p>
          <p className="mt-3 text-slate-600">
            When we commit to a location, we focus on the outcome:
            coverage, stability, and meeting partner performance requirements.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border bg-slate-50 p-6">
        <h2 className="text-xl font-semibold">Next step on this website</h2>
        <p className="mt-2 text-slate-600">
          We’ll add two key features:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>A business enquiry form (for clients/partners)</li>
          <li>An AI recruitment chat (for driver applicants) with API + metrics</li>
        </ul>
      </section>
    </div>
  );
}
