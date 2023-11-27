/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        "vd-blue": "hsl(226, 43%, 10%)",
        "d-blue": "hsl(235, 46%, 20%)",
        "vp-blue": "hsl(235, 45%, 61%)",
        "p-blue": "hsl(236, 100%, 87%)",
        "r-blue": "hsl(246, 80%, 60%)",
      },
    },
  },
  plugins: [],
};
