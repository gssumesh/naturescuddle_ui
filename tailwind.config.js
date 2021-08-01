const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.tsx',

    // This is a convention for files that only include Styled Components.
    // If you don't use this convention feel free to skip it.
    './src/**/*.styled.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '2/3': '67vh',
      ...defaultTheme.minHeight
     },
    colors: {
      'primary': '#333333',
      'primary-bg': '#F9F7F5',
      'nc-sage': '#90A892',
      'nc-dark-sage': '#435944',
      'nc-grey': '#dbdbdb',
      'nc-grey-2': '#f2f4f6',
      'nc-grey-3': '#feffff',
      ...defaultTheme.colors
    },
    extend: {
      fontFamily: {
        serif: ['Varela Round','Roboto', ...defaultTheme.fontFamily.serif],
        sans: ['Flamenco', ...defaultTheme.fontFamily.sans],
        quote: ['Work Sans'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        'naturescuddle': {                 /* your theme name */
          'primary' : '#90A892',           /* Primary color */
          'primary-focus' : '#435944',     /* Primary color - focused */
          'primary-content' : '#ffffff',   /* Foreground content color to use on primary color */

          'secondary' : '#90A892',         /* Secondary color */
          'secondary-focus' : '#435944',   /* Secondary color - focused */
          'secondary-content' : '#ffffff', /* Foreground content color to use on secondary color */

          'accent' : '#37cdbe',            /* Accent color */
          'accent-focus' : '#2aa79b',      /* Accent color - focused */
          'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */

          'neutral' : '#3d4451',           /* Neutral color */
          'neutral-focus' : '#2a2e37',     /* Neutral color - focused */
          'neutral-content' : '#ffffff',   /* Foreground content color to use on neutral color */

          'base-100' : '#ffffff',          /* Base color of page, used for blank backgrounds */
          'base-200' : '#f9fafb',          /* Base color, a little darker */
          'base-300' : '#d1d5db',          /* Base color, even more darker */
          'base-content' : '#221e20',//'#1f2937',      /* Foreground content color to use on base color */

          'info' : '#2094f3',              /* Info */
          'success' : '#009485',           /* Success */
          'warning' : '#ff9900',           /* Warning */
          'error' : '#ff5724',             /* Error */
       },
      }
    ]
  }
};