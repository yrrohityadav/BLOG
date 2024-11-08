import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Import BrowserRouter
import './index.css' // Import the global styles (if you have any)
import App from './App.jsx' // Import your App component

// Create the root of your application and wrap it with BrowserRouter
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>  {/* This enables routing throughout the App */}
    <App />
  </BrowserRouter>
)
