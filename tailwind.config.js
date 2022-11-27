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
        layout: ["name product  aside", "price product  aside", "size product aside", "size product aside"],
        slim: ["name", "product", "price", "size", "aside"],
      },
      gridTemplateColumns: {
        layout: "1fr 2.5fr 1fr",
        slim: "1fr",
      },
      gridTemplateRows: {
        layout: "1fr 4fr 1fr 35fr",
        slim: "0.5fr 8fr 1fr 1fr",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
  variants: {
    gridTemplateAreas: ["responsive"],
  },
};
