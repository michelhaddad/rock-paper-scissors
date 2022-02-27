const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            ...colors,
            'main-bg-color': 'radial-gradient(hsl(214, 47%, 23%) to hsl(237, 49%, 15%))',
        }
    },
    plugins: [],
}
