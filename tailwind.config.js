/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        "mb": "375px"
      },
      container: {
        center: true
      }
    },
  },

  plugins: [],
}