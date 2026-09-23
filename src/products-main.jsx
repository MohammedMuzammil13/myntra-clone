import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Products from './Products'
import Header from './Header'
import ProductType from './ProductType'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <ProductType></ProductType>
    
    <Products></Products>
    
  </StrictMode>,
)
