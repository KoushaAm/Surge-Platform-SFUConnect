/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik'],
        'karla': ['Karla']
      },
      colors: {
        'custom-dark-gray':'#AAAAAA',
        'custom-orange-primary':'#FFA25F',
      },
    },
  },
  plugins: [],
}