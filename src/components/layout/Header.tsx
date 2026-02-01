"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "/#about", label: "01" },
  { name: "Catalog", href: "/catalog", label: "02" },
  { name: "Events", href: "/#projects", label: "03" },
  { name: "Reservation", href: "/#contact", label: "04" },
];

const menuVariants = {
  initial: {
    scaleY: 0,
    transformOrigin: "top",
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const, // Custom elegant ease
    }
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.2
    }
  }
};

const linkVariants = {
  initial: { y: 100, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.3 + (i * 0.1),
    }
  }),
  exit: (i: number) => ({
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.05,
    }
  })
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] px-6 md:px-12 py-6 transition-all duration-500 mix-blend-difference text-white flex justify-between items-center ${scrolled ? "py-4" : "py-8"
          }`}
      >
        <Link href="/" className="group">
          <span className="font-syne text-2xl font-black tracking-tighter block group-hover:tracking-widest transition-all duration-700 uppercase">
            MIDNIGHT
          </span>
        </Link>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-2 group"
        >
          <span className="font-sans text-sm uppercase tracking-widest group-hover:text-accent-gold transition-colors font-bold">Menu</span>
          <div className="w-8 h-0.5 bg-white group-hover:bg-accent-gold transition-colors relative">
            <div className="absolute top-0 left-0 w-full h-full bg-accent-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        </button>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-secondary z-[70] flex flex-col justify-center px-6 md:px-24"
          >
            {/* Top Bar inside Overlay */}
            <div className="absolute top-0 left-0 right-0 px-6 md:px-12 py-8 flex justify-between items-center z-[80] text-primary">
              <span className="font-syne text-2xl font-black tracking-tighter text-primary uppercase">
                MIDNIGHT
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 group text-primary"
              >
                <span className="font-sans text-sm uppercase tracking-widest group-hover:text-accent transition-colors font-bold">Close</span>
                <X className="group-hover:rotate-90 transition-transform duration-500" strokeWidth={1.2} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <div key={item.name} className="overflow-hidden">
                  <motion.div
                    custom={i}
                    variants={linkVariants}
                    className="relative group"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block"
                    >
                      <span className="absolute -left-12 top-1/2 -translate-y-1/2 text-sm font-sans text-accent opacity-0 group-hover:opacity-100 group-hover:-left-8 transition-all duration-500 hidden md:block font-bold">
                        {item.label}
                      </span>
                      <span className="font-syne text-[12vw] md:text-[8vw] leading-[0.9] font-black text-transparent stroke-text group-hover:text-primary transition-colors duration-500 uppercase flex overflow-hidden tracking-tightest">
                        {item.name.split("").map((letter, index) => (
                          <motion.span
                            key={index}
                            initial={{ y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                              delay: index * 0.03
                            }}
                          >
                            {letter}
                          </motion.span>
                        ))}
                      </span>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>

            {/* Bottom Info */}
            <div className="absolute bottom-12 left-6 md:left-24 flex gap-8 text-primary/60 font-sans text-xs uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">Maps</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .stroke-text {
            -webkit-text-stroke: 1px rgba(10, 10, 10, 0.15);
        }
        .bg-secondary .stroke-text {
            -webkit-text-stroke: 1px rgba(10, 10, 10, 0.4);
        }
      `}</style>
    </>
  );
}
