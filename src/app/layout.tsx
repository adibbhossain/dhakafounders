import {ClerkProvider} from "@clerk/nextjs";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhaka Founders | Bangladesh's Tech Ecosystem Launchpad",
  description: "Discover the ecosystem where founders, builders, and investors unite. Access funding, grow your SaaS startup, and support Bangladesh's tech future.",
  keywords: ["Dhaka Founders", "Bangladesh Startup", "SaaS Directory", "Funding Bangladesh", "Tech Builders", "Dhaka Tech"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-light text-brand-dark font-sans selection:bg-brand-primary/10 selection:text-brand-primary">
        <ClerkProvider>
          <Navbar />
          <main className="flex-1 flex flex-col w-full pt-16">
          {children}
          </main>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}