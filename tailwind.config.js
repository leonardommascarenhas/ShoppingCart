/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Roboto"],
      },
      gridTemplateAreas: {
        layout: ["price product  size", "price product size", "price product size"],
        slim: ["name", "product", "price", "size"],
      },
      gridTemplateColumns: {
        layout: "1fr 1fr 1fr",
        slim: "1fr",
      },
      gridTemplateRows: {
        layout: "1fr",
        slim: "0.5fr 8fr 1fr 1fr",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
  variants: {
    gridTemplateAreas: ["responsive"],
  },
};
