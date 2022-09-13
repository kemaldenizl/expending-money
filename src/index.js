import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { store } from "./redux/store"
import { Provider } from 'react-redux'
import "alertifyjs/build/css/alertify.min.css" 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
    <App />
  </Provider>   
  
);
