import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Navigation from '../Navigation';
import Footer from '../../components/Footer';
import './App.css';

ReactGA.initialize('UA-132856652-1');
ReactGA.pageview(window.location.pathname + window.location.search);

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
