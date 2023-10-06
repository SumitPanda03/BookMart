/* eslint-disable no-unused-vars */
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
  </StrictMode>
)
