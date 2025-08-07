/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        moss: {
          dark: "#1E3131",
          DEFAULT: "#2F4F4F",
          light: "#3A6363",
        },
        greige: {
          dark: "#AAA79A",
          DEFAULT: "#BEBBAE",
          light: "#D2D0C6",
        },
        accent: "#D8C3A5",
      },
      fontFamily: {
        sans: ["Inter", '"Noto Sans JP"', "sans-serif"],
        serif: ["Playfair Display", '"Noto Serif JP"', "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
