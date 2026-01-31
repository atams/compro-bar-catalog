"use client";

import { motion } from "framer-motion";

interface MarqueeTextProps {
   text: string;
   speed?: number;
   reverse?: boolean;
   className?: string;
}

export default function MarqueeText({ text, speed = 20, reverse = false, className = "" }: MarqueeTextProps) {
   const marqueeVariants = {
      animate: {
         x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
         transition: {
            x: {
               repeat: Infinity,
               repeatType: "loop" as const,
               duration: speed,
               ease: "linear" as const,
            },
         },
      },
   };

   return (
      <div className={`flex overflow-hidden whitespace-nowrap select-none ${className}`}>
         <motion.div
            variants={marqueeVariants}
            animate="animate"
            className="flex"
         >
            {/* Render text multiple times to ensure seamless loop */}
            {[...Array(4)].map((_, i) => (
               <span key={i} className="flex items-center">
                  <span className="mx-4">{text}</span>
                  <span className="mx-4 text-accent-gold opacity-30">•</span>
               </span>
            ))}
         </motion.div>
      </div>
   );
}
