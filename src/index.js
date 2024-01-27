import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter
      basename={
        process.env.NODE_ENV === 'development'
          ? '/'
          : process.env.REACT_APP_PUBLIC_URL
      }
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
