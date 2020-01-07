import React, { Component } from 'react';
import ReactGA from 'react-ga';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import Navigation from '../Navigation';
import Footer from '../../components/Footer';
import './App.css';

ReactGA.initialize('UA-132856652-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const pnepe6Theme = {
	"$brand-primary": "#28137d",
	"$brand-secondary": "#31d6c8",
	"$brand-success": "green",
	"$brand-info": "green",
	"$brand-warning": "green",
	"$brand-danger": "green",
	"$brand-inverse": "green",
	"$btn-secondary-color": "#28137d",
	"$btn-secondary-bg": "#31d6c8",
	"$btn-secondary-border": "#28137d",
};

class App extends Component {

  render() {
    return (
      <BootstrapProvider theme={pnepe6Theme}>
      	<Navigation />
		<Footer />
      </BootstrapProvider>
    );
  }
}

export default App;
