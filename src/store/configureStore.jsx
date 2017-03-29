import * as redux from 'redux';
import thunk from 'redux-thunk';

import {dataReducer, exclusionsReducer} from '../reducers';

export const configure = ( initialState = {} ) => {
    var reducer = redux.combineReducers({
        data: dataReducer,
        exclusions: exclusionsReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};
