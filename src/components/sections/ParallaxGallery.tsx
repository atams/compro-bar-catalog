"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const catalogItems = [
   {
      id: 1,
      title: "Vesper Martini",
      price: "$24",
      ingredients: ["Gordon's Gin", "Smirnoff Vodka", "Lillet Blanc"],
      description: "Shaken, not stirred. A cinematic classic with a sharp, botanical finish.",
      image: "https://images.unsplash.com/photo-1575023782549-62ca0d244b39?q=80&w=2600&auto=format&fit=crop",
   },
   {
      id: 2,
      title: "Smoked Old Fashioned",
      price: "$28",
      ingredients: ["Bulleit Bourbon", "Maple Syrup", "Angostura Bitters", "Cedar Smoke"],
      description: "Hand-chipped ice and aromatic wood smoke for a deep, campfire finish.",
      image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=2600&auto=format&fit=crop",
   },
   {
      id: 3,
      title: "Midnight Negroni",
      price: "$26",
      ingredients: ["Tanqueray 10", "Black Truffle Campari", "Carpano Antica"],
      description: "A dark, earthy twist on the Italian classic using truffle-infused spirits.",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2600&auto=format&fit=crop",
   },
   {
      id: 4,
      title: "Golden Hour",
      price: "$32",
      ingredients: ["Louis XIII Cognac", "Saffron Honey", "24k Gold Flake"],
      description: "Our most exclusive creation. A liquid sunset in a glass.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2600&auto=format&fit=crop",
   },
];

export default function ParallaxGallery() {
   const targetRef = useRef<HTMLDivElement>(null);
   const containerRef = useRef<HTMLDivElement>(null);
   const [scrollDistance, setScrollDistance] = useState(0);

   const { scrollYProgress } = useScroll({
      target: targetRef,
   });

   useEffect(() => {
      const updateWidth = () => {
         if (containerRef.current) {
            const width = containerRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;
            setScrollDistance(Math.max(0, width - viewportWidth + 48));
         }
      };

      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
   }, []);

   const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
   const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

   return (
      <section ref={targetRef} id="gallery" className="relative bg-primary" style={{ height: "300vh" }}>
         <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            {/* Section Title Background (Parallax + Masked) */}
            <motion.div
               style={{ x: bgX }}
               className="absolute top-12 left-12 z-0 opacity-10 mask-fog-h"
            >
               <h2 className="font-syne text-[20vw] font-black text-white leading-none tracking-tightest uppercase whitespace-nowrap text-stroke">
                  THE CATALOG
               </h2>
            </motion.div>

            <motion.div ref={containerRef} style={{ x }} className="flex gap-24 px-12 md:px-24 items-start relative z-10">
               {catalogItems.map((item, index) => (
                  <CatalogCard key={item.id} item={item} index={index} />
               ))}

               {/* Final CTA Card */}
               <div className="relative w-[300px] md:w-[600px] shrink-0 flex flex-col items-center justify-center">
                  <Link href="/catalog" className="group/cta relative w-full aspect-4/5 md:aspect-16/10 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-8 overflow-hidden hover:bg-white/10 transition-all duration-700 glow-button">
                     <div className="absolute inset-0 bg-radial-gradient from-accent-gold/20 to-transparent opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700" />

                     <div className="relative z-10 flex flex-col items-center gap-4">
                        <div className="w-20 h-20 rounded-full border border-accent-gold/20 flex items-center justify-center group-hover/cta:scale-110 transition-transform duration-700">
                           <ArrowRight className="text-accent-gold w-8 h-8 group-hover/cta:translate-x-2 transition-transform duration-500" strokeWidth={1} />
                        </div>
                        <h3 className="font-syne text-5xl text-white text-center font-black uppercase tracking-tightest">Explore Full <span className="text-accent-gold italic">Catalog</span></h3>
                        <p className="font-sans text-accent-gold/60 text-[10px] uppercase tracking-[0.4em] font-bold">Signature Collections</p>
                     </div>
                  </Link>
               </div>
            </motion.div>

            {/* Horizontal Progress Bar */}
            <div className="absolute bottom-12 left-12 right-12 h-px bg-white/10 z-20 overflow-hidden">
               <motion.div
                  style={{ scaleX: scrollYProgress }}
                  className="h-full bg-accent-gold origin-left w-full"
               />
            </div>
         </div>
      </section>
   );
}

function CatalogCard({ item, index }: { item: any; index: number }) {
   return (
      <div className="relative w-[300px] md:w-[600px] shrink-0 flex flex-col items-center justify-center group/card perspective-1000">
         {/* Parallax Image Layer with 3D Flip */}
         <motion.div
            whileHover={{ rotateY: 10, rotateX: -5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-4/5 md:aspect-16/10 overflow-hidden group rounded-2xl transform-style-3d shadow-2xl"
         >
            <motion.div
               whileHover={{ scale: 1.1 }}
               transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
               className="relative w-full h-full"
            >
               <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700"
               />

               {/* Gradual Blur Overlay */}
               <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/10 to-primary/80" />
               <div className="absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

               {/* Label Reveal */}
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="font-syne italic font-bold text-white text-4xl border-b border-accent-gold/40 pb-2 uppercase tracking-tightest">Crafted</span>
               </div>
            </motion.div>

            {/* Price Tag Overlay */}
            <div className="absolute top-6 right-6 bg-primary/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 z-20">
               <span className="font-sans text-accent-gold text-sm font-black tracking-widest uppercase">{item.price}</span>
            </div>
         </motion.div>

         {/* Content Details */}
         <div className="mt-12 w-full text-left md:flex justify-between items-start gap-12">
            <div className="max-w-md">
               <h3 className="font-syne text-4xl md:text-5xl text-white mb-4 leading-[0.85] font-black uppercase tracking-tightest">
                  {item.title}
               </h3>
               <p className="text-secondary/60 font-sans text-sm md:text-base leading-relaxed mb-6">
                  {item.description}
               </p>

               <div className="flex flex-wrap gap-2">
                  {item.ingredients.map((ing: string) => (
                     <span key={ing} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-secondary/60 font-bold font-sans">
                        {ing}
                     </span>
                  ))}
               </div>
            </div>

            <div className="mt-8 md:mt-0 opacity-40 hover:opacity-100 transition-opacity">
               <button className="group flex items-center gap-4">
                  <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-accent-gold group-hover:tracking-[0.6em] transition-all font-bold">Order</span>
                  <div className="w-12 h-px bg-accent-gold" />
               </button>
            </div>
         </div>

         {/* Background Number */}
         <span className="absolute -top-12 -left-12 font-syne italic font-black text-8xl text-white/5 select-none z-[-1] tracking-tightest">
            0{index + 1}
         </span>
      </div>
   );
}
