/**
 * DESIGN SYSTEM - Mathematical Foundation
 *
 * Menggunakan prinsip matematika untuk menciptakan harmoni visual:
 * 1. Golden Ratio (φ): 1.618033988749895
 * 2. Fibonacci Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...
 * 3. Modular Scale: Base 16px dengan ratio 1.25 (Perfect Fourth)
 * 4. Base-8 Grid System: Semua spacing kelipatan 8px
 */

// ============================================================================
// MATHEMATICAL CONSTANTS
// ============================================================================

/** Golden Ratio (φ) - Proporsi yang ditemukan di alam dan seni klasik */
const PHI = 1.618033988749895;

/** Inverse Golden Ratio (1/φ) - Untuk proporsi minor yang harmonis */
const PHI_INVERSE = 0.618033988749895; // 1/φ

/** Base unit 8px - Standar industri untuk pixel-perfect grid system */
const BASE_UNIT = 8;

/** Base font size 16px - Browser default dan optimal untuk readability */
const BASE_FONT = 16;

/** Modular scale ratio - Perfect Fourth (1.25) untuk kontras yang seimbang */
const SCALE_RATIO = 1.25;

/** Fibonacci sequence - Untuk spacing dan sizing yang natural */
const FIBONACCI = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

// ============================================================================
// SPACING SYSTEM
// ============================================================================

/**
 * Spacing berdasarkan Base-8 Grid dan Golden Ratio
 * Formula: BASE_UNIT × multiplier
 *
 * Menggunakan kombinasi:
 * - Fibonacci numbers untuk spacing natural
 * - Golden ratio untuk spacing harmonis
 * - Base-8 untuk pixel-perfect alignment
 */
export const spacing = {
  // Micro spacing (fine-tuning)
  0: 0, // 0px
  px: 1, // 1px - untuk borders
  0.5: BASE_UNIT * 0.5, // 4px - Fibonacci-ish

  // Fibonacci-based spacing (natural progression)
  1: BASE_UNIT * 1, // 8px - Fibonacci
  2: BASE_UNIT * 2, // 16px - Base font size
  3: BASE_UNIT * 3, // 24px - Fibonacci-ish
  4: BASE_UNIT * 4, // 32px
  5: BASE_UNIT * 5, // 40px - Fibonacci
  6: BASE_UNIT * 6, // 48px
  8: BASE_UNIT * 8, // 64px - Fibonacci
  10: BASE_UNIT * 10, // 80px
  12: BASE_UNIT * 12, // 96px
  13: BASE_UNIT * 13, // 104px - Fibonacci
  16: BASE_UNIT * 16, // 128px
  20: BASE_UNIT * 20, // 160px
  21: BASE_UNIT * 21, // 168px - Fibonacci
  24: BASE_UNIT * 24, // 192px

  // Golden ratio spacing (harmonic proportions)
  phi: Math.round(BASE_UNIT * PHI), // 13px (8 × 1.618)
  phiInv: Math.round(BASE_UNIT * PHI_INVERSE), // 5px (8 × 0.618)
  phi2: Math.round(BASE_UNIT * PHI * PHI), // 21px (8 × 1.618²)
  phi3: Math.round(BASE_UNIT * PHI * PHI * PHI), // 34px (8 × 1.618³)
} as const;

/**
 * Convert spacing to rem units
 * @param px - Pixel value
 * @returns rem string
 */
const toRem = (px: number): string => `${px / BASE_FONT}rem`;

/**
 * Spacing in rem units (untuk responsive scaling)
 */
export const spacingRem = Object.fromEntries(
  Object.entries(spacing).map(([key, value]) => [key, toRem(value as number)]),
) as Record<keyof typeof spacing, string>;

// ============================================================================
// TYPOGRAPHY SYSTEM
// ============================================================================

/**
 * Modular scale untuk typography
 * Formula: BASE_FONT × SCALE_RATIO^step
 *
 * Perfect Fourth (1.25) memberikan:
 * - Kontras yang cukup antara heading levels
 * - Tidak terlalu dramatis seperti Major Third (1.333)
 * - Lebih readable daripada Minor Third (1.2)
 */
const modularScale = (step: number): number => {
  return Math.round(BASE_FONT * SCALE_RATIO ** step);
};

