import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios'

// Set default base URL for axios
 baseURL: import.meta.env.VITE_API_URL || "http://192.168.222.129:9001/api"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
