"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Wine, Music, GlassWater } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";
import { MagicCard, MagicGrid } from "@/components/ui/MagicCard";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-32 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent-gold uppercase tracking-widest text-[10px] font-bold mb-4 block font-sans">Our Philosophy</span>
          <TextReveal
            text="Sip. Savor. Socialize."
            className="text-4xl md:text-8xl font-syne text-secondary mb-8 leading-[0.85] uppercase font-black tracking-tightest"
            delay={0.2}
          />
          <p className="text-xl md:text-2xl text-secondary/60 max-w-4xl mx-auto leading-relaxed font-sans">
            Midnight Mixology is more than a bar; it's a sanctuary for the senses. Where traditional mixology meets avant-garde techniques in an atmosphere of whispered luxury.
          </p>
        </motion.div>

        <MagicGrid className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full"
          >
            <MagicCard className="h-full p-10 flex flex-col items-start gap-6 bg-white/5 border-white/10 group" gradientColor="#F3E5AB">
              <div className="p-4 rounded-full bg-accent-gold/20 text-accent-gold mb-2">
                <GlassWater size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4 font-syne uppercase tracking-tight">Master Mixology</h3>
                <p className="text-secondary/60 leading-relaxed font-sans text-sm">
                  Our bartenders are artists, crafting liquids that tell stories using rare ingredients and precision techniques.
                </p>
              </div>
            </MagicCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <MagicCard className="h-full p-10 flex flex-col items-start gap-6 bg-white/5 border-white/10 group" gradientColor="#F3E5AB">
              <div className="p-4 rounded-full bg-accent-gold/20 text-accent-gold mb-2">
                <Award size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4 font-syne uppercase tracking-tight">World Class Service</h3>
                <p className="text-secondary/60 leading-relaxed font-sans text-sm">
                  Experience hospitality that anticipates your needs before you even realize them.
                </p>
              </div>
            </MagicCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-full"
          >
            <MagicCard className="h-full p-10 flex flex-col items-start gap-6 bg-white/5 border-white/10 group" gradientColor="#F3E5AB">
              <div className="p-4 rounded-full bg-accent-gold/20 text-accent-gold mb-2">
                <Music size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4 font-syne uppercase tracking-tight">Curated Ambience</h3>
                <p className="text-secondary/60 leading-relaxed font-sans text-sm">
                  From the lighting to the playlist, every element is tuned to create an unforgettable mood.
                </p>
              </div>
            </MagicCard>
          </motion.div>
        </MagicGrid>
      </div>
    </section>
  );
}
