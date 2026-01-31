"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealTextProps {
   children: string;
   className?: string;
   containerRef?: React.RefObject<HTMLElement>; // Optional container to track scroll within
}

export default function ScrollRevealText({ children, className = "", containerRef }: ScrollRevealTextProps) {
   const elementRef = useRef<HTMLSpanElement>(null);

   const { scrollYProgress } = useScroll({
      target: elementRef,
      offset: ["start end", "end start"],
   });

   // Map scroll progress to opacity/color fill
   // As the element scrolls up, it transitions from transparent/faded to full color
   const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0.1, 1]);

   const words = children.split(" ");

   return (
      <span ref={elementRef} className={`inline-block ${className}`}>
         {words.map((word, i) => (
            <Word key={i} word={word} index={i} progress={scrollYProgress} />
         ))}
      </span>
   );
}

const Word = ({ word, index, progress }: { word: string; index: number; progress: MotionValue<number> }) => {
   // Stagger sensitivity: each word fills in slightly later
   const start = 0.1 + index * 0.05;
   const end = start + 0.3;

   const opacity = useTransform(progress, [start, end], [0.1, 1]);

   return (
      <span className="relative inline-block mr-[0.25em]">
         <span className="absolute left-0 top-0 opacity-20">{word}</span>
         <motion.span style={{ opacity }}>{word}</motion.span>
      </span>
   );
};
