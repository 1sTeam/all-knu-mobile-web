/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "../../packages/ui/**/*.{ts,tsx}",
    `./src/**/*.{js,ts,jsx,tsx}`,
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.6rem",
      },
      colors: {
        primary: "#6260ED",
        secondary: "#7674FF",
        sub: "#F8F9FA",
        destructive: "#F25B5A",
        confirm: "#4BCCAE",
      },
    },
  },
  plugins: [],
};
