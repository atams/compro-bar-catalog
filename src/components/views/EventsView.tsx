"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ClientLink from "@/components/ui/ClientLink";
import { ArrowLeft } from "lucide-react";
import Projects from "@/components/sections/Projects";

import PageLayout from "@/components/layout/PageLayout";

export default function EventsView() {
   const { scrollY } = useScroll();
   const y = useTransform(scrollY, [0, 1000], [0, 250]);
   return (
      <PageLayout>
         <div className="relative min-h-screen bg-primary overflow-hidden">
            {/* Simple Header for Subpages */}
            <div className="pt-40 pb-12 px-6">
               <div className="max-w-7xl mx-auto">
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     className="mb-8"
                  >
                     <ClientLink href="/" className="group flex items-center gap-2 text-accent-gold/60 hover:text-accent-gold transition-colors">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.3em]">Back to Experience</span>
                     </ClientLink>
                  </motion.div>
               </div>
            </div>

            {/* Reuse the existing Projects section as the main content */}
            <Projects />

            {/* Decorative Background Text (Stroked) */}
            <motion.div style={{ y }} className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none opacity-5">
               <h1 className="font-syne text-[20vw] font-black tracking-tightest leading-none text-stroke uppercase whitespace-nowrap opacity-60">
                  EVENTS
               </h1>
            </motion.div>
         </div>
      </PageLayout>
   );
}
