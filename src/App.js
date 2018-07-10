import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import AboutMain from './AboutMain/AboutMain';
import ServicesMain from './ServicesMain/ServicesMain';
import ContactMain from './ContactMain/ContactMain';
import TrackingMain from './TrackingMain/TrackingMain';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path='/AboutMain' render = {
            () => {
              return (
                <AboutMain />
              );
            }
          }/>
          <Route path='/ServicesMain' render = {
            () => {
              return (
                <ServicesMain />
              );
            }
          }/>
          <Route path='/ContactMain' render = {
            () => {
              return (
                <ContactMain />
              );
            }
          }/> 
          <Route path='/TrackingMain' render = {
            () => {
              return (
                <TrackingMain />
              );
            }
          }/>         
        </div>
      </Router>
    );
  }
}

export default App;
