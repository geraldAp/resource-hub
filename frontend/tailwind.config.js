/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#4DFF3E",
        customGray: "#D9D9D933",
      },
    },
  },
  plugins: [],
};
