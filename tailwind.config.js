/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          NavbarBg: "#E5E7EB",
          MainBg: "#CBd5E1",
        },
        dark: {
          NavbarBg: "#23155B",
          MainBg: "#4322C9A3",
        },
      },
    },
  },
  plugins: [],
};
