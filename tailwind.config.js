// tailwind.config.js
module.exports = {
  prefix: 'tw-', // Agrega este prefijo a todas las clases de Tailwind
  purge: {
    content: [ './index.html', './src/**/*.{vue,ts,jsx,tsx}' ],
    options: {
      safelist: [
        // Lista de clases que quieres que Tailwind no purgue
      ],
      blocklist: [
        // Lista de archivos que quieres que Tailwind ignore
      ],
    },
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        yellow: {
          100: '#fefcbf',
          700: '#eab308',
        },
        blue: {
          100: '#38bdf8',
          700: '#0284c7',
        },
        green: {
          100: '#d1fae5',
          700: '#16a34a',
        },
        red: {
          100: '#fef2f2',
          700: '#dc2626',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};