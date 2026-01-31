"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import GlowButton from "@/components/ui/GlowButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    guests: "2 Guests",
    date: "Select Date",
    time: "20:00",
    name: "",
    contact: ""
  });

  const [activeField, setActiveField] = useState<string | null>(null);

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-primary">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Branding & Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-accent-gold font-manrope uppercase tracking-[0.3em] text-xs mb-6 block">
                Reservations
              </span>
              <h2 className="text-5xl md:text-7xl font-playfair text-white leading-tight mb-8">
                The <span className="text-accent-gold italic">Concierge</span> Experience
              </h2>
              <p className="text-white/60 font-manrope text-lg leading-relaxed max-w-md mb-12">
                Securing your place at Midnight Mixology is the first step in a curated sensory journey.
              </p>

              <div className="space-y-6 border-l border-white/10 pl-8">
                <div>
                  <h4 className="text-accent-gold font-manrope uppercase tracking-widest text-[10px] mb-1">Inquiries</h4>
                  <p className="font-playfair text-xl text-white">concierge@midnight.com</p>
                </div>
                <div>
                  <h4 className="text-accent-gold font-manrope uppercase tracking-widest text-[10px] mb-1">Direct Line</h4>
                  <p className="font-playfair text-xl text-white">+62 21 555 0192</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Refined Form Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Guest Count */}
                <div className="space-y-2">
                  <label className="block font-manrope uppercase tracking-widest text-[10px] text-accent-gold/60">Party Size</label>
                  <input
                    type="text"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-3 font-playfair text-2xl text-white outline-none focus:border-accent-gold transition-colors"
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="block font-manrope uppercase tracking-widest text-[10px] text-accent-gold/60">Preferred Time</label>
                  <input
                    type="text"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-3 font-playfair text-2xl text-white outline-none focus:border-accent-gold transition-colors"
                  />
                </div>

                {/* Date */}
                <div className="md:col-span-2 space-y-2">
                  <label className="block font-manrope uppercase tracking-widest text-[10px] text-accent-gold/60">Calendar Date</label>
                  <input
                    type="text"
                    placeholder="Tomorrow"
                    className="w-full bg-transparent border-b border-white/10 py-3 font-playfair text-2xl text-white outline-none focus:border-accent-gold transition-colors placeholder:text-white/20"
                  />
                </div>

                {/* Name */}
                <div className="md:col-span-2 space-y-2">
                  <label className="block font-manrope uppercase tracking-widest text-[10px] text-accent-gold/60">Full Name</label>
                  <input
                    type="text"
                    placeholder="Johnathan Doe"
                    className="w-full bg-transparent border-b border-white/10 py-3 font-playfair text-2xl text-white outline-none focus:border-accent-gold transition-colors placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="mt-12">
                <GlowButton
                  className="w-full py-6 text-sm tracking-[.3em] uppercase rounded-2xl"
                >
                  Request Invitation
                </GlowButton>
              </div>

              {/* Decorative Pattern in Card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full" />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -ml-32 pointer-events-none" />
    </section>
  );
}
