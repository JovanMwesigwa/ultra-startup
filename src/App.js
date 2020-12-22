import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
}

export default App;
