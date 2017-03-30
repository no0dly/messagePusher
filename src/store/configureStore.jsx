import * as redux from 'redux';
import thunk from 'redux-thunk';

import {dataReducer, exclusionsReducer, filtersReducer } from '../reducers';

export const configure = ( initialState = {} ) => {
    var reducer = redux.combineReducers({
        data: dataReducer,
        exclusions: exclusionsReducer,
        filters: filtersReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};
