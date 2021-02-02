import React from 'react';
import ReactDOM from 'react-dom';
import { NavProvider } from './data/state/nav-state';
import App from './pages';

ReactDOM.render(
  <React.StrictMode>
    <NavProvider>
      <App />
    </NavProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
