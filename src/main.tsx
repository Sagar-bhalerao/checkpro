import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import CursorAnimation from './components/CursorAnimation.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
  <CursorAnimation/>
  <App />
  </BrowserRouter>
</StrictMode>,
)
