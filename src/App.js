import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './globalStyles';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import About from './pages/About/About'
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/products" exact component={Products} />
        <Route path="/services" exact component={Services} />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
