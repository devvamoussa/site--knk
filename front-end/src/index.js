import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { stores } from './Redux/stores/Stores'
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={stores }>
        <App />
      </Provider>
    </React.StrictMode>,
  </BrowserRouter>
  
);

reportWebVitals();
