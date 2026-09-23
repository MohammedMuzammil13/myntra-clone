import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Product from './Product'
import Header from './Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <Product></Product>
  </StrictMode>,
)
