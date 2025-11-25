import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vijaya Pardhu Magapu | Portfolio",
  description: "Vibe Coder & Software Developer crafting intuitive digital experiences.",
  keywords: ["Portfolio", "Web Developer", "Android Developer", "React", "Next.js", "Vijaya Pardhu Magapu"],
  authors: [{ name: "Vijaya Pardhu Magapu" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-background text-foreground relative overflow-x-hidden`}
      >
        <ScrollProgress />
        <AnimatedBackground />
        <Navbar />
        <main className="relative z-0 flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
