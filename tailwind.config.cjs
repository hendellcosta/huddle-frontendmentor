/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  theme: {
    extend: {
      
      backgroundImage: {
        "main-desk": "url('/src/Media/bg-desktop.svg')",
        "main-mbl": "url('/src/Media/bg-mobile.svg')"
      },
      backgroundColor: {
        violet: "hsl(257, 40%, 49%)",
        magenta: "hsl(300, 69%, 71%)",
        magentaHover: "hsl(300, 90%, 71%)"
      },
      textColor: {
        violet: "hsl(257, 40%, 49%)",
        magenta: "hsl(300, 90%, 71%)"
      },
      borderColor: {
        violet: "hsl(257, 40%, 49%)",
        magenta: "hsl(300, 90%, 71%)"
      },
    },
  },
  plugins: [],
};
