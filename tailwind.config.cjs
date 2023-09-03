module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "system-ui"],
      alfa: ["Alfa Slab One", "sans"],
      rubik: ["Rubik", "sans"],
      body: ['"Poppins"'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
