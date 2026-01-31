'use client';

import { motion } from 'framer-motion';
import { MagicCard } from '@/components/ui/MagicCard';
import TextReveal from '@/components/ui/TextReveal';
import Button from '@/components/ui/Button';
import { Heart, Users, Sparkles } from 'lucide-react';

export default function JoinUs() {
   return (
      <section id="join-us" className="py-24 relative overflow-hidden bg-transparent">
         <div className="container mx-auto px-6 relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-center mb-16"
            >
               <span className="text-primary font-bold tracking-wider uppercase mb-4 block">The Question Is...</span>
               <TextReveal
                  text="Are you in or out?"
                  className="text-5xl md:text-7xl font-playfair text-primary mb-8"
                  delay={0.2}
               />
               <p className="text-lg text-primary/70 max-w-2xl mx-auto leading-relaxed">
                  To make a great impact that could create trust, credibility, and amazing branding reputation, it only takes 15 minutes.
               </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-full"
               >
                  <MagicCard className="p-10 border-accent-pink/80 bg-white/80 shadow-lg backdrop-blur-md h-full flex flex-col justify-between">
                     <div>
                        <div className="w-16 h-16 bg-accent-pink/30 rounded-full flex items-center justify-center text-primary mb-8">
                           <Heart size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-primary mb-4 font-playfair">Join Our Movement</h3>
                        <p className="text-primary/70 mb-8 leading-relaxed">
                           We are building a movement of youth committed to creating lasting change together. Join our volunteer programs and be part of the solution.
                        </p>
                     </div>
                     <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 rounded-xl">Register as Volunteer</Button>
                  </MagicCard>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full"
               >
                  <MagicCard className="p-10 border-accent-green/80 bg-white/80 shadow-lg backdrop-blur-md h-full flex flex-col justify-between">
                     <div>
                        <div className="w-16 h-16 bg-accent-green/30 rounded-full flex items-center justify-center text-primary mb-8">
                           <Sparkles size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-primary mb-4 font-playfair">Partner With Us</h3>
                        <p className="text-primary/70 mb-8 leading-relaxed">
                           Forward-thinking brands and organizations committed to creating social value. Let's build authentic impact and trust together.
                        </p>
                     </div>
                     <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 rounded-xl">Book a 15 Min Meeting</Button>
                  </MagicCard>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
