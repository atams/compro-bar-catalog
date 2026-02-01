"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GlowButton from "@/components/ui/GlowButton";
import MarqueeText from "@/components/ui/MarqueeText";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background Ambience */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/40 to-primary/95" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full px-6 flex flex-col items-center"
      >
        {/* Top Detail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="w-12 h-px bg-accent-gold/40" />
          <span className="font-sans uppercase tracking-[0.5em] text-[10px] md:text-xs text-accent-gold">
            Jakarta Elite Lounge
          </span>
          <div className="w-12 h-px bg-accent-gold/40" />
        </motion.div>

        {/* Dramatic Typography */}
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-syne text-[18vw] md:text-[14vw] leading-[0.75] font-black text-white tracking-tightest mb-4 uppercase"
          >
            MIDNIGHT
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="flex items-center gap-6"
          >
            <div className="h-px w-24 bg-white/20 hidden md:block" />
            <h2 className="font-syne italic text-3xl md:text-5xl text-accent-gold font-light tracking-tight">
              The Art of Mixology
            </h2>
            <div className="h-px w-24 bg-white/20 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <GlowButton
              className="glow-button"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Catalog
            </GlowButton>
          </motion.div>
        </div>

        {/* Bottom Metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-12 text-center"
        >
          <div className="flex flex-col gap-1">
            <span className="text-white/30 text-[9px] uppercase tracking-widest font-sans">Hours</span>
            <span className="text-white/80 text-sm font-syne">19:00 — Late</span>
          </div>
          <div className="hidden md:flex flex-col gap-1">
            <span className="text-white/30 text-[9px] uppercase tracking-widest font-sans">Vibe</span>
            <span className="text-white/80 text-sm font-syne">Cinematic Dark</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white/30 text-[9px] uppercase tracking-widest font-sans">Table</span>
            <span className="text-white/80 text-sm font-syne italic underline decoration-accent-gold/30">By Reservation</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Explorer Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-px h-12 bg-linear-to-b from-accent-gold/50 to-transparent" />
        <span className="text-[9px] tracking-[0.4em] text-accent-gold/40 uppercase font-sans">Scroll to Explore</span>
      </motion.div>

      {/* Atmospheric Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[120px] -ml-40 -mb-40 pointer-events-none" />

      {/* Background Marquee */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-5 pointer-events-none rotate-[-5deg] z-0">
        <MarqueeText text="VESPER MARTINI • SMOKED OLD FASHIONED • MIDNIGHT NEGRONI • GOLDEN HOUR • " speed={40} className="font-syne text-[10vw] font-black italic uppercase leading-none" />
      </div>
    </section>
  );
}
