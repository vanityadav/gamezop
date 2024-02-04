import plugin from "tailwindcss/plugin";

const customPlugin = plugin(function ({
  addUtilities,
  addComponents,
  e,
  config,
}) {
  addUtilities({
    ".no-scrollbar::-webkit-scrollbar": {
      display: "none",
    },
    ".no-scrollbar": {
      "-ms-overflow-style": "none",
      "scrollbar-width": "none",
    },
  });
});

export default customPlugin;
