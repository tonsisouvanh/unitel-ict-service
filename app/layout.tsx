import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from "@/lib/provider/animation-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Unitel | Software Development, Digital Infrastructure, Cyber security",
  description:
    "Unitel offers comprehensive solutions in software development, digital infrastructure, and cybersecurity. We build robust software, design scalable digital foundations, and secure your digital assets.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    title:
      "Unitel | Software Development, Digital Infrastructure, Cyber security",
    description:
      "Unitel offers comprehensive solutions in software development, digital infrastructure, and cybersecurity. We build robust software, design scalable digital foundations, and secure your digital assets.",
    url: "https://unitel-dev.netlify.app",
    images: [
      {
        url: "https://unitel-dev.netlify.app/assets/images/cover.png",
        width: 1200,
        height: 630,
        alt: "Unitel It service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Unitel | Software Development, Digital Infrastructure, Cyber security",
    description:
      "Unitel offers comprehensive solutions in software development, digital infrastructure, and cybersecurity. We build robust software, design scalable digital foundations, and secure your digital assets.",
    images: ["https://unitel-dev.netlify.app/assets/images/cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
