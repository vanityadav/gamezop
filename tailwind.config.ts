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
        "muted-foreground": "rgb(var(--muted-foreground))",
        "background-focused": "rgb(var(--background-focused))",
      },
    },
  },
  plugins: [customPlugin],
};
export default config;
