/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
      gridTemplateAreas: {
        layout: ["name product  aside", ". product  aside", "size product aside", "size product aside"],
        slim: ["name", "product", "size", "aside"],
      },
      gridTemplateColumns: {
        layout: "1fr 2.5fr 1fr",
        slim: "1fr",
      },
      gridTemplateRows: {
        layout: "1fr 2fr 3fr 32fr",
        slim: "32px 1fr auto fr",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
  variants: {
    gridTemplateAreas: ["responsive"],
  },
};
