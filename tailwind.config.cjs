/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,css}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: 'hsl(var(--color-orange) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
