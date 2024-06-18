/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  mnode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', '.public/index.html'],
  theme: {
    extend:{
      colors: {
        'gray': {
          1000: '#111214',
          900: '#1e2124',
          800: '#282b30',
          700: '#36393e',
          600: '#424549',
          500: '#a7aaad'
        },
        'discordBlue' : '	#7289da',
      },


      transitionProperty: {
        
      }
    },
  },
  plugins: [],
}