/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",    // For the root HTML file
    "./src/**/*.{js,jsx,ts,tsx}" // For your React/Vue components
  ],
  theme: {
    extend: {}, // Use this section for customizations
  },
  plugins: [], // Add plugins here if needed
};
