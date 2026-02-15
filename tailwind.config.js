/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-dm-sans)", "sans-serif"],
        heading: ["var(--font-archivo)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
