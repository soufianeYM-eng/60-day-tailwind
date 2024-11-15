/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './day-[0-9]*/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        approach: ["Approach", "sans-serif"],
      },
    },
  },
  plugins: [],
}

