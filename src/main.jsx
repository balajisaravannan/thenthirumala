import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { I18nextProvider } from 'react-i18next'
import './i18n/i18n.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <App />   
  </React.StrictMode>,
)
