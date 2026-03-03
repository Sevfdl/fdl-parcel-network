"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("fdl_cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("fdl_cookie_consent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("fdl_cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[999] w-[95%] max-w-3xl -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-700">
          We use cookies to improve your experience and understand how the
          website is used. Read our{" "}
          <a href="/cookies" className="font-semibold underline">
            Cookies Policy
          </a>
          .
        </p>

        <div className="flex gap-3">
          <button onClick={rejectCookies} className="btn">
            Reject
          </button>

          <button onClick={acceptCookies} className="btn btn-primary">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}