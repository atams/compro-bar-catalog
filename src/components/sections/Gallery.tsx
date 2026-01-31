"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GlassCard from "@/components/ui/GlassCard";

const images = [
  { id: 1, title: "Project Alpha", category: "Branding" },
  { id: 2, title: "Neon Dreams", category: "Web Design" },
  { id: 3, title: "Urban Flow", category: "Photography" },
  { id: 4, title: "Glass City", category: "3D Art" },
  { id: 5, title: "Nature Tech", category: "Illustration" },
];

export default function Gallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section
      id="gallery"
      ref={targetRef}
      className="relative h-[300vh] bg-black/20"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-8 left-8 z-20">
          <h2 className="text-4xl font-bold text-white mb-2">Selected Works</h2>
          <p className="text-white/60">Scroll to explore</p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-24">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative h-[70vh] w-[80vw] md:w-[60vw] shrink-0 rounded-3xl overflow-hidden bg-white/5 group"
            >
              <Image
                src={`https://placehold.co/1200x800/164f4e/FFFFFF/png?text=${image.title.replace(' ', '+')}`}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-9xl font-bold text-white/5">{image.id}</span>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <GlassCard className="backdrop-blur-md bg-white/10 border-white/20">
                  <span className="text-accent text-sm font-medium uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mt-2">{image.title}</h3>
                </GlassCard>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
