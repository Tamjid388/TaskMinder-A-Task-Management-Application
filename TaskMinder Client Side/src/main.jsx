import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Router } from './Router/Router.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <StrictMode>
    <Router></Router>
  </StrictMode>
  </BrowserRouter>,
)
