const defaultTheme = require("tailwindcss/defaultTheme");

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
      sans: [...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        eggshell: "#edebdd",
        liberty: "#3f5da7",
        "cg-red": "#e54225",
        "dark-sienna": "#311e14",
      },
    },
  },
  plugins: [],
};
