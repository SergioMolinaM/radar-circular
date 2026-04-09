/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        musgo: '#5B7C5B',
        crema: '#FAF7F0',
        cafe: '#2C2416',
        dato: {
          publico: '#2D7A4F',
          sectorial: '#3B5F8A',
          interno: '#6B3E7A',
          proyeccion: '#6B6B6B',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
