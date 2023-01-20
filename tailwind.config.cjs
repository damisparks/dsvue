/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      //  extend theme here 🎨
    },
  },
  plugins: [
    // Tailwind forms plugin
    require('@tailwindcss/forms'),
  ],
}
