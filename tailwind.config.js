/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#ECE9E3',
          text: '#2A2A2A',
        },
        secondary: {
          bg: '#FAFAF8',
          text: '#6B7280',
        },
        card: {
          bg: '#FFFFFF',
        },
        accent: {
          gold: '#B08D57',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
