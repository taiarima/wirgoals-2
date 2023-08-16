/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "rgb(252, 252, 72)",
      },
      fontFamily: {
        title: ["Luckiest Guy", "cursive"],
        subtitle: ["Bakbak One", "cursive"],
      },
      screens: {
        large: "1300px",
      },
    },
  },
  plugins: [require("tailwind-animatecss")],
};
