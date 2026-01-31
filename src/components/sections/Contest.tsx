"use client";

import { motion } from "framer-motion";
import { Calendar, Gift, Trophy } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

export default function Contest() {
  return (
    <section id="contest" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-bold tracking-wider uppercase mb-4 block">
            Current Event
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Design Challenge 2025
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Showcase your creativity and win amazing prizes. Theme: "Future of
            Nature".
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-8 md:p-12 border-accent/20 bg-accent/5">
              <div className="flex items-center gap-4 mb-8">
                <Trophy className="text-accent w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-bold text-white">Grand Prize</h3>
                  <p className="text-white/60">
                    $5,000 + Creative Software Suite
                  </p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Calendar className="text-white/40 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Deadline</h4>
                    <p className="text-white/60">December 31st, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Gift className="text-white/40 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Perks</h4>
                    <p className="text-white/60">
                      Featured on our homepage, Mentorship session
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full">
                Register Now
              </Button>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              How to Participate
            </h3>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Create",
                  desc: "Design an artwork based on the theme.",
                },
                {
                  step: "02",
                  title: "Submit",
                  desc: "Upload your work via our portal.",
                },
                {
                  step: "03",
                  title: "Win",
                  desc: "Get voted by community and judges.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <span className="text-4xl font-bold text-white/10">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
