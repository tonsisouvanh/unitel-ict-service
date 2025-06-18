import { AnimationProvider } from "@/lib/provider/animation-provider";
import type { Metadata } from "next";
import { Geist, Oxanium } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oxanium = Oxanium({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Unitel | ICT Services: Software Development, Digital Infrastructure, Cyber security",
  description:
    "Unitel offers comprehensive solutions in software development, digital infrastructure, and cybersecurity. We build robust software, design scalable digital foundations, and secure your digital assets.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    title:
      "Unitel | ICT Services: Software Development, Digital Infrastructure, Cyber security",
    description:
      "Unitel offers comprehensive solutions in software development, digital infrastructure, and cybersecurity. We build robust software, design scalable digital foundations, and secure your digital assets.",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/cover.jpg`,
        width: 1200,
        height: 630,
        alt: "Unitel It service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Unitel | ICT Services: Software Development, Digital Infrastructure, Cyber security",
    description:
      "Unitel offers comprehensive solutions in software development, digital infrastructure, and cybersecurity. We build robust software, design scalable digital foundations, and secure your digital assets.",
    images: [`${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/cover.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="/assets/lang-config.js" strategy="beforeInteractive" />
        <Script src="/assets/translation.js" strategy="beforeInteractive" />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
        />
      </head>

      <body
        className={`${oxanium.className} ${geistSans.variable} antialiased`}
      >
        <div id="google_translate_element"></div>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <AnimationProvider>{children}</AnimationProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
