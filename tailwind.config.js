/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  anton: ['"Anton"', 'sans-serif'],
  playwrite: ['"Playwrite AU QLD"', 'cursive'],
  robotoSlab: ["Roboto Slab", "serif"]
}
    },
  },
  plugins: [],
}

