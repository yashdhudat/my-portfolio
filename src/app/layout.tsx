import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import "./base-styles.css";
import Script from "next/script";
import { useEffect, useState } from "react";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xuefeng Sun | Software Engineer",
  description: "Personal portfolio of Xuefeng Sun, a full-stack developer specializing in Java, React, and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} ${montserrat.className}`}
        suppressHydrationWarning
      >
        {children}
      </body>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
    </html>
  );
}
