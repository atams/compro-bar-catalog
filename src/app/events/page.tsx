"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Projects from "@/components/sections/Projects";

export default function EventsPage() {
   const { scrollY } = useScroll();
   const y = useTransform(scrollY, [0, 1000], [0, 250]);
   return (
      <main className="relative min-h-screen bg-primary overflow-hidden">
         {/* Simple Header for Subpages */}
         <div className="pt-32 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-8"
               >
                  <Link href="/" className="group flex items-center gap-2 text-accent-gold/60 hover:text-accent-gold transition-colors">
                     <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                     <span className="font-sans text-[10px] uppercase tracking-[0.3em]">Back to Experience</span>
                  </Link>
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
      </main>
   );
}
