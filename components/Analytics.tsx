"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = "G-8EN1J99BEZ";

export default function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const check = () => {
      if (localStorage.getItem("fdl_cookie_consent") === "accepted") {
        setConsented(true);
      }
    };
    check();

    // CookieBanner дава съгласие в реално време (без reload на страницата) точно чрез това събитие.
    window.addEventListener("fdl-consent-changed", check);
    return () => window.removeEventListener("fdl-consent-changed", check);
  }, []);

  if (!consented) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
