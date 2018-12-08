import React, { Component } from 'react';
// import logo from '../../logo.svg';
import Navigation from '../Navigation';
import Footer from '../../components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Navigation />
        <Footer />
      </div>
    );
  }
}

export default App;