export const fontSize = {
  // Display sizes (hero sections)
  display1: modularScale(8), // 152px - untuk hero utama
  display2: modularScale(7), // 122px
  display3: modularScale(6), // 98px

  // Heading sizes (hierarchical)
  h1: modularScale(5), // 78px
  h2: modularScale(4), // 63px
  h3: modularScale(3), // 50px
  h4: modularScale(2), // 40px
  h5: modularScale(1), // 32px
  h6: modularScale(0), // 16px (base)

  // Body text (optimal readability)
  xl: modularScale(2), // 40px
  lg: modularScale(1), // 32px
  base: BASE_FONT, // 16px - optimal untuk body
  sm: modularScale(-1), // 13px
  xs: modularScale(-2), // 10px
} as const;

/**
 * Line height berdasarkan golden ratio dan readability research
 *
 * Research menunjukkan:
 * - Body text optimal: 1.5 (24px untuk 16px font)
 * - Headings: 1.2-1.3 (tighter untuk impact)
 * - Display: 1.0-1.1 (very tight untuk drama)
 */
export const lineHeight = {
  none: 1, // 100% - untuk display text
  tight: 1.2, // 120% - untuk headings
  snug: 1.375, // 137.5% - untuk subheadings
  normal: 1.5, // 150% - optimal untuk body (research-backed)
  relaxed: PHI_INVERSE + 1, // 161.8% - golden ratio
  loose: 1.75, // 175% - untuk spaced text
  phi: PHI, // 161.8% - pure golden ratio
} as const;

/**
 * Letter spacing untuk optical adjustment
 *
 * Prinsip:
 * - Large text: negative spacing (optically tighter)
 * - Small text: positive spacing (better readability)
 * - All caps: wider spacing (better legibility)
 */
export const letterSpacing = {
  tighter: "-0.05em", // -5% - untuk display text
  tight: "-0.025em", // -2.5% - untuk headings
  normal: "0em", // 0% - untuk body
  wide: "0.025em", // 2.5% - untuk small text
  wider: "0.05em", // 5% - untuk captions
  widest: "0.1em", // 10% - untuk all caps
  tracking: "0.2em", // 20% - untuk labels/overlines
} as const;

// ============================================================================
// CONTAINER & LAYOUT SYSTEM
// ============================================================================

/**
 * Container widths berdasarkan golden ratio dan optimal line length
 *
 * Optimal reading width: 60-75 characters per line
 * Average character width: ~0.5em
 * Formula: fontSize × 65 characters × 0.5 = optimal width
 */
export const container = {
  // Content containers (optimal reading)
  xs: 320, // Mobile minimum
  sm: Math.round(BASE_FONT * 45 * 0.5), // 360px - ~45 chars
  md: Math.round(BASE_FONT * 65 * 0.5), // 520px - ~65 chars (optimal)
  lg: Math.round(BASE_FONT * 75 * 0.5), // 600px - ~75 chars (max comfortable)

  // Layout containers (golden ratio based)
  xl: 1024, // Tablet landscape
  "2xl": 1280, // Desktop
  "3xl": 1440, // Large desktop
  "4xl": Math.round(1440 * PHI), // 2330px - ultra wide

  // Golden ratio divisions
  major: "61.8%", // φ⁻¹ - major section
  minor: "38.2%", // 1 - φ⁻¹ - minor section
} as const;

/**
 * Section padding berdasarkan viewport dan golden ratio
 * Formula: clamp(min, preferred, max)
 */
export const sectionPadding = {
  // Vertical padding (top/bottom)
  y: {
    mobile: spacing[12], // 96px
    tablet: spacing[16], // 128px
    desktop: spacing[20], // 160px
  },

  // Horizontal padding (left/right)
  x: {
    mobile: spacing[4], // 32px
    tablet: spacing[6], // 48px
    desktop: spacing[8], // 64px
  },
} as const;

// ============================================================================
// BORDER RADIUS SYSTEM
// ============================================================================

/**
 * Border radius menggunakan Fibonacci sequence
 * Fibonacci closely related to golden ratio: Fₙ/Fₙ₋₁ → φ as n → ∞
 */
export const borderRadius = {
  none: FIBONACCI[0], // 0px
  sm: FIBONACCI[4], // 3px
  md: FIBONACCI[5], // 5px
  lg: FIBONACCI[6], // 8px
  xl: FIBONACCI[7], // 13px
  "2xl": FIBONACCI[8], // 21px
  "3xl": FIBONACCI[9], // 34px
  full: 9999, // Fully rounded
} as const;

