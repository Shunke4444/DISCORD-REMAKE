/** @type {import('tailwindcss').Config} */

import { green } from '@mui/material/colors';

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
          900: '#1e1f22',
          800: '#2b2d31',
          700: '#313338',
          600: '#424549',
          500: '#a7aaad',
          400: '#7e7f86',
        },
        'discordGreen': '#268148',
        'discordBlue' : '	#7289da',

        'purple': {
          1000: '#4d59d6',
          900: '#5865f2',

        },
      },


      transitionProperty: {
        
      }
    },
  },
  plugins: [],
}