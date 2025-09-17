import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#E6F1FB",
          100: "#CCE3F7",
          200: "#99C7EF",
          300: "#66ABE8",
          400: "#3390E0",
          500: "#0A73B7",   // primary brand blue
          600: "#085F96",
          700: "#074B77",
          800: "#063A5C",
          900: "#042A42"
        },
        gold:    { DEFAULT: "#F5C542" },
        primary: { DEFAULT: "#0A73B7" },
        accent:  { DEFAULT: "#F5C542" }   // gold accent (no duplicate)
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
} satisfies Config;

export {};
