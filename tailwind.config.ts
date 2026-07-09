import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563EB",
          primaryHover: "#1D4ED8",
          secondary: "#10B981",
          secondaryHover: "#059669",
          dark: "#0F172A",
          light: "#F8FAFC",
          muted: "#64748B",
          border: "#E2E8F0",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
      }
    },
  },
  plugins: [],
};

export default config;
