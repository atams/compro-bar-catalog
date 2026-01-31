"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Button from "@/components/ui/Button";

// Card Data mimicking the screenshots
interface CardData {
   id: number;
   type: string;
   title?: string;
   subtitle?: string;
   text?: string;
   color?: string;
   src?: string;
}

const cards: CardData[] = [
   {
      id: 1,
      type: "blue-card",
      title: "NO.7",
      subtitle: "BALANCED MEDIUM",
      text: "GREAT FOR CAFÉ CRÈME",
      color: "bg-[#4285F4]", // Bright Blue
   },
   {
      id: 2,
      type: "image",
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop", // Puffer jacket vibe
      title: "Product Section",
   },
   {
      id: 3,
      type: "round",
      src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1000&auto=format&fit=crop", // Ice cream vibe
      title: "Creamy Ice Cream",
   }
];

const Card = ({ card, index, scrollYProgress }: { card: CardData, index: number, scrollYProgress: MotionValue }) => {
   // Paralax/Scale logic
   // Card 1 peaks at ~35%, Card 2 at ~60%, Card 3 at ~85%
   const step = 0.25;
   const start = 0.2 + (index * step);
   const peak = start + 0.15;
   const end = peak + 0.15;

   const scale = useTransform(scrollYProgress, [start, peak, end], [0.8, 1.2, 0.8]);
   const opacity = useTransform(scrollYProgress, [start - 0.1, peak, end + 0.1], [0.5, 1, 1]);

   return (
      <motion.div
         style={{ scale, opacity }}
         className="min-w-[60vw] md:min-w-[30vw] h-[50vh] flex items-center justify-center p-4"
      >
         {/* Custom Card Styling based on type */}
         {card.type === 'blue-card' && (
            <div className={`w-full h-full ${card.color} p-8 flex flex-col justify-between shadow-2xl relative`}>
               <div className="absolute top-4 right-4 text-4xl">↗</div>
               <div>
                  <h3 className="text-6xl font-black mb-2">{card.title}</h3>
                  <p className="font-bold tracking-widest text-xl">{card.subtitle}</p>
               </div>
               <div className="border-t-2 border-black pt-4">
                  <p className="text-xs font-bold tracking-[0.2em]">{card.text}</p>
               </div>
            </div>
         )}

         {card.type === 'image' && card.src && (
            <div className="w-full h-full relative overflow-hidden bg-gray-200">
               <Image
                  src={card.src}
                  alt={card.title || "Product"}
                  fill
                  sizes="(max-width: 768px) 80vw, 30vw"
                  className="object-cover"
               />
               <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <p className="text-white font-playfair text-4xl italic text-center p-4">
                     This is the Product section...
                  </p>
               </div>
            </div>
         )}

         {card.type === 'round' && card.src && (
            <div className="w-[40vh] h-[40vh] rounded-full overflow-hidden relative shadow-2xl border-4 border-[#D2B48C]">
               <Image
                  src={card.src}
                  alt={card.title || "Ice Cream"}
                  fill
                  sizes="40vh"
                  className="object-cover"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/20 rounded-full px-8">Order Now</Button>
               </div>
            </div>
         )}
      </motion.div>
   )
}

export default function StickyGallery() {
   const containerRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"],
   });

   // 1. Text Animation: Big -> Small, Fade Out, Blur
   const textScale = useTransform(scrollYProgress, [0, 0.2], [1, 4.5]); // Zoom in faster
   const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]); // Fade out faster
   const textBlur = useTransform(scrollYProgress, [0, 0.15], ["0px", "20px"]); // Blur faster

   // Responsive target for scroll end
   // Mobile (Cards ~80vw): Need to move approx -150vw to reach end
   // Desktop (Cards ~30vw): Need to move approx -35vw to center last card
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
   }, []);

   const targetX = isMobile ? "-150vw" : "-35vw";

   // 2. Gallery Translation: Right -> Left
   // Adjusted to ensure the last card enters and settles nicely
   const galleryX = useTransform(scrollYProgress, [0.15, 1], ["50vw", targetX]); // Start movement slightly earlier

   return (
      <section
         ref={containerRef}
         id="sticky-gallery"
         className="relative h-[200vh] bg-[#5D4037]" // Mocha Mousse background
      >
         {/* Smooth Transition Gradient from Pillars (Light) to Gallery (Dark) */}
         <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#F0EEE9] to-transparent z-20 pointer-events-none" />

         <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Animated Title */}
            <motion.div
               style={{ scale: textScale, opacity: textOpacity, filter: textBlur }}
               className="absolute z-10 text-center px-4"
            >
               <h2 className="text-[8vw] leading-[0.9] font-manrope font-normal text-white tracking-tight">
                  Thoughtfully-shaped sections<br />and containers
               </h2>
            </motion.div>

            {/* Horizontal Scroll Strip */}
            <motion.div
               style={{ x: galleryX }}
               className="flex items-center gap-12 absolute top-1/2 -translate-y-1/3 left-0 pl-[10vw]"
            >
               {cards.map((card, index) => (
                  <Card key={card.id} card={card} index={index} scrollYProgress={scrollYProgress} />
               ))}
            </motion.div>
         </div>
      </section>
   );
}
