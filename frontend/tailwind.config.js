/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "false", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "abhaya-libre": ["Abhaya Libre", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      darkMode: false,
    },
    plugins: [import("flowbite/plugin")],
  },
};
