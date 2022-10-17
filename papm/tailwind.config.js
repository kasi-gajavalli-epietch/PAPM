/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
  
        or: {
          50: "#be9e44",
          100: "#cbb26a",
          200: "#d8c690",
        },
        noir: {
          50: "#070707 ",
          100: "#212121",
          200: "#3a3a3a",
        },
        blanc: {
          50: "#F0F0F0",
        },
        gris: {
          50: "#F0F0F0",
          100: "#E0E0E0",
          200: "#D0D0D0",
          300: "#C0C0C0",
          400: "#B0B0B0",
          500: "#A0A0A0",
          600: "#909090",
          700: "#808080",
          800: "#707070",
          900: "#606060",
        },
      },
    },
    
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
      merriweather: ["Merriweather", "serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
