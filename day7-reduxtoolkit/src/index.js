import React from 'react';
import ReactDOM from 'react-dom/client';
import * as reactRedux from "react-redux";
import App from './App';

import * as reactRouter from "react-router-dom"

import store from "./feature/store"; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <reactRouter.BrowserRouter> */}
      <reactRedux.Provider store={store}>
      <App/>
      </reactRedux.Provider>
    {/* </reactRouter.BrowserRouter> */}
  </React.StrictMode>
);
