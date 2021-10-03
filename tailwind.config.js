  // tailwind.config.js

  const colors = require('tailwindcss/colors')


  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
     
      colors: {

        coolGray: colors.coolGray,
        gray: colors.gray,
        rose: colors.rose,
        orange: colors.orange,
        lime: colors.lime,
      },

       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }