/** @type {import('tailwindcss').Config} */

  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: { 
      colors: {
        primary: '#008080',
        secondary: '#43e8d8',
        third: '#CF9FFF'
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        animation: {
          flash: 'flash 0.5s ease-in-out',
        },
      },
    },
  },
  plugins: [],
}
