/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-black': '#424344',     // NOVA COR DE TEXTO (#424344)
        'main-gray': '#F8F8F8',      // Cinza MUITO CLARO (fundo/bordas)
        'dark-text': '#424344',      // Cor principal dos títulos
        'medium-text': '#666666',    // Cinza para parágrafos
        'button-base-hover': '#E0E0E0', // Cinza claro para hover do botão
        
        // Cores dos cards de procedimento (mantidas)
        'proc-green': '#e6f0e3', 
        'proc-brown': '#f0e3d9', 
        'proc-blue': '#d9f0f0',  

        // NOVAS CORES para os cards de profissionais (exemplo)
        'prof-highlight-1': '#D1FAE5', // Verde suave, similar ao proc-green
        'prof-highlight-2': '#d9e7f0', // Azul suave
        'prof-highlight-3': '#f0e3d9', // Marrom suave, similar ao proc-brown
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}