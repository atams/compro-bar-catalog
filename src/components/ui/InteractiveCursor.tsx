"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function InteractiveCursor() {
   const [isHovering, setIsHovering] = useState(false);

   const cursorX = useMotionValue(-100);
   const cursorY = useMotionValue(-100);

   const springConfig = { damping: 25, stiffness: 700 };
   const cursorXSpring = useSpring(cursorX, springConfig);
   const cursorYSpring = useSpring(cursorY, springConfig);

   useEffect(() => {
      const moveCursor = (e: MouseEvent) => {
         cursorX.set(e.clientX);
         cursorY.set(e.clientY);

         // Check if hovering over clickable elements
         const target = e.target as HTMLElement;
         const isClickable =
            target.tagName === 'A' ||
            target.tagName === 'BUTTON' ||
            target.closest('a') !== null ||
            target.closest('button') !== null ||
            target.classList.contains('cursor-magnetic');

         setIsHovering(!!isClickable);
      };

      window.addEventListener("mousemove", moveCursor);
      return () => window.removeEventListener("mousemove", moveCursor);
   }, [cursorX, cursorY]);

   const trailSpring = { damping: 15, stiffness: 100 };
   const trail1X = useSpring(cursorX, trailSpring);
   const trail1Y = useSpring(cursorY, trailSpring);
   const trail2X = useSpring(trail1X, trailSpring);
   const trail2Y = useSpring(trail1Y, trailSpring);

   return (
      <>
         {/* Trailing Dots */}
         <motion.div
            className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-9998 bg-accent-gold/20"
            style={{ translateX: trail1X, translateY: trail1Y, x: "-50%", y: "-50%" }}
         />
         <motion.div
            className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-9997 bg-accent-gold/10"
            style={{ translateX: trail2X, translateY: trail2Y, x: "-50%", y: "-50%" }}
         />

         {/* Main Cursor */}
         <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-9999 mix-blend-difference hidden md:flex items-center justify-center backdrop-blur-sm bg-white"
            style={{
               translateX: cursorXSpring,
               translateY: cursorYSpring,
               x: "-50%",
               y: "-50%",
            }}
            animate={{
               scale: isHovering ? 2.5 : 1,
               opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
         >
            {isHovering && (
               <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full h-full bg-white rounded-full opacity-20"
               />
            )}
         </motion.div>
      </>
   );
}
