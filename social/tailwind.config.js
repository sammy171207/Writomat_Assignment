/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6D83F2',
          DEFAULT: '#4B59F7',
          dark: '#2B3DCB',
        },
      },
    },
  },
  plugins: [],
}

