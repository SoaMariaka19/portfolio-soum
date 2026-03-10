/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-bg': 'var(--brand-bg)',
                'brand-electric': 'var(--brand-electric)',
                'brand-text': 'var(--brand-text)',
                'brand-muted': 'var(--brand-muted)',
            },
            fontFamily: {
                sans: ["var(--font-urbanist)", "sans-serif"],
                title: ["var(--font-space-grotesk)", "sans-serif"],
            },
        },
    },
    plugins: [],
}