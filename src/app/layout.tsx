import type { Metadata } from "next";
import { Inter, Playfair_Display, Cinzel_Decorative, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import InteractiveCursor from "@/components/ui/InteractiveCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";
import NebulaBackground from "@/components/ui/NebulaBackground";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import QuickMenu from "@/components/ui/QuickMenu";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
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
      <body suppressHydrationWarning className={`${inter.variable} ${playfair.variable} ${cinzel.variable} ${manrope.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-white`}>
        <NebulaBackground />
        <NoiseOverlay />
        <SmoothScroll>
          <QuickMenu />
          <InteractiveCursor />
          <Header />
          <main className="relative min-h-screen z-10 bg-background shadow-[0_-20px_50px_rgba(0,0,0,0.5)] rounded-b-[60px]">
            {children}
          </main>
          {/* Spacer for Footer Reveal */}
          <div className="h-[600px] md:h-[500px] pointer-events-none" />
        </SmoothScroll>
        <Footer />
        <LoadingScreen />
      </body>
    </html>
  );
}
