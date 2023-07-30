import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { jetbrains_mono } from "./fonts";

export const metadata: Metadata = {
  title: "Devadathan M B",
  description: "Devadathan's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetbrains_mono.className} bg-slate-950 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
