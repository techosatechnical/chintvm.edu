import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import React from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chinmaya Educational, Cultural and Charitable Trust",
  description: "Providing holistic education based on the Chinmaya Vision Programme, blending academic excellence with spiritual growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-ivory text-navy">
        <React.Suspense fallback={<div className="h-20 w-full bg-[#0E2A45] border-b border-[#F3CA55]/20" />}>
          <Header />
        </React.Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
