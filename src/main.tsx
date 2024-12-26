import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import CursorAnimation from './components/CursorAnimation.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>  
      <ToastContainer position='top-right'/>
    <Provider store={store}>
  {/* <CursorAnimation/> */}
  <App />
  </Provider>
  </BrowserRouter>
</StrictMode>,
)
