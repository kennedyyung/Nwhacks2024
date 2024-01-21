/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'light_purple': '#F8F1FF',
        'medium_purple': '#DECDF5',
        'aqua_blue': '#80CED7',
        'white': '#ffffff',
        'black': '#000000',
        'text_colour': '#534D56'
      },
      borderRadius: {
        '4xl': '3rem',
      },
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],
}

