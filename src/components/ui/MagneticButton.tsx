"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface MagneticButtonProps {
   children: ReactNode;
   className?: string;
   onClick?: () => void;
   strength?: number; // How strong the magnetic pull is
}

export default function MagneticButton({
   children,
   className = "",
   onClick,
   strength = 0.5,
}: MagneticButtonProps) {
   const ref = useRef<HTMLButtonElement>(null);

   const x = useMotionValue(0);
   const y = useMotionValue(0);

   // Smooth spring physics for the return movement
   const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
   const springX = useSpring(x, springConfig);
   const springY = useSpring(y, springConfig);

   const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!ref.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;

      x.set(distanceX * strength);
      y.set(distanceY * strength);
   };

   const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
   };

   return (
      <motion.button
         ref={ref}
         style={{ x: springX, y: springY }}
         className={`relative inline-flex items-center justify-center cursor-pointer ${className}`}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         onClick={onClick}
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
      >
         {children}
      </motion.button>
   );
}
