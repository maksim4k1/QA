import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './redux';
import ScrollToTop from './utils/ScrollToTop';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <React.StrictMode>
        <ScrollToTop />
        <App />
      </React.StrictMode>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);