// tailwind.config.js
module.exports = {
  prefix: 'tw-', // Agrega este prefijo a todas las clases de Tailwind
  purge: {
    content: ['./index.html', './src/**/*.{vue,ts,jsx,tsx}'],
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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}