import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter2 from './Counter2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter2/>
  </StrictMode>,
)
