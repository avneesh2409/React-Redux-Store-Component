import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { ConnectedRouter } from 'connected-react-router';
import App from './App';
import { Provider } from 'react-redux'
import store from './store/store'
import registerServiceWorker from './registerServiceWorker';
//import { history } from './store/history';

ReactDOM.render(
    <Provider store={store}>

        <App />

    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
