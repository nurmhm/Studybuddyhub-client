/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'; // Import DaisyUI using ES module syntax

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', sans-serif",
      },
    },
  },
  plugins: [daisyui], // Use the imported daisyui plugin
}
