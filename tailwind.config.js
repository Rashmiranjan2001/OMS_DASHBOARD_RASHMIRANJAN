/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom-4': 'repeat(4, minmax(0, .156fr))',
      },
    },
  },
  plugins: [],
}
