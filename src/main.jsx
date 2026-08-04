import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

// Avoid a flash of the wrong theme on first paint.
const storedTheme = localStorage.getItem('theme')
const prefersDarkByDefault = storedTheme ? storedTheme === 'dark' : true
document.documentElement.dataset.theme = prefersDarkByDefault ? 'dark' : 'light'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
