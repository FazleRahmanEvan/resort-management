/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

   daisyui: {
    themes: [
      {
        automarttheme: {
          primary: "#B29C51",
          secondary: "#154293",
          accent: "#FFFFFF",
          red:"#ef4444",
          neutral: "#B29C51",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
