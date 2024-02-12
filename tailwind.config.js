/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkgrayishb" : "hsl(230, 11%, 40%)",
        "grayishb": "hsl(231, 7%, 65%)",
        "verydarkb": "hsl(230, 29%, 20%)"
      }
    },
  },
  plugins: [],
}