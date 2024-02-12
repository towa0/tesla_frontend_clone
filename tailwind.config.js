/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkText: "#171A20",
      lightText: "#FFFFFF",
      darkButton: "#171A20",
      lightButton: "#F4F4F4",
      black: "#000000"
    },
    extend: {
      fontFamily: {
        sans: ["Gotham SSM", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
