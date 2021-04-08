import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from './hooks';
import Routes from './routes';
import { GlobalStyle } from './styles/global';

// require('dotenv').config()

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes/>
      </AppProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
