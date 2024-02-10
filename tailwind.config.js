/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#9747FE",
          secondary: "#141618",
          neutral: "#E7D5FE",
          "base-100": "#ffff",
          info: "#ECF0F3",
          success: "#ffff",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}