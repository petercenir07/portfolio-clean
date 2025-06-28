/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ['Poppins', 'sans-serif']
    },
    colors: {
      primary: '#C429D9',
      secondary: '#04B2D9',
      dark: '#0D0D0D',
      success: '#1dd1a1'
    },
    extend: {
      screens: {
        'max-h-800': { 'raw': '(max-height: 800px) and (min-width: 992px)' },
      }
    },
  },
  plugins: [],
}

