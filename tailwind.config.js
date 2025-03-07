/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",         // Archivo HTML principal
    "./css/**/*.css",     // Archivos CSS dentro de la carpeta css
    "./js/**/*.js",       // Archivos JS dentro de la carpeta js
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1482c8',  // Color principal
        'secondary': '#60a9d9',  // Color secundario
        'accent': '#144ac7',  // Color de acento
        'fondo': '#16191d',  // Color de fondo
        'text': '#fafaff',  // Color de texto principal
        'button': '#1482c8',  // Color de botones
        'overlay': '#0b1827',  // Color de botones al pasar el mouse
        'test': '#f5a91b',  // Color de borde
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Agrega "Inter" como una fuente personalizada
      },
    },
  },
  plugins: [],
}
