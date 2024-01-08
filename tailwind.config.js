/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato: ['Lato','sans-serif'],
        ibm_p: ['IBM Plex Sans Thai', 'sans-serif']

      }
    },
  },
  plugins: [],
}

