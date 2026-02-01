"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Wine, CalendarDays, Ticket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const BentoItem = ({
   title,
   subtitle,
   icon: Icon,
   href,
   className,
   delay,
   image
}: {
   title: string;
   subtitle: string;
   icon: any;
   href: string;
   className?: string;
   delay: number;
   image: string;
}) => (
   <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`group relative overflow-hidden bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-700 rounded-3xl p-8 border border-white/10 ${className}`}
   >
      <Link href={href} className="absolute inset-0 z-20" />

      {/* Background Image Reveal */}
      <div className="absolute inset-0 z-0">
         <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-20 group-hover:opacity-40 grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000"
         />
         <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/20 transition-colors duration-700" />
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">
         <div className="flex justify-between items-start">
            <div className="p-3 rounded-full bg-white/5 backdrop-blur-md text-accent-gold group-hover:bg-accent-gold group-hover:text-primary transition-all duration-500">
               <Icon size={24} />
            </div>
            <ArrowUpRight className="text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
         </div>

         <div>
            <h3 className="text-3xl font-syne font-bold text-white mb-2 uppercase">
               {title}
            </h3>
            <p className="text-sm font-sans text-secondary/60 group-hover:text-white/80 transition-colors">
               {subtitle}
            </p>
         </div>
      </div>

      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 via-transparent to-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
   </motion.div>
);

export default function NavigationHub() {
   const sectionRef = useRef<HTMLDivElement>(null);

   return (
      <section ref={sectionRef} className="relative py-32 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="relative z-10 grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 h-auto md:h-[650px]"
         >
            {/* Main Feature - Catalog */}
            <BentoItem
               title="The Catalog"
               subtitle="Explore our signature curated cocktails"
               icon={Wine}
               href="/catalog"
               image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2600&auto=format&fit=crop"
               className="md:col-span-3 md:row-span-2"
               delay={0.1}
            />

            {/* Action - Reservation */}
            <BentoItem
               title="Reserve"
               subtitle="Secure your table for tonight"
               icon={CalendarDays}
               href="/reserve"
               image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2600&auto=format&fit=crop"
               className="md:col-span-3 md:row-span-1"
               delay={0.2}
            />

            {/* Action - Events */}
            <BentoItem
               title="Events"
               subtitle="Jazz nights & Masterclasses"
               icon={Ticket}
               href="/events"
               image="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=2600&auto=format&fit=crop"
               className="md:col-span-3 md:row-span-1"
               delay={0.3}
            />
         </motion.div>
      </section>
   );
}
