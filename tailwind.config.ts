import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,md,mdx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fafaf9",
        foreground: "#171717",
        accent: "#b45309",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
