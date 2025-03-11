import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
    <>
      <App />
      <Toaster richColors position="top-center" />
    </>
)
