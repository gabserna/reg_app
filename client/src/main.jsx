import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/Login.jsx'  //change filename to deploy
import './Style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
