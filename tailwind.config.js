/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.{js,jsx,ts,tsx}",
    "./src.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BlackOps : ['Black Ops One', 'sans-serif'],
        Oswald : ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [],
};