/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
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
