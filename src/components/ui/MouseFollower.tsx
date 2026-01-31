"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseFollower() {
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
         setMousePosition({ x: e.clientX, y: e.clientY });
         setIsVisible(true);
      };

      const handleMouseLeave = () => {
         setIsVisible(false);
      };

      window.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
         window.removeEventListener("mousemove", handleMouseMove);
         document.removeEventListener("mouseleave", handleMouseLeave);
      };
   }, []);

   return (
      <>
         {/* Outer ring - larger, slower */}
         <motion.div
            className="pointer-events-none fixed z-[9999] mix-blend-screen"
            animate={{
               x: mousePosition.x - 20,
               y: mousePosition.y - 20,
               opacity: isVisible ? 0.6 : 0,
            }}
            transition={{
               type: "spring",
               damping: 30,
               stiffness: 200,
               mass: 0.5,
            }}
         >
            <div className="w-10 h-10 border-2 border-accent rounded-full" />
         </motion.div>

         {/* Inner dot - smaller, faster */}
         <motion.div
            className="pointer-events-none fixed z-[9999] mix-blend-screen"
            animate={{
               x: mousePosition.x - 4,
               y: mousePosition.y - 4,
               opacity: isVisible ? 1 : 0,
            }}
            transition={{
               type: "spring",
               damping: 40,
               stiffness: 400,
               mass: 0.2,
            }}
         >
            <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_rgba(237,126,0,0.8)]" />
         </motion.div>

         {/* Glow effect */}
         <motion.div
            className="pointer-events-none fixed z-[9998] mix-blend-screen blur-xl"
            animate={{
               x: mousePosition.x - 30,
               y: mousePosition.y - 30,
               opacity: isVisible ? 0.3 : 0,
            }}
            transition={{
               type: "spring",
               damping: 25,
               stiffness: 150,
               mass: 0.8,
            }}
         >
            <div className="w-[60px] h-[60px] bg-accent rounded-full" />
         </motion.div>
      </>
   );
}
