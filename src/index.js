import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import router from './router';

import 'reset-css';
import 'bulma/css/bulma.css';

const store = require('./store/configureStore').configure();

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('root')
);
