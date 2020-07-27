module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem"
      }
    },
    extend: {}
  },
  variants: {},
  // plugins: [require("postcss-import"), require("tailwindcss-markdown")]
  plugins: [require("postcss-import")]
};
