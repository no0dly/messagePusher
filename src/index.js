import React 		from 'react';
import ReactDOM 	from 'react-dom';
import {Provider} 	from 'react-redux';

import * as actions from './actions';

import pusherAPI 	from './api';
import http         from './api/http';

import router 		from './router';

import 'reset-css';
import 'bulma/css/bulma.css';

const store = require('./store/configureStore').configure();


http.getData().then((response)=>{
	debugger;
	store.dispatch(actions.getData(response));
	
	store.dispatch(actions.filtersSet(store.getState().data.filters));
	// store.dispatch(actions.exclusionsSet( pusherAPI.storageExclusionsGet() ));
	debugger;
	ReactDOM.render(
	    <Provider store={store}>
	        {router}
	    </Provider>,
	    document.getElementById('root')
	);

});
