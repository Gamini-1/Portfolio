/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Dancing Script']
      }

    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

