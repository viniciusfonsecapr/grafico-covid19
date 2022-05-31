import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './containers/Home';
import GlobalStyles from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <GlobalStyles></GlobalStyles>
  </React.StrictMode>
);
