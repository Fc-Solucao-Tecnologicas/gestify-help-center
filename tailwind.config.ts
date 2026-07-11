import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        body: "#060a06",
        card: "#0c130d",
        accent: {
          DEFAULT: "#4ade80",
          solid: "#22c55e",
          hover: "#16a34a",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "0.75rem",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#52525b",
            "--tw-prose-headings": "#e4e4e7",
            "--tw-prose-links": "#4ade80",
            "--tw-prose-bold": "#e4e4e7",
            "--tw-prose-quotes": "#4ade80",
            "--tw-prose-code": "#4ade80",
            "--tw-prose-pre-bg": "rgba(255,255,255,0.04)",
            "--tw-prose-pre-code": "#e4e4e7",
            "--tw-prose-th-borders": "rgba(255,255,255,0.08)",
            "--tw-prose-td-borders": "rgba(255,255,255,0.08)",
            maxWidth: "none",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
