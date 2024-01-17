/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#23263A',
        'primary-light': '#2B2D41',
        secondary: '#FF4A57',
      },
    },
  },
  plugins: [],
};
