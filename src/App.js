import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import AboutMain from './AboutMain/AboutMain';
import ServicesMain from './ServicesMain/ServicesMain';
import ContactMain from './ContactMain/ContactMain';
import TrackingMain from './TrackingMain/TrackingMain';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component= {AboutMain} />
          <Route path="/about" component= {AboutMain} />
          <Route path="/contacts" component= {ContactMain} />
          <Route path="/services" component= {ServicesMain} />
          <Route path="/tracking/:number?" component= {TrackingMain} />
        </div>
      </Router>
    );
  }
}

export default App;