// ============================================================================
// ANIMATION SYSTEM
// ============================================================================

/**
 * Duration berdasarkan Fibonacci sequence (ms)
 * Memberikan timing yang natural dan harmonis
 */
export const duration = {
  instant: 0, // No animation
  fast: FIBONACCI[6] * 20, // 160ms (8 × 20)
  normal: FIBONACCI[7] * 20, // 260ms (13 × 20)
  slow: FIBONACCI[8] * 20, // 420ms (21 × 20)
  slower: FIBONACCI[9] * 20, // 680ms (34 × 20)
  slowest: FIBONACCI[10] * 20, // 1100ms (55 × 20)
} as const;

/**
 * Easing functions (cubic-bezier)
 * Berdasarkan natural motion dan physics
 */
export const easing = {
  linear: [0, 0, 1, 1] as const,
  easeIn: [0.42, 0, 1, 1] as const,
  easeOut: [0, 0, 0.58, 1] as const,
  easeInOut: [0.42, 0, 0.58, 1] as const,

  // Custom natural easings
  smooth: [0.25, 0.46, 0.45, 0.94] as const, // Smooth acceleration
  snappy: [0.16, 1, 0.3, 1] as const, // Snappy spring
  bounce: [0.68, -0.55, 0.265, 1.55] as const, // Bounce effect
  elastic: [0.87, 0, 0.13, 1] as const, // Elastic feel
} as const;

// ============================================================================
// Z-INDEX SYSTEM
// ============================================================================

/**
 * Z-index scale (powers of 10 untuk clarity)
 * Memudahkan debugging dan maintenance
 */
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
  notification: 1700,
} as const;

// ============================================================================
// BREAKPOINTS SYSTEM
// ============================================================================

/**
 * Breakpoints berdasarkan common device sizes dan golden ratio
 */
export const breakpoints = {
  xs: 320, // Mobile portrait
  sm: 640, // Mobile landscape
  md: 768, // Tablet portrait
  lg: 1024, // Tablet landscape
  xl: 1280, // Desktop
  "2xl": 1536, // Large desktop
  "3xl": Math.round(1536 * PHI), // 2486px - Ultra wide
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Responsive spacing dengan fluid scaling
 * Formula: clamp(min, min + (max - min) × (100vw - minVw) / (maxVw - minVw), max)
 *
 * @param min - Minimum value (mobile)
 * @param max - Maximum value (desktop)
 * @param minVw - Minimum viewport width (default: 320)
 * @param maxVw - Maximum viewport width (default: 1440)
 * @returns CSS clamp() string
 */
export const fluidSpacing = (
  min: number,
  max: number,
  minVw: number = 320,
  maxVw: number = 1440,
): string => {
  const slope = (max - min) / (maxVw - minVw);
  const yIntercept = min - slope * minVw;
  return `clamp(${min}px, ${yIntercept.toFixed(2)}px + ${(slope * 100).toFixed(2)}vw, ${max}px)`;
};

/**
 * Fluid typography dengan optimal scaling
 *
 * @param minSize - Minimum font size
 * @param maxSize - Maximum font size
 * @returns CSS clamp() string
 */
export const fluidType = (minSize: number, maxSize: number): string => {
  return fluidSpacing(minSize, maxSize, breakpoints.sm, breakpoints["2xl"]);
};

/**
 * Calculate optimal line length untuk readability
 *
 * @param fontSize - Font size in pixels
 * @param chars - Target characters per line (default: 65)
 * @returns Optimal max-width in pixels
 */
export const optimalLineLength = (
  fontSize: number,
  chars: number = 65,
): number => {
  const AVG_CHAR_WIDTH = 0.5; // Average character width ratio
  return Math.round(fontSize * chars * AVG_CHAR_WIDTH);
};

/**
 * Get spacing value dengan type safety
 *
 * @param key - Spacing key
 * @returns Spacing value in pixels
 */
export const getSpacing = (key: keyof typeof spacing): number => {
  return spacing[key];
};

/**
 * Aspect ratio calculator berdasarkan golden ratio
 *
 * @param width - Width in pixels
 * @param useGolden - Use golden ratio (default: true)
 * @returns Height in pixels
 */
export const aspectRatio = (
  width: number,
  useGolden: boolean = true,
): number => {
  return useGolden ? Math.round(width / PHI) : Math.round((width * 9) / 16);
};
