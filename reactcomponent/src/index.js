import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore, applyMiddleware} from "redux";
import {myReducer} from './reducers/reducerIndex';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";

const store=createStore(myReducer, applyMiddleware(thunk, logger)); //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Provider store={store}>
  //   <App />
  //   </Provider>
  // </React.StrictMode>
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
