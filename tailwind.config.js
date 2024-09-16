/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: "#f4cc37",
        brandYellow: "#fdc62e",
        brandBlue: "#2dcc6f",
        brandWhite: "#eeeeee",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", sm: "3rem" },
      },
    },
  },
  plugins: [],
};
