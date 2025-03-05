/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px", // 400px o‘rniga yaxshiroq ishlaydi
      },
    },
  },
  plugins: [],
}