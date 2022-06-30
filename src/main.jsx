import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { CartListContextProvider } from "./context/CartListContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartListContextProvider>
      <App />
    </CartListContextProvider>
  </React.StrictMode>
)
