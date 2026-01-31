"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface PanelProps {
   id: number;
   title: string;
   subtitle: string;
   color: string;
   textColor: string;
   active: boolean;
   onClick: () => void;
}

const panels = [
   {
      id: 1,
      title: "Compassion",
      subtitle: "Heart of our Mission",
      color: "bg-[#EADADA]", // Raindrops on Roses (Pink)
      textColor: "text-[#5D4037]",
   },
   {
      id: 2,
      title: "Impact",
      subtitle: "Creating Change",
      color: "bg-[#DCEAF3]", // Ice Melt (Blue)
      textColor: "text-[#37474F]",
   },
   {
      id: 3,
      title: "Community",
      subtitle: "Stronger Together",
      color: "bg-[#F3EBC8]", // Lemon Icing (Yellow)
      textColor: "text-[#5D4037]",
   },
   {
      id: 4,
      title: "Future",
      subtitle: "Building Tomorrow",
      color: "bg-[#CFD9C8]", // Almost Aqua (Green)
      textColor: "text-[#2E4F2F]",
   },
];

const Panel = ({ id, title, subtitle, color, textColor, active, onClick }: PanelProps) => {
   return (
      <motion.div
         layout
         onClick={onClick}
         className={`relative h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-out ${active ? "flex-[3]" : "flex-1"
            } ${color}`}
         onMouseEnter={onClick}
      >
         {/* Background Texture Overlay */}
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

         {/* Content Container */}
         <div className="absolute inset-0 flex flex-col justify-between p-8">

            {/* Top Number */}
            <div className={`text-xl font-bold ${textColor} opacity-60`}>
               0{id}
            </div>

            {/* Main Content */}
            <div className="relative z-10">
               <motion.div
                  layout
                  className="flex items-end justify-between"
               >
                  <h3 className={`text-4xl md:text-6xl font-playfair font-bold leading-none ${textColor} whitespace-nowrap origin-bottom-left`}>
                     {active ? (
                        <motion.span
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ delay: 0.2 }}
                        >
                           {title}
                        </motion.span>
                     ) : (
                        <span className="md:hidden">{title.charAt(0)}</span>
                     )}
                  </h3>

                  {/* Vertical Text for Inactive State (Desktop) */}
                  {!active && (
                     <div className="hidden md:block absolute bottom-0 left-12 origin-bottom-left -rotate-90 translate-x-full">
                        <span className={`text-4xl font-playfair font-bold ${textColor} whitespace-nowrap`}>
                           {title}
                        </span>
                     </div>
                  )}

                  <AnimatePresence>
                     {active && (
                        <motion.div
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: -10 }}
                           transition={{ delay: 0.3 }}
                           className="hidden md:block"
                        >
                           <div className={`w-12 h-12 rounded-full border border-current ${textColor} flex items-center justify-center`}>
                              <ArrowUpRight size={24} />
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </motion.div>

               <AnimatePresence>
                  {active && (
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.2 }}
                        className={`mt-4 text-lg md:text-xl font-medium ${textColor} max-w-md`}
                     >
                        {subtitle}
                     </motion.p>
                  )}
               </AnimatePresence>
            </div>
         </div>
      </motion.div>
   );
};

export default function ExpandingHero() {
   const [activeId, setActiveId] = useState(1);

   return (
      <div className="w-full flex flex-col md:flex-row gap-4 p-4 md:p-6 select-none">
         {panels.map((panel) => (
            <Panel
               key={panel.id}
               {...panel}
               active={panel.id === activeId}
               onClick={() => setActiveId(panel.id)}
            />
         ))}
      </div>
   );
}
