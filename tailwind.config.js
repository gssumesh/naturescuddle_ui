const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/components/**/*.tsx',

    // This is a convention for files that only include Styled Components.
    // If you don't use this convention feel free to skip it.
    './src/components/**/*.styled.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['Roboto', ...defaultTheme.fontFamily.serif]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};