/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  mnode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', '.public/index.html'],
  theme: {
    extend:{
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '28': 'repeat(24, minmax(0, 1fr))',
      },
      colors: {
        'gray': {
          1000: '#111214',
          900: '#1e2124',
          800: '#282b30',
          700: '#313338',
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