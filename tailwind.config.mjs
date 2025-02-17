/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        rojo: "#BB272D",
        naranja: "#F25C05",
        gris: "#34333C",
      },
    },
  },
  plugins: [],
};
