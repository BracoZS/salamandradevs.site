/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",         // Archivo HTML principal
    "./css/**/*.css",     // Archivos CSS dentro de la carpeta css
    "./js/**/*.js",       // Archivos JS dentro de la carpeta js
    "./**/*.html",       
  ],
  theme: {
    extend: {
      colors: {
        sal: {
          10: '#fafaff',
          50: '#f0f8ff',
          100: '#dff1ff',
          200: '#b9e3fe',
          300: '#7bcefe',
          400: '#34b5fc',
          500: '#0a9ded',
          600: '#007ccb',
          700: '#005f9e',
          800: '#055487',
          900: '#0a4570',
          950: '#072c4a',
          test: '#ffed4a',
        },

        'primary': '#007ccb', 

        'fondo': '#0e0e11',  // Color de fondo
        'text': '#f4f4f5',   // Color de texto principal
        'isla': '#18181b',   // Color de fondo secundario
        'dborder': '#27272a',
        'overlay': '#0b1827',  

        'test2': '#f5a91b',
        
        // 'primary': '#1482c8',  // Color principal
        // 'secondary': '#60a9d9',  // Color secundario
        // 'accent': '#144ac7',  // Color de acento
        // 'button': '#1482c8',  // Color de botones
        // 'overlay': '#0b1827',  // Color de botones al pasar el mouse
        // 'test': '#f5a91b',  // Color de borde

      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Agrega "Inter" como una fuente personalizada
      },
    },
  },
  plugins: [],
}
