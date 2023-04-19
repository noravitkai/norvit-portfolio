/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg01: "#F5F5F5",
        bg02: "#E8E8E8",
        gray: "#707070",
        black: "#18181B",
        white: "#FFFFFF",
        blue: "#00445c",
        yellow: "#E7A20C",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
