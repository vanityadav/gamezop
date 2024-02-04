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
        heading: "rgb(var(--text-primary))",
        focused: "rgb(var(--focused))",
      },
    },
  },
  plugins: [customPlugin],
};
export default config;
