/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'abhaya-libre': ['Abhaya Libre', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    plugins: [import("flowbite/plugin")],
  },
};
