"use client";

import { Instagram, Mail, MessageCircle } from "lucide-react";
import ClientLink from "@/components/ui/ClientLink";
import { motion } from "framer-motion";
import { useClient } from "@/context/ClientContext";

export default function Footer() {
  const { name, location } = useClient();

  return (
    <footer
      className="fixed bottom-0 left-0 w-full h-[850px] md:h-[500px] bg-primary z-0 flex flex-col justify-between text-secondary overflow-hidden border-t border-white/5"
    >
      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 h-full flex flex-col md:flex-row justify-between pt-10 md:pt-24 z-10 relative">

        {/* Left: Navigation */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h5 className="font-sans uppercase tracking-widest text-xs mb-6 text-accent-gold">Navigation</h5>
            <ul className="space-y-4">
              <li><ClientLink href="/" className="text-2xl font-syne hover:text-accent-gold transition-colors">Philosophy</ClientLink></li>
              <li><ClientLink href="/catalog" className="text-2xl font-syne hover:text-accent-gold transition-colors">Catalog</ClientLink></li>
              <li><ClientLink href="/events" className="text-2xl font-syne hover:text-accent-gold transition-colors">Events</ClientLink></li>
              <li><ClientLink href="/reserve" className="text-2xl font-syne hover:text-accent-gold transition-colors">Reservation</ClientLink></li>
            </ul>
          </div>


        </div>

        {/* Right: Info */}
        <div className="flex flex-col justify-between items-start md:items-end text-left md:text-right mt-8 md:mt-0 max-w-full md:max-w-[400px] px-6 md:px-0 pb-28 md:pb-0 z-20">
          <div className="space-y-8">
            <div>
              <h5 className="font-sans uppercase tracking-widest text-xs mb-4 text-accent-gold">Location</h5>
              <p className="font-syne text-2xl md:text-3xl leading-tight text-white md:whitespace-pre-line uppercase font-bold">
                {location}
              </p>
            </div>
            <div>
              <h5 className="font-sans uppercase tracking-widest text-xs mb-4 text-accent-gold">Connect</h5>
              <div className="flex gap-4 justify-start md:justify-end">
                <a href="https://www.instagram.com/atamsindonesia/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-primary transition-all duration-500 glow-button"><Instagram size={20} strokeWidth={1.2} /></a>
                <a href="https://wa.me/6287777888907" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-primary transition-all duration-500 glow-button"><MessageCircle size={20} strokeWidth={1.2} /></a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-4 md:gap-8 text-[10px] opacity-40 font-sans uppercase tracking-widest">
            <p>© 2026 {name === "MIDNIGHT" ? "Midnight Mixology" : name}</p>
            <a href="https://atamsindonesia.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-opacity">Designed by ATAMS</a>
          </div>
        </div>
      </div>

      {/* Background Brand Name - Absolute Full Width (True Edge-to-Edge) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none flex justify-center items-end z-0 pb-6 md:pb-0">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as const }}
          style={{ fontSize: `clamp(1rem, ${Math.min(15, 100 / (name.length * 0.9))}vw, 30rem)` }}
          className="font-syne font-black leading-none tracking-tightest select-none text-stroke opacity-10 mask-fog-v uppercase whitespace-nowrap text-center w-full"
        >
          {name}
        </motion.h1>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-gold/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />
    </footer >
  );
}
