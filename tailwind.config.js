/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                sm: '320px',
                md: '426px',
            },
            colors: {
                'primary-marine-blue': 'hsl(213, 96%, 18%)',
                'primary-purplish-blue': 'hsl(243, 100%, 62%)',
                'primary-pastel-blue': 'hsl(228, 100%, 84%)',
                'primary-light-blue': 'hsl(206, 94%, 87%)',
                'primary-strawberry-red': 'hsl(354, 84%, 57%)',
                'neutral-cool-gray': 'hsl(231, 11%, 63%)',
                'neutral-light-gray': 'hsl(229, 24%, 87%)',
                'neutral-magnolia': 'hsl(217, 100%, 97%)',
                'neutral-alabaster': 'hsl(231, 100%, 99%)',
                'neutral-white': 'hsl(0, 0%, 100%)',
            },
        },
    },
    plugins: [],
};
