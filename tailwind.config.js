/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "san-serif"],
      },
      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(-200%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        dropdown: "dropdown .9s ease-in-out",
      },
    },
  },
  plugins: [],
};
