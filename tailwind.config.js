/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f98e2b",
        secondary: "#f3f3f3",
        hoverr:"#db6d06",
        bgsecondary: "#565656",
        bgprimary:"#faa95d",
        hoverrsecondary:"#fddec2"
      },
      container:{
        center: true,
        padding: {
          DEFAULT: "1rem",
          md:"3rem",
        },
      },
    },
  },
  plugins: [],
}

