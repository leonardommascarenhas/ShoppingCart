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
        layout: ["name product  aside", ". product  aside", "size product aside", "size product aside"],
        slim: ["name", "product", "size", "aside"],
      },
      gridTemplateColumns: {
        layout: "1fr 2.5fr 1fr",
        slim: "1fr",
      },
      gridTemplateRows: {
        layout: "1fr 2fr 3fr 32fr",
        slim: "64px 2.7fr 0.5fr 1fr",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
  variants: {
    gridTemplateAreas: ["responsive"],
  },
};
