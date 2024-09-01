/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
      colors: {
        gold: "#836322",
        navy: "#1c3144",
      },
    },
  },
  plugins: [],
  important: true,
};
