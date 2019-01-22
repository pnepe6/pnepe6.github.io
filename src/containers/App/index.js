import React, { Component } from 'react';
import { Helmet } from "react-helmet";
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
        <Helmet>
            <meta charSet="utf-8" />
            <title>Cv chef de projet digital</title>
        	<meta name="description" content="Curriculum vitae d'Adrien Gadaud, Chef de projet Web et Chef de projet Digital en région parisienne." />
        </Helmet>
      	<Navigation />
		<Footer />
      </div>
    );
  }
}

export default App;
