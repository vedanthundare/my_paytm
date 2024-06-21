/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors: {
      'blue': '#00BAF2',
      'white': '#FFFFFF',
      'slate': '#d1d1d1c8',
      'darkblue': '#002970',
      'yellow': '#FEDC26',
      'black': '#000000',
      
    },
    screens: {
      "verysmall":{'max': '399px'},
      'small': '400px',
      'medium': '768px',
      'large':{'max':'1070px'},
    },
    extend: {},
  },
  plugins: [],
}

