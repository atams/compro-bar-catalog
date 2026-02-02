"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useClient } from "@/context/ClientContext";

export default function LoadingScreen() {
   const { name } = useClient();
   const [isComplete, setIsComplete] = useState(false);
   const brandName = name || "MIDNIGHT";

   useEffect(() => {
      const timer = setTimeout(() => setIsComplete(true), 2500);
      return () => clearTimeout(timer);
   }, []);

   const containerVariants = {
      initial: {
         y: 0,
         opacity: 1
      },
      exit: {
         y: "-100%",
         transition: {
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1] as const,
            when: "afterChildren" as const
         }
      }
   };

   const letterVariants = {
      initial: { y: 100, opacity: 0 },
      animate: (i: number) => ({
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
            delay: i * 0.1
         }
      })
   };

   const lineVariants = {
      initial: { scaleX: 0 },
      animate: {
         scaleX: 1,
         transition: { duration: 1.5, ease: "easeInOut" as const, delay: 0.5 }
      }
   };

   return (
      <AnimatePresence>
         {!isComplete && (
            <motion.div
               variants={containerVariants}
               initial="initial"
               exit="exit"
               style={{ backgroundColor: "#000000", zIndex: 99999, opacity: 1 }}
               className="fixed inset-[-100px] bg-black flex flex-col justify-center items-center overflow-hidden"
            >
               {/* Top Label */}
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-12 flex flex-col items-center gap-2"
               >
                  <span className="font-manrope uppercase tracking-[0.4em] text-[10px] md:text-xs text-accent-gold/60">
                     The Art of Mixology
                  </span>
                  <div className="w-px h-8 bg-accent-gold/20" />
               </motion.div>

               {/* Letter Reveal */}
               <div className="flex overflow-hidden py-4">
                  {brandName.split("").map((letter, i) => (
                     <motion.span
                        key={i}
                        custom={i}
                        variants={letterVariants}
                        initial="initial"
                        animate="animate"
                        className={`font-syne font-black text-stroke-bright leading-none tracking-tightest uppercase select-none mask-fog-v ${brandName.length > 10 ? "text-[8vw] md:text-[5vw]" : (brandName.length > 6 ? "text-[12vw] md:text-[8vw]" : "text-[15vw] md:text-[10vw]")}`}
                     >
                        {letter}
                     </motion.span>
                  ))}
               </div>

               {/* Decorative Line */}
               <motion.div
                  variants={lineVariants}
                  initial="initial"
                  animate="animate"
                  className="w-48 h-px bg-accent-gold mt-4 origin-center"
               />

               {/* Bottom Branding */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-12 font-manrope text-[10px] md:text-xs uppercase tracking-widest text-white/30"
               >
                  Established 2026 — Jakarta
               </motion.div>

               {/* Decorative Gradients */}
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-gold/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />
            </motion.div>
         )}
      </AnimatePresence>
   );
}
