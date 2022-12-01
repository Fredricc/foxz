import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css'; // global
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();

