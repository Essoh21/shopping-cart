import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './style/search.css';
import './style/Cart.css';
import './style/App.css';
import './style/card.css';
import './style/NavBar.css';
import './style/AddToCart.css';
import './style/AssideNavBar.css';
import App from './components/App.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
