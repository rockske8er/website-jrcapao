/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
        roboto: 'Roboto',
        krona: 'Krona One',
      },
      colors: {
        primary: '#23A6B4',
        rocket: '#121214',
        lightprimary: '#ECF3FF',
      },
    },
  },
  plugins: [],
}
