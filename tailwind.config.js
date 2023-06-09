/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html", // <= add this
    "./src/**/*.{js,ts,jsx,tsx}", // <= no spaces
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
