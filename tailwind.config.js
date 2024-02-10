/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html", "./dist/script.js"],
  theme: {
    extend: {
      colors: {
        "custom-pink": {
          100: "#e0cdcf",
          200: "#cf5755",
        },
      },
      width: {
        360: "360px",
      },
      flex: {
        50: "50%",
      },
      fontFamily: {
        halogen: ['"Halogen"', "sans-serif"],
        cormorant: ['"Cormorant Garamond"', "serif"],
        habibi: ["Habibi", "serif"],
        oxygen: ["Oxygen", "sans-serif"],
      },
      margin: {
        100: "500px",
      },
      blur: {
        1: "1px",
        2: "2px",
      },
    },
  },
  plugins: [],
};
