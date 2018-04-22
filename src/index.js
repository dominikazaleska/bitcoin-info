import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<App key='main-app-component'/>, document.getElementById('root'));
registerServiceWorker();
