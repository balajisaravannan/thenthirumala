/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors : {
      primary: '#131F3E',
      secondary: '#5d1895', 
    
     },
     backgroundColor:{
      'yellow-500' : '#FFD601', 
      'green-500' : '#158219' ,
      'gray-500' : '#20130E',
     },
     
     padding:{
      0:'0px',
      1:'1px',
      2:'2px',
      3:'3px',
      4:'4px',
      5:'5px',
      6:'6px',
      7:'7px',
      8:'8px',
      9:'9px',
      10:'10px',
      11:'11px',
      12:'12px'
     },
     margin:{
      0:'0px',
      1:'1px',
      2:'2px',
      3:'3px',
      4:'4px',
      5:'5px',
      6:'6px',
      7:'7px',
      8:'8px',
      9:'9px',
      10:'10px',
      11:'11px',
      12:'12px'
     },
    fontSize:{
     1:'0.50rem',
     2:'0.60rem',
     3:'0.70rem',
     4:'0.75rem',
     5:'0.80rem',
     6:'0.90rem',
     xs:'1rem' 
    },
    truncate: {
      'truncate-custom': {
        'overflow': 'hidden',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap',
      },
    },
    borderRadius:{
     10 :'10px', 
     15 :'15px', 
     25 :'25px', 
     50:'50%'  
    },    
    },
    zIndex:{
     0:'0',
     1:'1' 
    },
   backgroundImage:{
    'gradient-p-s' : 'linear-gradient(to Left, #131F3E, #5d1895)'
   } 
    
  },
  plugins: [],
}

