import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className,
  hoverEffect = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-300",
        hoverEffect && "hover:bg-primary/30 hover:scale-[1.02] hover:shadow-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
