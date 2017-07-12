import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';

import App from './components/app/App.jsx';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter >
    </Provider>,
    document.getElementById('root')
);
