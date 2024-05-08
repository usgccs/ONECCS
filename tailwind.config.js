/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#1c1c1c',
        'white': '#ffffff',
      },
    },
  },
  plugins: [require("daisyui")],
}

