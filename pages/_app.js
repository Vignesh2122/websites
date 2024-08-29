import CookiesBanner from "@/components/CookiesBanner";
import "@/styles/globals.css";
import Script from "next/script";
// import { BackTop } from "antd";
import { FloatButton } from "antd";
import React, { useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setIsScrolled(scrollTop > 100); // Adjust the threshold as needed
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isTestEnvironment = process.env.NEXT_PUBLIC_ENV === "test";
  return (
    <>
      {isTestEnvironment && (
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
      )}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-RS4G9M31D5"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RS4G9M31D5', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <CookiesBanner />
      <style jsx global>{`
        .back-top-hidden {
          display: none !important;
        }
      `}</style>
      <FloatButton.BackTop
        className={isScrolled ? "" : "back-top-hidden"}
        style={{ zIndex: 1000, marginBottom: 90 }}
        visibilityHeight={600}
        duration={200}
      />
      <Component {...pageProps} />
    </>
  );
}
