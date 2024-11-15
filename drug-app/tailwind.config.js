/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-from': '#6EE7B7',
        'gradient-to': '#3B82F6',
      },
    },
  },
  plugins: [],
}
