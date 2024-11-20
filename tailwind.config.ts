import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)"],
        lato: ["var(--font-lato)", "sans-serif"],
        "host-grotesk": ["var(--font-host-grotesk)", "sans-serif"],
        ephesis: ["var(--font-ephesis)", "cursive"],
        libre: ["var(--font-libre-baskerville)", "serif"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
