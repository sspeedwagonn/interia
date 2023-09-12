/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'section-grey': '#6D7D7D',
      },
      backgroundImage: {
        'hero-bg': "url('./assets/interia_bg.jpg')"
      }
    },
  },
  plugins: [],
}