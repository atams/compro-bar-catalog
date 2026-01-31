'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface BentoCardProps {
   children: React.ReactNode;
   className?: string;
   colSpan?: number;
}

function BentoCard({ children, className, colSpan = 1 }: BentoCardProps) {
   const mouseX = useMotionValue(0);
   const mouseY = useMotionValue(0);

   function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
   }

   return (
      <div
         className={cn(
            'group relative border border-white/10 bg-white/5 overflow-hidden rounded-xl',
            colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1',
            className
         )}
         onMouseMove={handleMouseMove}
      >
         <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
               background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
            }}
         />
         <div className="relative h-full">{children}</div>
      </div>
   );
}

export default function MagicBento({
   items,
}: {
   items: { title: string; description: string; icon: React.ComponentType<{ size?: number }>; colSpan?: number }[];
}) {
   return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         {items.map((item, i) => {
            const Icon = item.icon;
            return (
               <BentoCard key={i} colSpan={item.colSpan}>
                  <div className="p-8 h-full flex flex-col justify-between">
                     <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-6">
                        <Icon size={24} />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                     </div>
                  </div>
               </BentoCard>
            );
         })}
      </div>
   );
}
