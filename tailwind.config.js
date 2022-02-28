const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            screens: {
                'xs': '430px',
            }
        },
        colors: {
            ...colors,
            'dark-text': 'hsl(229, 25%, 31%)',
            'score-text': 'hsl(229, 64%, 46%)',
            'header-outline': 'hsl(217, 16%, 45%)',
            'main-blue': 'hsl(214, 47%, 23%)',
        }
    },
    plugins: [],
}
