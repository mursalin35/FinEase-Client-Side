/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],

  daisyui: {
    themes: ["light", "dark"], // 👈 এখানে দুইটা theme active থাকবে
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
};
