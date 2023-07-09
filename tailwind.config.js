/** @type {import('tailwindcss').Config} */
module.exports = {
    daisyui: {
        themes: [
            "light",
            "dark",
            "cupcake",
            {
                mytheme: {
                    "primary": "#a855f7",
                    "secondary": "#d926a9",
                    "accent": "#1fb2a6",
                    "neutral": "#2a323c",
                    "base-100": "#1d232a",
                    "info": "#3abff8",
                    "success": "#36d399",
                    "warning": "#fbbd23",
                    "error": "#f87272",
                },
            },
        ],
    },
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
