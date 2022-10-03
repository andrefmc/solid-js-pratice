/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ash-black": "#272838",
        "soldier-grey": "#829399",
        "armour-light": "#DDE2E4",
        "bone-puff": "#F9DBBD",
        rust: "#A44200",
      },
    },
  },
  plugins: [],
};
