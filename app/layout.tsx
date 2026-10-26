import type { Metadata } from "next";
import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olyndra Lending | Business loans decided in minutes",
  description:
    "Short-term loans for UK limited companies, decided online in real time from the business's own bank data. Fixed rate for the term, one flat fee, plain-English agreement. Available through partner brokers.",
  metadataBase: new URL("https://www.olyndra.com"),
  openGraph: {
    title: "Olyndra Lending | Business loans decided in minutes",
    description:
      "Real-time lending decisions for UK businesses, available through partner brokers.",
    url: "https://www.olyndra.com",
    siteName: "Olyndra Lending",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
