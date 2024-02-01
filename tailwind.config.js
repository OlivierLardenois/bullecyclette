/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      retroking: ["Retroking", "sans-serif"],
      "the-rughton-script": ["The Rughton Script", "sans-serif"],
      "veteran-typewriter": ["Veteran Typewriter", "sans-serif"],
    },
    extend: {
      colors: {
        eggshell: "#edebde",
        liberty: "#3f5da6",
        "cg-red": "#e54126",
      },
    },
  },
  plugins: [],
};
