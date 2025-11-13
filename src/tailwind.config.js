/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "base-100": "#ffffff",
          "base-200": "#f7f7f7",
          "base-content": "#1f1f2e",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "base-100": "#1a1a1d",   
          "base-200": "#242428",   
          "base-content": "#f5f5f5", 
          "neutral": "#2a2a2f",
          "primary": "#632ee3",
          "secondary": "#00b8b0",
          "accent": "#4cb5ae",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
