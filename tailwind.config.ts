import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            sans: ["var(--font-inter)", "sans-serif"],
            serif: ["var(--font-playfair)", "serif"],
            cinzel: ["var(--font-cinzel)", "serif"],
            manrope: ["var(--font-manrope)", "sans-serif"],
         },
         colors: {
            primary: "#0A0A0A", // Rich Black (Background)
            secondary: "#F1F1EE", // Soft White (Foreground)
            accent: {
               DEFAULT: "#BE3455", // Viva Magenta (Hero Accent)
               gold: "#F3E5AB", // Champagne (Luxury Accent)
               dark: "#8a2be2", // Deep purple for gradients
            },
            glass: {
               DEFAULT: "rgba(255, 255, 255, 0.05)",
               border: "rgba(255, 255, 255, 0.1)",
               highlight: "rgba(190, 52, 85, 0.2)",
            },
            background: "#0A0A0A",
            foreground: "#F1F1EE",
         },
         animation: {
            'float': 'float 6s ease-in-out infinite',
            'fade-in': 'fadeIn 1s ease-out forwards',
            'slide-up': 'slideUp 0.8s ease-out forwards',
         },
         keyframes: {
            float: {
               '0%, 100%': { transform: 'translateY(0)' },
               '50%': { transform: 'translateY(-20px)' },
            },
            fadeIn: {
               '0%': { opacity: '0' },
               '100%': { opacity: '1' },
            },
            slideUp: {
               '0%': { transform: 'translateY(20px)', opacity: '0' },
               '100%': { transform: 'translateY(0)', opacity: '1' },
            },
         },
      },
   },
   plugins: [],
};
export default config;
