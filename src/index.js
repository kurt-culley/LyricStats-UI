import React from 'react';
import ReactDOM from 'react-dom';
import './Styling/index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './Reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();