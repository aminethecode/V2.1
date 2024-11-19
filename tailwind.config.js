/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B0F17', // Dark background
          800: '#151B27', // Slightly lighter navy for cards
          700: '#1E2533', // Navy for secondary elements
        },
        primary: {
          DEFAULT: '#FFD700', // Gold color from logo
          hover: '#E6C200',
        }
      }
    },
  },
  plugins: [],
};