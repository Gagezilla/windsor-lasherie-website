/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      screens: {
        '-2xl': { max: '1535px' },
        '-xl': { max: '1279px' },
        '-lg': { max: '1023px' },
        '-md': { max: '767px' },
        '-sm': { max: '639px' },
      },
      fontFamily: {
        'marion-script': ['Marion Script'],
        'gistesy': ['Gistesy'],
      },
    },
  },
  daisyui: {
    themes: false,
  }
};