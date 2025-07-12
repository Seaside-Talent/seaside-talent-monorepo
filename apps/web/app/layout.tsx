import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import './globals.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Seaside Talent - Healthcare Hiring Made Simple",
  description:
    "Find the Right Healthcare Talent, Faster. No Noise, Just Qualified Matches. Credential-verified healthcare professionals and streamlined hiring.",
  keywords: "healthcare jobs, healthcare staffing, medical jobs, nursing jobs, healthcare recruitment",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr"
          crossOrigin="anonymous"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        {/* Use Next.js Script for async loading */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
