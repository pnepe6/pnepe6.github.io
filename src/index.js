import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(NextApp);
  });
}