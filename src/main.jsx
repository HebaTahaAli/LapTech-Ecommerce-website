import  ReactDom  from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import React from "react"
import CartProvider from './component/context/CartContext.jsx';

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
   <CartProvider>

   <App/>

   </CartProvider>
  </BrowserRouter>,
  </React.StrictMode>,
)
