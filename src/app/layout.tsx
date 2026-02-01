import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Cinzel_Decorative, Manrope } from "next/font/google";
import "./globals.css";
import NebulaBackground from "@/components/ui/NebulaBackground";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});
const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel"
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  title: "Midnight Mixology | Premium Bar Catalog",
  description: "An immersive catalog of fine spirits and cocktails. Experience the art of mixology in a setting designed for the senses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${syne.variable} ${plusJakarta.variable} ${cinzel.variable} ${manrope.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-white`}>
        <NebulaBackground />
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
