/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        '9': 'repeat(9, 50px)',
        '16': 'repeat(16, 42px)',
        '24': 'repeat(24, 32px)',
      },
      gridTemplateRows:{
        '9': 'repeat(9, 50px)',
        '16': 'repeat(16, 42px)',
        '24': 'repeat(24, 32px)',
      }
    },
  },
  plugins: [],
}

