import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes/>
        <GlobalStyle />
      </div>
    </Router>
  );
}

export default App;
