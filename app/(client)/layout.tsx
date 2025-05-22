"use client";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Script from "next/script";
import { useEffect } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };
  }, []);
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></Script>

      <link
        rel="stylesheet"
        type="text/css"
        href="https://www.gstatic.com/_/translate_http/_/ss/k=translate_http.tr.26tY-h6gH9w.L.W.O/am=CAM/d=0/rs=AN8SPfpIXxhebB2A47D9J-MACsXmFF6Vew/m=el_main_css"
      /> */}
      {/* <div
        id="google_translate_element"
        style={{
          position: "fixed",
          right: 10,
          bottom: 10,
          zIndex: 1000,
          opacity: "70%",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "10px",
          padding: "5px",
          fontSize: "5px",
        }}
      ></div> */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
