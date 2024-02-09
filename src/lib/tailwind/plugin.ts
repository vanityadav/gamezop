import plugin from "tailwindcss/plugin";

const customPlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    ".no-scrollbar::-webkit-scrollbar": {
      display: "none",
    },
    ".no-scrollbar": {
      "-ms-overflow-style": "none",
      "scrollbar-width": "none",
    },
    ".text-shadow-dark": {
      "text-shadow": "0.5px 0.5px 0.5px rgba(0, 0, 0, 0.25)",
    },
    ".small-caps": {
      "font-variant": "small-caps",
    },
    ".featured-gradient": {
      background:
        "linear-gradient(25deg, rgba(2,0,36,0.5) 0%, rgba(9,9,121,0.35) 25%, rgba(0,212,255,0) 50%)",
    },
  });
});

export default customPlugin;
