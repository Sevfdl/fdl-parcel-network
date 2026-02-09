export default function RecruitmentPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="space-y-10">
        <section className="space-y-3">
          <h1 className="text-4xl font-semibold">Driver Recruitment</h1>
          <p className="max-w-2xl text-slate-600">
            Ask questions, check requirements, and find the right depot for you.
            Our AI assistant will guide you step-by-step and show the correct application link when you’re ready.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-lg font-semibold">Recruitment Assistant</h2>
            <p className="mt-2 text-slate-600">
              The live chat will appear here. You won’t need to log in.
            </p>

            <div className="mt-5 flex h-28 items-center justify-center rounded-xl border bg-slate-50 text-sm text-slate-600">
              Chat widget placeholder
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-lg font-semibold">Before you apply</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Confirm your location (postcode / city)</li>
              <li>Check basic eligibility (right to work, licence)</li>
              <li>Answer questions clearly in short messages</li>
              <li>Share the correct Cognito link when you’re ready</li>
            </ul>

            <div className="mt-5 rounded-xl border bg-slate-50 p-4 text-sm text-slate-600">
              Tip: If you want the details sent by email (so you can come back later), we can add that flow next.
            </div>
          </div>
        </section>

        <section className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">Need direct help?</h2>
          <p className="mt-2 text-slate-600">
            Most questions will be answered in the chat above. Direct contact options can be added later if needed.
          </p>
        </section>
      </div>
    </div>
  );
}
