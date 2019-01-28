import React from 'react';
// import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { AppContainer } from 'react-hot-loader'
=======
>>>>>>> d373092... Fix seo and hmr.
import { render } from 'react-snapshot';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

<<<<<<< HEAD
render(<AppContainer><App /></AppContainer>, document.getElementById('root'));
=======
render(<App />, document.getElementById('root'));
>>>>>>> d373092... Fix seo and hmr.
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(<AppContainer><NextApp /></AppContainer>, document.getElementById('root'));
    registerServiceWorker();
  });
}