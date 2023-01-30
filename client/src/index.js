import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App';
import './fonts/Gilroy/Gilroy-Light.ttf';
import './fonts/Gilroy/Gilroy-Medium.ttf';
import './fonts/Gilroy/Gilroy-Bold.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
