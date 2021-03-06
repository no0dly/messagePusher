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
	store.dispatch(actions.getData(response));
	store.dispatch(actions.exclusionsSet( pusherAPI.storageExclusionsGet() ));

	store.dispatch(actions.filtersSet(pusherAPI.combinedFilters(store.getState().data.filters, pusherAPI.storageFiltersGet() )));
	ReactDOM.render(
	    <Provider store={store}>
	        {router}
	    </Provider>,
	    document.getElementById('root')
	);

}).catch(()=> {
	alert('error!')
})
