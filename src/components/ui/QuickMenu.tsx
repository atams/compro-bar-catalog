"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { List, X, ChevronRight } from "lucide-react";

const menuItems = [
   { name: "Vesper Martini", category: "Classic", price: "$24" },
   { name: "Smoked Old Fashioned", category: "Whiskey", price: "$28" },
   { name: "Midnight Negroni", category: "Aperitivo", price: "$26" },
   { name: "Golden Hour", category: "Exclusive", price: "$32" },
   { name: "Velvet Sour", category: "House", price: "$22" },
   { name: "Truffle Manhattan", category: "Signature", price: "$30" },
];

export default function QuickMenu() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         {/* Floating Toggle Button (Mobile Only) */}
         <div className="fixed bottom-8 right-8 z-[90] md:hidden">
            <motion.button
               whileTap={{ scale: 0.9 }}
               onClick={() => setIsOpen(!isOpen)}
               className="w-14 h-14 bg-accent-gold text-primary rounded-full shadow-2xl flex items-center justify-center border border-white/20"
            >
               {isOpen ? <X size={24} strokeWidth={1.2} /> : <List size={24} strokeWidth={1.2} />}
            </motion.button>
         </div>

         {/* Quick Menu Overlay */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  className="fixed inset-0 z-[85] bg-primary/95 backdrop-blur-2xl md:hidden overflow-y-auto pt-24 pb-32 px-6"
               >
                  <div className="max-w-md mx-auto">
                     <h2 className="font-playfair text-4xl text-white mb-2 text-center">Digital Menu</h2>
                     <p className="font-manrope text-accent-gold/60 text-xs uppercase tracking-widest text-center mb-12">Quick Selection</p>

                     <div className="space-y-6">
                        {menuItems.map((item, i) => (
                           <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex justify-between items-center group py-4 border-b border-white/5"
                           >
                              <div>
                                 <span className="text-[10px] text-accent-gold/40 uppercase tracking-widest block mb-1">{item.category}</span>
                                 <h3 className="font-playfair text-xl text-white group-hover:text-accent-gold transition-colors">{item.name}</h3>
                              </div>
                              <div className="flex items-center gap-4">
                                 <span className="font-manrope text-white/60">{item.price}</span>
                                 <ChevronRight size={16} className="text-accent-gold" strokeWidth={1.5} />
                              </div>
                           </motion.div>
                        ))}
                     </div>

                     <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        onClick={() => setIsOpen(false)}
                        className="w-full mt-12 py-4 border border-white/10 rounded-xl font-manrope uppercase tracking-[0.3em] text-[10px] text-white/40 hover:text-white transition-colors"
                     >
                        Close Menu
                     </motion.button>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}
