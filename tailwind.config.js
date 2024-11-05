/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {
      colors:{
        lightYellow: '#FCF596', // Light Yellow
        softOrange: '#FBD288', // Soft Orange
        coral: '#FF9C73', // Coral
        brightRed: '#FF4545',
      }
    },
  },
  plugins: [],
}
