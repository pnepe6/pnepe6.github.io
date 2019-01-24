import React from 'react';
// import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-snapshot';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

render(<AppContainer><App /></AppContainer>, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(<AppContainer><NextApp /></AppContainer>, document.getElementById('root'));
  });
}