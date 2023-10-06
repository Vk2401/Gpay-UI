/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {

      'gpay': {
        primary: '#202125',
        secondary: '#2d2e30',
        gray:'#5c6061',
        white:'#e3e3e3',
        fullwhite:'#fff',
        background:'#1f1f1f',
        blue:'#004c79',
        light_blue:'#c3e7ff',
      },

    },
  },
  plugins: [],
}