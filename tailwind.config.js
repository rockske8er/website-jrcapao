/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
        roboto: 'Roboto',
      },
      colors: {
        primary: '#23A6B4',
        lightprimary: '#ECF3FF',
      },
    },
  },
  plugins: [],
}
