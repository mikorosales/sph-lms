/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueGray: '#E0E5ED',
        lightBlue: '#325184',
        lightGray: '#e0e5ed',
        lightGray1: '#bababa'
      },
      },
    },
  plugins: [],
}
