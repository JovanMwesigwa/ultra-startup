import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './globalStyles';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
