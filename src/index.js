import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/css/index.css';

import App from './App';
import store from './redux/store';

import abstractDataLayer from './repository/abstractDataLayer';
import diContainer from './diContainer';

import registerServiceWorker from './registerServiceWorker';

diContainer.bootstrap(store, new abstractDataLayer(store));

const baseJsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(baseJsx, document.querySelector('#reactContainer'));
registerServiceWorker();
