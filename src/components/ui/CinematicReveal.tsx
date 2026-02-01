"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface CinematicRevealProps {
   children: ReactNode;
   className?: string;
   direction?: "up" | "down" | "left" | "right";
   delay?: number;
   duration?: number;
}

export default function CinematicReveal({
   children,
   className = "",
   direction = "up",
   delay = 0,
   duration = 0.8,
}: CinematicRevealProps) {

   const variants: Variants = {
      hidden: {
         opacity: 0,
         clipPath:
            direction === "up" ? "inset(100% 0 0 0)" :
               direction === "down" ? "inset(0 0 100% 0)" :
                  direction === "left" ? "inset(0 0 0 100%)" :
                     "inset(0 100% 0 0)",
         y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
         x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
      },
      visible: {
         opacity: 1,
         clipPath: "inset(0 0 0 0)",
         y: 0,
         x: 0,
         transition: {
            duration,
            delay,
            ease: "easeOut",
         },
      },
   };

   return (
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.1 }} // Changed margin to amount for better mobile trigger
         variants={variants}
         className={className}
      >
         {children}
      </motion.div>
   );
}
