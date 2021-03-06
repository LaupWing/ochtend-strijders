/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors:{
            main: '#94cff1',
            secundair: '#fdd400',
            accept: '#04ab75',
            denied: '#e53f2c',
            dark: '#afbfb5',
            highlight: '#5cbce7'
         }
      },
   },
   plugins: [],
}
