import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//!Render the App component to the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />   
  </React.StrictMode>,
)

//! React.StrictMode
//* Tool that helps developers identify potential problems in their code.
//* StrictMode only performs checks and displays warnings in development mode.
//* In production mode, StrictMode does not perform any checks or display any warnings. 

//- Benefits to using StrictMode in React:
// Detecting deprecated features:
// Encouraging best practices:
// unsafe lifecycle methods that are no longer recommended by the React team