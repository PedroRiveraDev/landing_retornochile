/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      xxl: "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      fontFamily: {
        // Add your custom fonts
        body: ["Afacad", "sans-serif"],
        icon: ["remixicon"],
      },

      colors: {
        colorBlue: "#0119FF",
        colorDark: "#0D0E1D",
        colorGrey: "#E7E7E8",
        colorGreyTwo: "#f5f5f5",
      },

      boxShadow: {
        customOne: "0px 16px 50px 0px rgba(13,14,29,0.12)",
      },
    },
  },
  plugins: [],
};
