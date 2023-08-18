import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer, } from 'react-toastify';
import { StoreProvider } from './redux.jsx';
import 'react-toastify/dist/ReactToastify.css';

import './index.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <ToastContainer
      position="top-center"
      autoClose={5000}
      newestOnTop={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <StoreProvider>
       <App />
    </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
