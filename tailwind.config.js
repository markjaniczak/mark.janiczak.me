module.exports = {
  purge: ['./pages/**/*.ts{x}', './components/**/*.ts{x}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'sans-serif'
      ]
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              '&::before': {
                content: 'none'
              },
              '&::after': {
                content: 'none'
              },
              backgroundColor: theme('colors.gray.200'),
              padding: theme('width.1')
            }
          }
        }
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
