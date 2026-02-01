"use client";

import { Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="fixed bottom-0 left-0 w-full h-[600px] md:h-[500px] bg-primary z-0 flex flex-col justify-between text-secondary overflow-hidden border-t border-white/5"
    >
      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 h-full flex flex-col md:flex-row justify-between pt-12 md:pt-24 z-10 relative">

        {/* Left: Navigation */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h5 className="font-sans uppercase tracking-widest text-xs mb-6 text-accent-gold">Navigation</h5>
            <ul className="space-y-4">
              <li><Link href="/#about" className="text-2xl font-syne hover:text-accent-gold transition-colors">Philosophy</Link></li>
              <li><Link href="/catalog" className="text-2xl font-syne hover:text-accent-gold transition-colors">Catalog</Link></li>
              <li><Link href="/#contact" className="text-2xl font-syne hover:text-accent-gold transition-colors">Reservation</Link></li>
            </ul>
          </div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="font-syne font-black text-[12vw] leading-none tracking-tightest select-none text-stroke opacity-10 mt-auto mask-fog-v uppercase"
          >
            MIDNIGHT
          </motion.h1>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col justify-between items-end text-right mt-12 md:mt-0 max-w-full md:max-w-[400px] px-6 md:px-0">
          <div className="space-y-8">
            <div>
              <h5 className="font-sans uppercase tracking-widest text-xs mb-4 text-accent-gold">Location</h5>
              <p className="font-syne text-2xl md:text-3xl leading-tight text-white md:whitespace-pre-line uppercase font-bold">
                Senopati Suites, <br className="hidden md:block" /> Jakarta Selatan
              </p>
            </div>
            <div>
              <h5 className="font-sans uppercase tracking-widest text-xs mb-4 text-accent-gold">Connect</h5>
              <div className="flex gap-4 justify-end">
                <a href="#" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-primary transition-all duration-500 glow-button"><Instagram size={20} strokeWidth={1.2} /></a>
                <a href="#" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-primary transition-all duration-500 glow-button"><Mail size={20} strokeWidth={1.2} /></a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-8 text-[10px] opacity-40 font-sans uppercase tracking-widest">
            <p>© 2026 Midnight Mixology</p>
            <p>Designed by ATAMS</p>
          </div>
        </div>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-gold/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />
    </footer >
  );
}
