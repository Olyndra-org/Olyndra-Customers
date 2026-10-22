import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olyndra | Business loans decided in minutes",
  description:
    "Olyndra is an AI-run lender for UK limited companies. Real-time online decisions from bank data, a fixed rate for the term and a plain-English agreement. Available through partner brokers.",
  metadataBase: new URL("https://www.olyndra.com"),
  openGraph: {
    title: "Olyndra | Business loans decided in minutes",
    description:
      "Real-time online lending decisions for UK businesses, available through partner brokers.",
    url: "https://www.olyndra.com",
    siteName: "Olyndra",
    images: [{ url: "/icon.svg", width: 800, height: 600, alt: "Olyndra Logo" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olyndra | Business loans decided in minutes",
    description:
      "Real-time online lending decisions for UK businesses, available through partner brokers.",
    images: ["/icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`bg-background ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
