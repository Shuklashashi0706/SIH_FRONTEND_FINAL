/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-purple': '#F2EFF8',
        'bpurple':'#ECE2F2',
      },
      textColor: {
        'custom-text': '#491C5E', // Add your custom text color here
      },
      borderColor: {
        'darkpurple': '#491C5E',
      },
    },
  },
  plugins: [],
};
