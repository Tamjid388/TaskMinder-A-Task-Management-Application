import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Router } from './Router/Router.jsx'
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Authprovider } from './Component/Providers/Authprovider'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <StrictMode>
    <Authprovider>
    <QueryClientProvider client={queryClient}>
    <Router></Router>
    </QueryClientProvider>
    </Authprovider>
  </StrictMode>
  </BrowserRouter>,
)
