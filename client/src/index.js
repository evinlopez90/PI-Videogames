import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { TemaContextProvider } from './context/TemaContext';
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
//  <TemaContextProvider>
    <Provider store={store}>
     <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Provider>,
 //   </TemaContextProvider>,
  
  
  document.getElementById('root')
);


