module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern': "url('/images/hero-pattern.jpg')",
      }),
      gradientColorStops: (theme) => ({
        'blue-primary': '#00D2FF',
        'blue-secondary': '#3A7BD5',
      }),
    },
  },
  darkMode: 'class',
  variants: {
    extend: {},
  },
  plugins: [],
};
