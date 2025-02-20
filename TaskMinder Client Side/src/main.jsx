import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Router } from './Router/Router.jsx'
import { Authprovider } from './Component/Providers/Authprovider'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <StrictMode>
    <Authprovider>
    <Router></Router>
    </Authprovider>
  </StrictMode>
  </BrowserRouter>,
)
