// app/privacy/page.tsx
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-12">
        <div className="text-xs font-semibold tracking-widest text-slate-500">
          LEGAL
        </div>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-black md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 max-w-3xl text-slate-700 md:text-lg">
          This policy explains how FDL PARCEL NETWORK handles personal information
          when you use our website, contact us, or apply for work.
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Last updated: {new Date().toLocaleDateString("en-GB")}
        </p>
      </section>

      {/* CONTENT */}
      <section className="space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-extrabold text-black">Who we are</h2>
          <p className="mt-3 text-slate-700">
            FDL PARCEL NETWORK (“we”, “us”, “our”) operates last-mile logistics
            support and recruitment services in the UK.
          </p>
          <p className="mt-3 text-slate-700">
            If you have questions about this policy, contact us via the details
            on the{" "}
            <Link href="/about" className="underline underline-offset-4">
              About
            </Link>{" "}
            page.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-extrabold text-black">What data we collect</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Contact details you choose to share (name, email, phone).</li>
            <li>
              • Basic enquiry details (your message, and any information you include).
            </li>
            <li>
              • Recruitment/application information you submit via our application
              process (for example through Cognito Forms), which may include
              documents required for compliance.
            </li>
            <li>
              • Technical data such as device/browser information and site usage
              data (usually via cookies).
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-extrabold text-black">How we use your data</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• To respond to enquiries and provide information you request.</li>
            <li>• To process applications and progress recruitment steps.</li>
            <li>
              • To support operations and communicate with driver partners and depots.
            </li>
            <li>• To improve our website and user experience.</li>
            <li>
              • To meet legal obligations (for example, right to work and compliance checks).
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-extrabold text-black">Lawful basis</h2>
          <p className="mt-3 text-slate-700">
            We process personal data where it is necessary to:
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Take steps at your request (for example, recruitment enquiries).</li>
            <li>• Perform a contract or prepare to enter into one.</li>
            <li>• Comply with legal obligations.</li>
            <li>• Pursue legitimate interests (operational and service improvement), balanced with your rights.</li>
            <li>• Rely on your consent where required (for example, some cookies).</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-extrabold text-black">Sharing your data</h2>
          <p className="mt-3 text-slate-700">
            We may share relevant information with trusted partners only when needed,
            such as depot/operations teams and service providers who support our
            recruitment and operational processes.
          </p>
          <p className="mt-3 text-slate-700">
            We do not sell your personal information.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-extrabold text-black">Data retention</h2>
          <p className="mt-3 text-slate-700">
            We keep personal data only for as long as necessary for the purpose it was
            collected, including legal, operational, and compliance requirements.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-extrabold text-black">Your rights</h2>
          <p className="mt-3 text-slate-700">
            You may have rights under UK GDPR, including the right to access, correct,
            delete, restrict, or object to processing, and the right to data portability.
          </p>
          <p className="mt-3 text-slate-700">
            You can also withdraw consent where we rely on it.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-extrabold text-black">Cookies</h2>
          <p className="mt-3 text-slate-700">
            For details about cookies and how we use them, read our{" "}
            <Link href="/cookies" className="underline underline-offset-4">
              Cookies Policy
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
        <h2 className="text-2xl font-extrabold text-black md:text-3xl">
          Need help or want to update your details?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-700">
          Use the contact form on the About page and we will respond as soon as possible.
        </p>
        <div className="mt-6">
          <Link href="/about" className="btn btn-primary">
            Go to About & Contact
          </Link>
        </div>
      </section>
    </div>
  );
}