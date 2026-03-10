import type { Metadata } from "next";
import { DM_Sans, Archivo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

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
  title: "XAU TRADERS | Trading Education Platform",
  description:
    "Structured trading education with professional mentorship and risk-first philosophy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${dmSans.variable}
          ${archivo.variable}
          antialiased
          bg-primary
          text-white
          font-body
        `}
      >
        <SessionWrapper>
          <Navbar />

          <main className="pt-20">
            {children}
            <Footer />
          </main>
          
        </SessionWrapper>
      </body>
    </html>
  );
}
