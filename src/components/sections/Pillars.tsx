"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";



interface PanelData {
   id: number;
   title: string;
   subtitle: string;
   description: string;
   hex: string;
   textColor: string;
   src: string;
}

const panels: PanelData[] = [
   {
      id: 1,
      title: "Compassion",
      subtitle: "Heart of our Mission",
      description: "We believe in the power of empathy to heal. Our volunteers work tirelessly to provide not just aid, but genuine human connection to those in need.",
      hex: "#EADADA", // Pink
      textColor: "text-[#5D4037]",
      src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1000&auto=format&fit=crop",
   },
   {
      id: 2,
      title: "Impact",
      subtitle: "Creating Measurable Change",
      description: "Every donation and hour served translates into tangible improvement in lives. We track our impact to ensure maximum effectiveness in our programs.",
      hex: "#DCEAF3", // Blue
      textColor: "text-[#37474F]",
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop",
   },
   {
      id: 3,
      title: "Community",
      subtitle: "Stronger Together",
      description: "We are building a network of support that empowers local leaders and fosters resilience from within the communities we serve.",
      hex: "#F3EBC8", // Yellow
      textColor: "text-[#5D4037]",
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop",
   },
   {
      id: 4,
      title: "Future",
      subtitle: "Building Tomorrow",
      description: "Investing in sustainable solutions and education for the next generation, ensuring that our impact lasts far beyond today.",
      hex: "#CFD9C8", // Green
      textColor: "text-[#2E4F2F]",
      src: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1000&auto=format&fit=crop",
   },
];

const PillarCard = ({ panel }: { panel: PanelData }) => {
   return (
      <div className={`w-screen h-screen shrink-0 flex flex-col md:flex-row items-center md:justify-center justify-start p-6 pt-32 md:p-24 md:pt-24 relative overflow-hidden ${panel.hex}`}>

         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-2/3 h-full bg-linear-to-l from-white/20 to-transparent pointer-events-none" />

         <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-24 relative z-10 h-full md:h-auto">
            {/* Content */}
            <div className="w-full md:w-1/2 space-y-4 md:space-y-8 shrink-0">
               <div className="flex items-center gap-4 opacity-50">
                  <span className={`text-4xl md:text-6xl font-playfair font-black opacity-20 ${panel.textColor}`}>0{panel.id}</span>
                  <span className={`h-px w-16 md:w-24 bg-current ${panel.textColor}`} />
               </div>

               <h2 className={`text-5xl md:text-8xl font-playfair font-black leading-tight ${panel.textColor}`}>
                  {panel.title}
               </h2>

               <div className="space-y-2 md:space-y-4 max-w-lg">
                  <h3 className={`text-lg md:text-2xl font-bold font-manrope ${panel.textColor} opacity-80 uppercase tracking-widest`}>
                     {panel.subtitle}
                  </h3>
                  <p className={`text-lg md:text-2xl leading-relaxed font-manrope ${panel.textColor}`}>
                     {panel.description}
                  </p>
               </div>
            </div>

            {/* Image "Film Strip" Effect */}
            <div className="w-full md:w-1/2 h-[30vh] md:h-auto md:aspect-square relative shrink-0">
               <div className="w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
                  <Image
                     src={panel.src}
                     alt={panel.title}
                     fill
                     sizes="(max-width: 768px) 100vw, 50vw"
                     className="object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                  />
               </div>
               {/* Decorative Elements */}
               <div className={`absolute -bottom-8 -left-8 w-24 h-24 md:w-32 md:h-32 rounded-full border-2 ${panel.textColor} opacity-20 animate-spin-slow`} />
            </div>
         </div>
      </div>
   );
};

export default function Pillars() {
   const containerRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"],
   });

   const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-300vw"]); // Move exactly 3 screen widths to show the 4th panel


   return (
      <section ref={containerRef} className="relative h-[300vh] bg-[#F0EEE9]">
         <div className="sticky top-0 h-screen overflow-hidden flex items-center">
            <motion.div
               style={{ x }}
               className="flex"
            >
               {panels.map((panel) => (
                  <PillarCard key={panel.id} panel={panel} />
               ))}
            </motion.div>

            {/* Progress Bar/Scroll Indicator */}
            <div className="absolute bottom-12 left-12 right-12 md:left-24 md:right-24 h-1 bg-black/5 rounded-full overflow-hidden z-20">
               <motion.div
                  style={{ scaleX: scrollYProgress }}
                  className="h-full bg-primary origin-left"
               />
            </div>
         </div>
      </section>
   );
}
