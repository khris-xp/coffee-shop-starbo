/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: ["14px"],
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        starGreen: "#D4E9E2",
        darkGreen: "#1E3932",
        lightText: "rgba(0,0,0, .58)",
        titleText: "rgba(0,0,0, .87)",
      },
    },
  },
  plugins: [],
};
