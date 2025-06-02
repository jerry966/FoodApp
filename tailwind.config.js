/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      screens: {
        xs: "30rem",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      colors: {
        primary: "#333333",
        secondary: "#eab308",
        main: "#ef4444", 
        secondaryText: "#666666",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
