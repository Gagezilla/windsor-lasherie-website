/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    plugins: [require('daisyui')],
    theme: {
        extend: {
            animation: {
                'shake': 'shake .35s linear infinite',
            },
            keyframes: {
                shake: {
                    '0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
                    '10%': { transform: 'translate(-1px, -2px) rotate(-1deg)' },
                    '20%': { transform: 'translate(-3px, 0px) rotate(1deg)' },
                    '30%': { transform: 'translate(3px, 2px) rotate(0deg)' },
                    '40%': { transform: 'translate(1px, -1px) rotate(1deg)' },
                    '50%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
                    '60%': { transform: 'translate(-3px, 1px) rotate(0deg)' },
                    '70%': { transform: 'translate(3px, 1px) rotate(-1deg)' },
                    '80%': { transform: 'translate(-1px, -1px) rotate(1deg)' },
                    '90%': { transform: 'translate(1px, 2px) rotate(0deg)' },
                    '100%': { transform: 'translate(1px, -2px) rotate(-1deg)' },
                }
            },
            screens: {
                '-2xl': {max: '1535px'},
                '-xl': {max: '1279px'},
                '-lg': {max: '1023px'},
                '-md': {max: '767px'},
                '-sm': {max: '639px'},
            },
            fontFamily: {
                'gistesy': ['Gistesy'],
            },
        },
    },
    daisyui: {
        themes: false,
    }
};