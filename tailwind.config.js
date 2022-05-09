module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },

    extend: {
      fontFamily: {
        Roboto: "'Roboto','sans-serif",
      },
    },
  },
  plugins: [],
};
