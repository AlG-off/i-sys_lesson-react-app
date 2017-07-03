import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import App from './components/App/App.jsx';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);
