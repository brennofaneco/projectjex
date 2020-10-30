import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QueryProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
