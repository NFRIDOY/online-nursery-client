/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#228B22",
          "primary2": "#32CD32",

          "secondary": "#FFDA03",
          "secondary2": "#FF6347",

          "accent": "#87CEEB",
          "accent2": "#E6E6FA",

          "neutral": "#36454F",
          "neutral2": "#D3D3D3",
          "neutral3": "#F5F5F5",

          "base-100": "#f3f4f6",

          "info": "#00dfff",

          "success": "#00d744",

          "warning": "#FF00FB",

          "error": "#F21818",

          "bg1": "#F5FFFA",
          "bg2": "#FFFFF0",

        },
      },
    ],
  },
  plugins: [require('daisyui'),],
}

