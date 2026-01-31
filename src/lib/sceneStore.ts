"use client";

import { create } from "zustand";

interface SceneState {
  currentSlide: number;
  setSlide: (index: number) => void;
  loadingProgress: number;
  setLoadingProgress: (progress: number) => void;
  // State lain jika dibutuhkan
  heroPointer: { x: number; y: number };
  setHeroPointer: (coords: { x: number; y: number }) => void;
  activeService: string | null;
  setActiveService: (service: string | null) => void;
}

export const useSceneStore = create<SceneState>((set) => ({
  currentSlide: 0,
  setSlide: (index) => set({ currentSlide: index }),
  loadingProgress: 0,
  setLoadingProgress: (progress) => set({ loadingProgress: progress }),
  heroPointer: { x: 0, y: 0 },
  setHeroPointer: (coords) => set({ heroPointer: coords }),
  activeService: null,
  setActiveService: (service) => set({ activeService: service }),
}));
