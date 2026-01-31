"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagicCard } from "@/components/ui/MagicCard";
import ScrollRevealText from "@/components/ui/ScrollRevealText";
import CinematicReveal from "@/components/ui/CinematicReveal";

const milestones = [
  {
    year: "2015",
    title: "The Beginning",
    description:
      "Founded with a vision to bring color to the digital world. Started as a small team of three designers.",
  },
  {
    year: "2017",
    title: "Rapid Growth",
    description:
      "Expanded our team and moved to a new office. Completed our 100th project and gained international recognition.",
  },
  {
    year: "2020",
    title: "Digital Revolution",
    description:
      "Adapted to the changing landscape by pioneering new digital experiences and virtual events.",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description:
      "Opened offices in three new countries. Partnered with major global brands to deliver immersive experiences.",
  },
  {
    year: "2025",
    title: "Future Forward",
    description:
      "Continuing to push boundaries with AI-driven design and next-generation web technologies.",
  },
];

export default function History() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="history" ref={containerRef} className="relative py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Sticky Title (Left) */}
          <div className="md:w-1/3 sticky top-32">
            <CinematicReveal delay={0.1}>
              <span className="text-primary/60 uppercase tracking-widest text-sm font-semibold mb-2 block">History</span>
            </CinematicReveal>
            <div className="text-5xl md:text-7xl font-playfair text-primary mb-8 leading-tight">
              <div className="block"><ScrollRevealText>Born From</ScrollRevealText></div>
              <div className="block"><ScrollRevealText>Experience</ScrollRevealText></div>
            </div>
            <div className="relative h-[300px] w-1 bg-primary/10 rounded-full ml-1 hidden md:block">
              <motion.div
                style={{
                  height: useTransform(
                    scrollYProgress,
                    [0, 1],
                    ["0%", "100%"],
                  ),
                }}
                className="absolute top-0 left-0 w-full bg-primary rounded-full"
              />
            </div>
          </div>

          {/* Scrolling Content (Right) */}
          <div className="md:w-2/3 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <MagicCard className="p-10 border-accent-purple/80 bg-white/80 shadow-lg backdrop-blur-md">
                <h3 className="text-2xl font-bold text-primary mb-6 font-playfair">A Deeply Personal Origin</h3>
                <p className="text-primary/80 leading-relaxed text-lg mb-6">
                  Haven Foundation Indonesia was born from a deeply personal place. What began as a small dream to educate, inspire, and offer comfort through social media was shaped by lived experience, including the founder’s own journey through severe mental health struggles and surviving suicidal thoughts.
                </p>
                <div className="h-1 w-20 bg-accent-purple rounded-full"></div>
              </MagicCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <MagicCard className="p-10 border-primary/20 bg-white/60">
                <h3 className="text-2xl font-bold text-primary mb-6 font-playfair">Finding Clarity in Darkness</h3>
                <p className="text-primary/80 leading-relaxed text-lg mb-6">
                  In that space of darkness came clarity: no one should feel alone in their pain. Haven started as an educational platform focused on mental health, self-knowledge, and social issues—designed not just to inform, but to reassure, listen, and remind people that their feelings are valid and help is possible.
                </p>
                <div className="h-1 w-20 bg-accent-blue rounded-full"></div>
              </MagicCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <MagicCard className="p-10 border-primary/20 bg-white/60">
                <h3 className="text-2xl font-bold text-primary mb-6 font-playfair">Collective Impact Today</h3>
                <p className="text-primary/80 leading-relaxed text-lg mb-6">
                  Today, Haven transforms personal healing into collective impact, creating safe spaces, meaningful conversations, and actions that prove even the hardest experiences can become a source of hope and change for others.
                </p>
                <div className="h-1 w-20 bg-accent-green rounded-full"></div>
              </MagicCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
