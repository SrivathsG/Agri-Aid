/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        avocado: '#A5D359', // Add your custom color here
      },
    },
  },
  plugins: [],
}

