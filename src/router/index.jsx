import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import App from '../components/App';
import Content from '../components/Content';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Content}/>
        </Route>
    </Router>
);
