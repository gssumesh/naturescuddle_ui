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
    colors: {
      'primary': '#333333',
      'primary-bg': '#F9F7F5',
      'nc-sage': '#90A892',
      'nc-dark-sage': '#435944',
      ...defaultTheme.colors
    },
    extend: {
      fontFamily: {
        serif: ['Varela Round','Roboto', ...defaultTheme.fontFamily.serif],
        sans: ['Flamenco', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};