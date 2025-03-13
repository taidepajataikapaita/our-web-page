import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'sonner'
import './i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
      <App />
      <Toaster richColors position="top-center" />
    </>
)
