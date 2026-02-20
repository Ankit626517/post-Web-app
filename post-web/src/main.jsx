import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PostProvider } from './Contextapi/PostProvider.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <PostProvider>
    <App />
  </PostProvider>
)
