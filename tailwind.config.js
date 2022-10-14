/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "palette-blue": {
          900: "#343750",
          300: "#96ACC4",
        },
        "palette-red": "#F06161",
        "palette-yellow": "#F4D152",
        "palette-grey": "#E9EAEC",
      },
      fontFamily: {
        display: '"Fredoka One"',
        handwriting: '"Indie Flower"',
      },
      fontSize: {
        "12xl": ["12rem", "0.9em"],
        "15xl": ["15rem", "0.9em"],
      },
    },
  },
  plugins: [],
};
