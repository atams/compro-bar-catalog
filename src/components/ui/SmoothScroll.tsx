"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
