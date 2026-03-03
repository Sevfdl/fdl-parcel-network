// app/cookies/page.tsx
import Link from "next/link";

export default function CookiesPage() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-12">
        <div className="text-xs font-semibold tracking-widest text-slate-500">
          LEGAL
        </div>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-black md:text-5xl">
          Cookies Policy
        </h1>
        <p className="mt-4 max-w-3xl text-slate-700 md:text-lg">
          This page explains what cookies are and how they may be used on the FDL
          PARCEL NETWORK website.
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Last updated: {new Date().toLocaleDateString("en-GB")}
        </p>
      </section>

      {/* CONTENT */}
      <section className="space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-extrabold text-black">What are cookies?</h2>
          <p className="mt-3 text-slate-700">
            Cookies are small text files stored on your device when you visit a website.
            They help the site work properly and can provide information about how the
            site is used.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-extrabold text-black">How we use cookies</h2>
          <p className="mt-3 text-slate-700">
            We may use cookies to:
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Keep the website running smoothly and securely.</li>
            <li>• Understand site traffic and improve pages and content.</li>
            <li>• Remember basic preferences (where applicable).</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-extrabold text-black">Types of cookies</h2>
          <div className="mt-4 space-y-4 text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="font-bold text-black">Strictly necessary cookies</div>
              <p className="mt-2">
                These help the website function and cannot usually be switched off in
                our systems.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="font-bold text-black">Analytics / performance cookies</div>
              <p className="mt-2">
                These help us understand how visitors use the site so we can improve it
                (for example, which pages are visited most).
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="font-bold text-black">Functionality cookies</div>
              <p className="mt-2">
                These can remember choices you make to improve your experience.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-extrabold text-black">Managing cookies</h2>
          <p className="mt-3 text-slate-700">
            You can control cookies through your browser settings. You can delete
            existing cookies and block some or all cookies. If you block cookies,
            parts of the website may not work properly.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-extrabold text-black">More information</h2>
          <p className="mt-3 text-slate-700">
            For how we handle personal information, read our{" "}
            <Link href="/privacy" className="underline underline-offset-4">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
        <h2 className="text-2xl font-extrabold text-black md:text-3xl">
          Want to speak to us?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-700">
          Use the contact form on the About page and we will respond as soon as possible.
        </p>
        <div className="mt-6">
          <Link href="/about" className="btn btn-secondary">
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}