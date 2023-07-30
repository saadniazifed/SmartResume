module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "system-ui"],
      body: ['"Poppins"'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
