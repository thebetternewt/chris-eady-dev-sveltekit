/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: 'hsl(var(--navy) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
