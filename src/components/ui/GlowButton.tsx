"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

interface GlowButtonProps {
   children: React.ReactNode;
   onClick?: () => void;
   className?: string;
}

export default function GlowButton({ children, onClick, className = "" }: GlowButtonProps) {
   const buttonRef = useRef<HTMLButtonElement>(null);
   const [isHovered, setIsHovered] = useState(false);

   // Magnetic effect
   const x = useMotionValue(0);
   const y = useMotionValue(0);

   const springConfig = { damping: 15, stiffness: 150 };
   const springX = useSpring(x, springConfig);
   const springY = useSpring(y, springConfig);

   const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      x.set(distanceX * 0.3);
      y.set(distanceY * 0.3);
   };

   const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
      setIsHovered(false);
   };

   return (
      <motion.button
         ref={buttonRef}
         onMouseMove={handleMouseMove}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={handleMouseLeave}
         onClick={onClick}
         style={{ x: springX, y: springY }}
         className={`relative px-8 py-3 bg-primary border border-white/10 rounded-full group overflow-hidden transition-colors ${className}`}
      >
         {/* Ambient Glow */}
         <motion.div
            animate={{
               opacity: isHovered ? 0.3 : 0,
               scale: isHovered ? 1.5 : 1,
            }}
            className="absolute inset-0 bg-accent-gold blur-xl pointer-events-none"
         />

         {/* Radiant Border Light */}
         <div className="absolute inset-0 rounded-full p-px bg-linear-to-r from-transparent via-accent-gold/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

         {/* Content */}
         <span className="relative z-10 font-sans uppercase tracking-[0.4em] text-[10px] font-bold text-white group-hover:text-accent-gold transition-colors">
            {children}
         </span>
      </motion.button>
   );
}
