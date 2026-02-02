"use client";

import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import InteractiveCursor from "@/components/ui/InteractiveCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";
import QuickMenu from "@/components/ui/QuickMenu";

export default function PageLayout({ children }: { children: ReactNode }) {
   return (
      <SmoothScroll>
         <QuickMenu />
         <InteractiveCursor />
         <Header />
         <main className="relative min-h-screen z-10 bg-background shadow-[0_-20px_50px_rgba(0,0,0,0.5)] rounded-b-[60px]">
            {children}
         </main>
         {/* Spacer for Footer Reveal */}
         <div className="h-[700px] md:h-[500px] pointer-events-none" />
         <Footer />
         <LoadingScreen />
      </SmoothScroll>
   );
}
