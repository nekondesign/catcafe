/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/mainimg.jpg')",
      },
      colors: {
        'primary': '#AB8D49', // ベージュゴールド系の色
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};