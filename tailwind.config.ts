import type { Config } from "tailwindcss";
import customPlugin from "./src/lib/tailwind/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        "foreground-muted": "rgb(var(--foreground-muted))",
        "background-focused": "rgb(var(--background-focused))",
        border: "rgb(var(--border))",
      },
    },
  },
  plugins: [customPlugin],
};
export default config;
