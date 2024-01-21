import type { Metadata } from "next";
import {
  Inter as FontSans,
  Libre_Baskerville as FontSerif,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Lillestortinget",
  description:
    "Lillestortinget er et politisk spill på Lillestrøm videregående skole. Her kan du lese om hva vi driver med, og hvem som er med.",
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontSerif = FontSerif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          fontSans.variable,
          fontSerif.variable
        )}
      >
        <Navbar />
        {/* <main className="flex flex-col justify-stretch items-center mx-auto flex-grow"> */}
        <main className="flex flex-col flex-grow relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
