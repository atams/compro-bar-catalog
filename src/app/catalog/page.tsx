"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useRef } from "react";

const fullMenu = [
   // ... (same as before or slightly truncated if needed, keeping full for now as it's the catalog page)
   {
      id: 1,
      title: "Vesper Martini",
      category: "The Classics",
      price: "$24",
      description: "Gordon's Gin, Smirnoff Vodka, Lillet Blanc. Shaken, not stirred.",
      image: "https://images.unsplash.com/photo-1575023782549-62ca0d244b39?q=80&w=2600&auto=format&fit=crop",
      popular: true
   },
   {
      id: 2,
      title: "Smoked Old Fashioned",
      category: "Whiskey Collection",
      price: "$28",
      description: "Bulleit Bourbon, Maple Syrup, Cedar Smoke. A deep, campfire finish.",
      image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=2600&auto=format&fit=crop",
      popular: true
   },
   {
      id: 3,
      title: "Midnight Negroni",
      category: "Aperitivo",
      price: "$26",
      description: "Tanqueray 10, Black Truffle Campari, Carpano Antica.",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2600&auto=format&fit=crop"
   },
   {
      id: 4,
      title: "Golden Hour",
      category: "Exclusives",
      price: "$32",
      description: "Louis XIII Cognac, Saffron Honey, 24k Gold Flake.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2600&auto=format&fit=crop",
      popular: true
   },
   {
      id: 5,
      title: "Velvet Sour",
      category: "The Classics",
      price: "$22",
      description: "Pisco, Hibiscus Syrup, Egg White, Lime. Silky and floral.",
      image: "https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=2600&auto=format&fit=crop"
   },
   {
      id: 6,
      title: "Truffle Manhattan",
      category: "Whiskey Collection",
      price: "$30",
      description: "Rye Whiskey, White Truffle Bitters, Amarena Cherry.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2600&auto=format&fit=crop"
   }
];

import { ClientProvider } from "@/context/ClientContext";
import { getClientConfig } from "@/config/clients";
import PageLayout from "@/components/layout/PageLayout";

export default function CatalogPage() {
   const containerRef = useRef<HTMLDivElement>(null);
   const config = getClientConfig("midnight"); // Default for generic catalog

   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
   });

   const bgy = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
   const bgOpacity = useTransform(scrollYProgress, [0, 0.4], [0.05, 0]);

   return (
      <ClientProvider config={config}>
         <PageLayout>
            <div ref={containerRef} className="min-h-screen bg-primary text-white selection:bg-accent-gold selection:text-primary pt-32 pb-24 px-6 relative overflow-hidden">
               {/* Parallax Background Text (Stroked & Masked) */}
               <motion.div
                  style={{ y: bgy, opacity: bgOpacity }}
                  className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none select-none mask-fog-v"
               >
                  <h1 className="font-syne text-[30vw] font-black tracking-tightest leading-none text-stroke opacity-30 uppercase whitespace-nowrap">
                     THE CATALOG
                  </h1>
               </motion.div>

               {/* Background Accents */}
               <div className="fixed inset-0 pointer-events-none opacity-20">
                  <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full" />
                  <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-gold/10 blur-[120px] rounded-full" />
               </div>

               <div className="max-w-7xl mx-auto relative z-10">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                     <div>
                        <motion.div
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           className="flex items-center gap-4 mb-6"
                        >
                           <Link href="/" className="group flex items-center gap-2 text-accent-gold/60 hover:text-accent-gold transition-colors">
                              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                              <span className="font-sans text-[10px] uppercase tracking-[0.3em]">Back to Experience</span>
                           </Link>
                        </motion.div>

                        <motion.h1
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           className="font-syne text-6xl md:text-8xl text-white mb-4 uppercase font-black tracking-tightest leading-[0.85]"
                        >
                           The Full <br /> <span className="text-accent-gold italic font-bold">Catalog</span>
                        </motion.h1>
                        <p className="font-sans text-secondary/60 max-w-md">
                           A curated selection of our finest mixology. Each drink is a masterpiece of flavor, texture, and visual artistry.
                        </p>
                     </div>

                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex gap-4"
                     >
                        <div className="px-6 py-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md">
                           <span className="block font-sans text-[10px] text-accent-gold/40 uppercase tracking-widest mb-1">Total Items</span>
                           <span className="block font-syne text-3xl text-white font-bold">{fullMenu.length}</span>
                        </div>
                        <div className="px-6 py-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md">
                           <span className="block font-sans text-[10px] text-accent-gold/40 uppercase tracking-widest mb-1">Curated since</span>
                           <span className="block font-syne text-3xl text-white font-bold">2024</span>
                        </div>
                     </motion.div>
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {fullMenu.map((item, index) => (
                        <motion.div
                           key={item.id}
                           initial={{ opacity: 0, y: 30 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.1 * index }}
                           className="group relative flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-accent-gold/30 transition-colors duration-500"
                        >
                           <div className="relative aspect-4/3 overflow-hidden">
                              <Image
                                 src={item.image}
                                 alt={item.title}
                                 fill
                                 className="object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-transparent to-transparent" />

                              {item.popular && (
                                 <div className="absolute top-4 left-4 px-3 py-1 bg-accent-gold text-primary rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-lg">
                                    <Star size={10} fill="currentColor" /> Popular Choice
                                 </div>
                              )}

                              <div className="absolute bottom-4 right-4 bg-primary/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                 <span className="font-syne text-white text-sm font-bold tracking-tight">{item.price}</span>
                              </div>
                           </div>

                           <div className="p-8 flex flex-col flex-1">
                              <span className="font-sans text-accent-gold/60 text-[10px] uppercase tracking-[0.2em] mb-2 block">{item.category}</span>
                              <h3 className="font-syne text-3xl text-white mb-4 group-hover:text-accent-gold transition-colors font-bold uppercase tracking-tight">{item.title}</h3>
                              <p className="font-sans text-secondary/60 text-sm leading-relaxed mb-8 flex-1">
                                 {item.description}
                              </p>

                              <button className="w-full py-4 border border-white/10 rounded-xl group/btn overflow-hidden relative transition-colors hover:border-accent-gold/30 glow-button">
                                 <div className="absolute inset-0 bg-accent-gold translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                                 <span className="relative z-10 font-sans text-[10px] uppercase tracking-[0.3em] text-white group-hover/btn:text-primary transition-colors">Order Now</span>
                              </button>
                           </div>
                        </motion.div>
                     ))}
                  </div>

                  {/* Footer Link */}
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1 }}
                     className="mt-24 text-center border-t border-white/5 pt-24"
                  >
                     <h2 className="font-syne text-4xl text-white/40 mb-12 uppercase font-black">Looking for something custom?</h2>
                     <button className="px-12 py-6 bg-accent-gold text-primary font-sans uppercase tracking-[0.4em] text-xs hover:bg-white hover:text-primary transition-all duration-500 rounded-full glow-button">
                        Contact our Mixologist
                     </button>
                  </motion.div>
               </div>
            </div>
         </PageLayout>
      </ClientProvider>
   );
}
