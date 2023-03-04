import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <reactRouter.BrowserRouter>
      <App />
    </reactRouter.BrowserRouter>
  </React.StrictMode>
);
