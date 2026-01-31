"use client";

import { motion } from "framer-motion";
import ScrollRevealText from "../ui/ScrollRevealText";


const events = [
   {
      id: 1,
      date: "EVERY FRIDAY",
      title: "JAZZ & GIN",
      description: "Experience the smooth rhythms of live jazz accompanied by our curated selection of premium gins. A perfect start to your weekend.",
      category: "Live Music",
      color: "bg-accent/20",
   },
   {
      id: 2,
      date: "OCT 24",
      title: "MASTERCLASS",
      description: "Join our head mixologist for an intimate journey into the art of cocktail crafting. Learn the secrets behind our signature pours.",
      category: "Workshop",
      color: "bg-accent-gold/20",
   },
   {
      id: 3,
      date: "BOOKING",
      title: "PRIVATE TASTING",
      description: "Exclusive access to our rare whiskey collection. Designed for connoisseurs seeking a guided tasting experience in our VIP lounge.",
      category: "Exclusive",
      color: "bg-purple-900/20",
   },
];


export default function Projects() {
   return (
      <section id="projects" className="py-24 bg-transparent relative overflow-hidden">
         <div className="container mx-auto px-6">
            <div className="mb-16">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
               >
                  <span className="text-secondary/60 font-bold tracking-wider uppercase mb-2 block">What's On</span>
               </motion.div>
               <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary">
                  <ScrollRevealText>Events & HIghlights</ScrollRevealText>
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
                     whileHover={{ scale: 1.02, borderColor: "rgba(190, 52, 85, 0.5)" }} // Viva Magenta border
                     className="group relative border border-white/10 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 bg-white/5 backdrop-blur-xl overflow-hidden shadow-sm cursor-pointer w-full"
                  >
                     {/* Hover Background - Subtle Tint */}
                     <div
                        className={`absolute inset-0 ${event.color} -z-10 transition-opacity duration-700 opacity-0 group-hover:opacity-100`}
                     />

                     <div className="flex flex-col md:flex-row gap-8 relative z-10">
                        <div className="w-full md:w-1/4">
                           <span className="font-manrope text-sm font-bold tracking-widest text-accent-gold uppercase block mb-2">
                              {event.date}
                           </span>
                           <span className="inline-block px-3 py-1 bg-white/5 text-secondary rounded-full text-xs font-medium group-hover:bg-accent/20 transition-colors duration-300">
                              {event.category}
                           </span>
                        </div>

                        <div className="w-full md:w-3/4">
                           <h3 className="font-playfair text-3xl md:text-4xl text-secondary font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">
                              {event.title}
                           </h3>
                           <p className="font-manrope text-secondary/70 text-lg leading-relaxed max-w-2xl">
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
