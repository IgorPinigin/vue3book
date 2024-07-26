/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        back: {
          light: "#DAF0FF",
          dark: "#2B4455"
        },
        phoneBack: {
          light: "#F7F8FB",
          dark: "#17181A"
        },
        textBlue: "#7CC9FF",
        textBlue100: "#38B9FF",
        textBlue50: "#B2DAFF",
        btnBack:{
          light: "#FCFCFC",
          dark: "#303136"
        },
        btnBackBlue50: {
          light: "#ADE2FF",
          dark: "#005DB2"
        },
        btnBackBlue100: "#19ACFF"
      }
    },
  },
  plugins: [],
}

