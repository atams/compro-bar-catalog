"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Wine, CalendarDays, Ticket } from "lucide-react";
import Link from "next/link";

const BentoItem = ({
   title,
   subtitle,
   icon: Icon,
   href,
   className,
   delay
}: {
   title: string;
   subtitle: string;
   icon: any;
   href: string;
   className?: string;
   delay: number;
}) => (
   <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`group relative overflow-hidden bg-white/[0.03] hover:bg-white/[0.08] transition-colors duration-500 rounded-3xl p-8 border border-white/10 ${className}`}
   >
      <Link href={href} className="absolute inset-0 z-20" />

      <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">
         <div className="flex justify-between items-start">
            <div className="p-3 rounded-full bg-white/5 text-accent-gold group-hover:scale-110 transition-transform duration-500">
               <Icon size={24} />
            </div>
            <ArrowUpRight className="text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
         </div>

         <div>
            <h3 className="text-3xl font-playfair font-bold text-secondary mb-2 group-hover:text-white transition-colors">
               {title}
            </h3>
            <p className="text-sm font-manrope text-secondary/60 group-hover:text-secondary/80 transition-colors">
               {subtitle}
            </p>
         </div>
      </div>

      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
   </motion.div>
);

export default function NavigationHub() {
   return (
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 h-auto md:h-[600px]"
         >
            {/* Main Feature - Catalog */}
            <BentoItem
               title="The Catalog"
               subtitle="Explore our signature curated cocktails"
               icon={Wine}
               href="#gallery"
               className="md:col-span-3 md:row-span-2 bg-gradient-to-b from-white/[0.05] to-transparent"
               delay={0.1}
            />

            {/* Action - Reservation */}
            <BentoItem
               title="Reserve"
               subtitle="Secure your table for tonight"
               icon={CalendarDays}
               href="#contact"
               className="md:col-span-3 md:row-span-1"
               delay={0.2}
            />

            {/* Action - Events */}
            <BentoItem
               title="Events"
               subtitle="Jazz nights & Masterclasses"
               icon={Ticket}
               href="#projects"
               className="md:col-span-3 md:row-span-1"
               delay={0.3}
            />
         </motion.div>
      </section>
   );
}
