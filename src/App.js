import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './globalStyles';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
