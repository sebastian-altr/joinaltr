import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JoinAltr | Find the Community That Moves You Forward",
  description:
    "JoinAltr is a community-driven platform for fitness, confidence, skincare, and nutrition.",

  openGraph: {
    title: "JoinAltr",
    description: "Find the community that moves you forward.",
    url: "https://joinaltr.com",
    siteName: "JoinAltr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JoinAltr",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "JoinAltr",
    description: "Find the community that moves you forward.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
<body className="min-h-full bg-[#050505]">
  <Navbar />
  <div className="flex min-h-screen flex-col">
    <div className="flex-1">{children}</div>
    <Footer />
  </div>
  <Analytics />
</body>
    </html>
  );
}
