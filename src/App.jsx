import React from 'react'
import './App.css'
import RouterSetup from './route/route'
import { Button, ThemeProvider } from '@mui/material'
import theme from './theme'

const App = () => {
  return (
   <ThemeProvider theme={theme}>
    <div className='relative overflow-hidden'>
     <RouterSetup/> 
    </div>
   </ThemeProvider>  
  )
}

export default App