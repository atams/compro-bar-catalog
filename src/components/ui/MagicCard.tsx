"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent, ReactNode, useCallback, useRef } from "react";

interface MagicCardProps {
   children: ReactNode;
   className?: string;
   gradientSize?: number;
   gradientColor?: string;
   gradientOpacity?: number;
   enableTilt?: boolean;
}

export const MagicCard = ({
   children,
   className = "",
   gradientSize = 250,
   gradientColor = "#BE3455", // Viva Magenta default
   gradientOpacity = 0.15,
   enableTilt = true,
}: MagicCardProps) => {
   const cardRef = useRef<HTMLDivElement>(null);

   // Mouse position values for the spotlight
   const mouseX = useMotionValue(-gradientSize);
   const mouseY = useMotionValue(-gradientSize);

   // Tilt values
   const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
   const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

   // Spotlight background template
   const background = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)`;

   const handleMouseMove = useCallback(
      (e: MouseEvent<HTMLDivElement>) => {
         const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
         const x = e.clientX - left;
         const y = e.clientY - top;

         // Update spotlight position
         mouseX.set(x);
         mouseY.set(y);

         // Calculate tilt
         if (enableTilt) {
            const centerX = width / 2;
            const centerY = height / 2;
            const rotateXValue = ((y - centerY) / centerY) * -5; // Max 5 degrees
            const rotateYValue = ((x - centerX) / centerX) * 5;

            rotateX.set(rotateXValue);
            rotateY.set(rotateYValue);
         }
      },
      [mouseX, mouseY, rotateX, rotateY, enableTilt]
   );

   const handleMouseLeave = useCallback(() => {
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
      rotateX.set(0);
      rotateY.set(0);
   }, [mouseX, mouseY, rotateX, rotateY, gradientSize]);

   return (
      <motion.div
         ref={cardRef}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         style={{
            perspective: 1000,
            transformStyle: "preserve-3d",
            rotateX: enableTilt ? rotateX : 0,
            rotateY: enableTilt ? rotateY : 0,
         }}
         className={`group relative flex overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md ${className}`}
      >
         {/* Spotlight Effect Layer */}
         <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
               background: background,
               opacity: gradientOpacity,
            }}
         />

         {/* Border Glow Layer (using the same spotlight source but masked to border) */}
         <motion.div
            className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
               background: background,
               maskImage: "linear-gradient(black, black), content-box",
               maskComposite: "exclude",
               WebkitMaskComposite: "xor",
               opacity: 0.5,
            }}
         />

         <div className="relative z-10 w-full">{children}</div>
      </motion.div>
   );
};

export const MagicGrid = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
   return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
         {children}
      </div>
   );
};
