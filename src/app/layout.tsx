import type { Metadata } from "next";
import { DM_Sans, Archivo } from "next/font/google";
import "./globals.css";

import SessionWrapper from "@/components/SessionWrapper";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Trading Education Platform",
  description: "Learn trading with structured courses and resources",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${archivo.variable} antialiased bg-[#0B0F14] text-[#E5E7EB]`}
      >
        {/* ✅ SessionWrapper provides NextAuth session to entire app */}
        <SessionWrapper>
          {/* ✅ Sticky Navbar (single source of truth) */}
          <Navbar />

          {/* ✅ Page content */}
          <main className="pt-20">
            {children}
          </main>
        </SessionWrapper>
      </body>
    </html>
  );
}
