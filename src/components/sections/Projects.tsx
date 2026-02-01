"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ScrollRevealText from "../ui/ScrollRevealText";
import { useRef } from "react";


const events = [
   {
      id: 1,
      date: "EVERY FRIDAY",
      title: "JAZZ & GIN",
      description: "Experience the smooth rhythms of live jazz accompanied by our curated selection of premium gins. A perfect start to your weekend.",
      category: "Live Music",
      color: "bg-accent-gold/10",
   },
   {
      id: 2,
      date: "OCT 24",
      title: "MASTERCLASS",
      description: "Join our head mixologist for an intimate journey into the art of cocktail crafting. Learn the secrets behind our signature pours.",
      category: "Workshop",
      color: "bg-accent-gold/10",
   },
   {
      id: 3,
      date: "BOOKING",
      title: "PRIVATE TASTING",
      description: "Exclusive access to our rare whiskey collection. Designed for connoisseurs seeking a guided tasting experience in our VIP lounge.",
      category: "Exclusive",
      color: "bg-accent-gold/10",
   },
];


export default function Projects() {
   const sectionRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
   });

   return (
      <section ref={sectionRef} id="projects" className="py-24 bg-transparent relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10">
            <div className="mb-16">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
               >
                  <span className="text-secondary/60 font-bold tracking-widest uppercase mb-2 block font-sans text-[10px]">What's On</span>
               </motion.div>
               <h2 className="text-5xl md:text-8xl font-syne font-black text-secondary uppercase tracking-tightest leading-[0.85]">
                  Events & <span className="text-accent-gold italic font-bold">Highlights</span>
               </h2>
            </div>

            <div className="flex flex-col gap-8">
               {events.map((event, index) => (
                  <motion.div
                     key={event.id}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ duration: 0.6, delay: index * 0.1 }}
                     whileHover={{ scale: 1.01, borderColor: "rgba(243, 229, 171, 0.3)" }}
                     className="group relative border border-white/10 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 bg-white/5 backdrop-blur-xl overflow-hidden shadow-sm cursor-pointer w-full glow-button"
                  >
                     {/* Hover Background - Subtle Tint */}
                     <div
                        className={`absolute inset-0 ${event.color} -z-10 transition-opacity duration-700 opacity-0 group-hover:opacity-100`}
                     />

                     <div className="flex flex-col md:flex-row gap-8 relative z-10">
                        <div className="w-full md:w-1/4">
                           <span className="font-sans text-[10px] font-bold tracking-widest text-accent-gold uppercase block mb-4">
                              {event.date}
                           </span>
                           <span className="inline-block px-3 py-1 bg-white/5 text-secondary rounded-full text-[10px] font-bold group-hover:bg-accent-gold/20 transition-colors duration-300 uppercase tracking-widest font-sans">
                              {event.category}
                           </span>
                        </div>

                        <div className="w-full md:w-3/4">
                           <h3 className="font-syne text-3xl md:text-5xl text-secondary font-black mb-4 group-hover:translate-x-2 transition-transform duration-300 uppercase tracking-tightest">
                              {event.title}
                           </h3>
                           <p className="font-sans text-secondary/60 text-lg leading-relaxed max-w-2xl">
                              {event.description}
                           </p>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}
