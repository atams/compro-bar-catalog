"use client";

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface TextRevealProps {
   text?: string; // Kept for backward compat, but we prefer children
   children?: ReactNode;
   className?: string;
   delay?: number;
   duration?: number;
   once?: boolean;
}

export default function TextReveal({
   text,
   children,
   className = "",
   delay = 0,
   duration = 0.5,
   once = true,
}: TextRevealProps) {
   const controls = useAnimation();
   const ref = useRef(null);
   const isInView = useInView(ref, { once });

   useEffect(() => {
      if (isInView) {
         controls.start("visible");
      } else {
         controls.start("hidden");
      }
   }, [isInView, controls]);

   const container: {
      hidden: Variant;
      visible: Variant;
   } = {
      hidden: {},
      visible: {
         transition: { staggerChildren: 0.05, delayChildren: delay },
      },
   };

   const child: {
      hidden: Variant;
      visible: Variant;
   } = {
      hidden: {
         opacity: 0,
         y: 20,
         transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
         },
      },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            duration: duration,
         },
      },
   };

   // Content to render
   const content = children || text;

   // If content is a simple string, do the character split animation
   if (typeof content === "string") {
      const words = content.split(" ");
      return (
         <motion.span
            ref={ref}
            className={`inline-block ${className}`}
            variants={container}
            initial="hidden"
            animate={controls}
         >
            {words.map((word, index) => (
               <span key={index} className="inline-block mr-[0.25em] whitespace-nowrap">
                  {word.split("").map((char, charIndex) => (
                     <motion.span
                        key={charIndex}
                        variants={child}
                        className="inline-block"
                     >
                        {char}
                     </motion.span>
                  ))}
               </span>
            ))}
         </motion.span>
      );
   }

   // If content is not a string (e.g. elements), do a simple block reveal
   return (
      <motion.div
         ref={ref}
         className={className}
         initial="hidden"
         animate={controls}
         variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
               opacity: 1,
               y: 0,
               transition: { duration: duration, delay: delay, ease: "easeOut" }
            }
         }}
      >
         {content}
      </motion.div>
   );
}
