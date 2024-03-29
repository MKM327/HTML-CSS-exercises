/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./srcs/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      margin: {
        96: "24rem",
        128: "32rem",
      },
      width: {
        96: "24rem",
        128: "32rem",
        "1/1": "100%",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      //add max width media queries
      "m-sm": { max: "640px" },
      "m-md": { max: "768px" },
      "m-lg": { max: "1024px" },
      "m-xl": { max: "1280px" },
      "m-2xl": { max: "1536px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
