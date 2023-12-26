/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,pug}'],
  theme: {
    extend: {
      fontFamily: {
        accent: "'Anton', sans-serif",
        body: "'Space Grotesk', sans-serif",
      },
      colors: {
        blackish: '#252627',
        accent: '#F8D448',
      },
    },
  },
  plugins: [],
};
