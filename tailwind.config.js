/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    fontFamily: {
      roboto: ['Roboto','sans-serif'],
      oregano: ['Oregano','cursive']
    },
    extend: {
      colors: {
        blue: {
          100: '#0989ff',
          200: '#115061',
          300: '#021d35',
          400: '#010f1c',
        },
        pink: {
          100: '#fd4b6b',
          200: '#fd2d6c',
          300: '#ff296a',
          400: '#ff3494',
        },
        yellow: {
          100: '#ffb342',
          200: '#ffd43a',
          300: '#ffb21d',
        },
        orange: {
          100: '#ff6736'
        },
        green: {
          100: '#31b757',
          200: '#ff6736'
        }
      }
    },
  },
  plugins: [],
}
