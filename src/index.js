import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App tab='home' />);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
