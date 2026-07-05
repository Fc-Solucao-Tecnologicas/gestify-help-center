import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#EFF1EC",
          dark: "#12140F",
        },
        ink: {
          DEFAULT: "#1F2A24",
          dark: "#E7EAE3",
        },
        moss: {
          50: "#EAF3EC",
          100: "#CFE4D5",
          300: "#7FB794",
          500: "#2F6F4E",
          600: "#255B3F",
          700: "#1C4630",
        },
        brass: {
          DEFAULT: "#C9A227",
          light: "#E4C766",
          dark: "#8F721B",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#1B1F18",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        card: "0.375rem",
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(31 42 36 / 0.06), 0 1px 3px 0 rgb(31 42 36 / 0.08)",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#1F2A24",
            "--tw-prose-headings": "#1F2A24",
            "--tw-prose-links": "#2F6F4E",
            "--tw-prose-bold": "#1F2A24",
            "--tw-prose-quotes": "#255B3F",
            "--tw-prose-code": "#255B3F",
            maxWidth: "none",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
