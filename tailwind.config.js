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
          DEFAULT: '#0077FF',
          50: '#E6F2FF',
          100: '#CCE5FF',
          200: '#99CBFF',
          300: '#66B1FF',
          400: '#3397FF',
          500: '#0077FF',
          600: '#005FCC',
          700: '#004799',
          800: '#002F66',
          900: '#001833',
        },
        secondary: {
          DEFAULT: '#FF6600',
          50: '#FFF4E6',
          100: '#FFE9CC',
          200: '#FFD399',
          300: '#FFBD66',
          400: '#FFA733',
          500: '#FF6600',
          600: '#CC5200',
          700: '#993D00',
          800: '#662900',
          900: '#331400',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

