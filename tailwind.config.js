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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
