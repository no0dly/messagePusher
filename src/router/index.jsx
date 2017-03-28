import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import App from '../components/App';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>

        </Route>
    </Router>
);
