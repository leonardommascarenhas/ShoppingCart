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
        layout: ["price product  size", "price   product  size", "price  product size"],
      },
      gridTemplateColumns: {
        layout: "1fr 1fr 1fr",
      },
      gridTemplateRows: {
        layout: "1fr 1fr",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
  variants: {
    gridTemplateAreas: ["responsive"],
  },
};
