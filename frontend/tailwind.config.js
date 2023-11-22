/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      'custom-dark-gray':'#AAAAAA',
      'custom-orange-primary':'#FFA25F',
    },
    extend: {
      fontFamily: {
        'rubik': ['Rubik'],
        'karla': ['Karla']
      },
    },
  },
  plugins: [],
}