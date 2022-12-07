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
        layout: ["name product  size", "aside product  size", "aside product size", "aside product size"],
        slim: ["name", "product", "size", "aside"],
        mid: ["name product", "size product", "aside product"],
      },
      gridTemplateColumns: {
        layout: "1fr 2.5fr 1fr",
        slim: "1fr",
        mid: "1fr 2fr",
      },
      gridTemplateRows: {
        layout: "1fr 2fr 3fr 32fr",
        slim: "32px 1fr auto fr",
        mid: "auto auto 1fr",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
  variants: {
    gridTemplateAreas: ["responsive"],
  },
};
