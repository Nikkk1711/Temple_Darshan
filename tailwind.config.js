/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ec7f13',
        'background-light': '#f8f7f6',
        'background-dark': '#221910',
        'surface-light': '#fcfaf8',
      },
      fontFamily: {
        display: ['Newsreader', 'serif'],
        body: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};
