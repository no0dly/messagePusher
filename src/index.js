import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import * as actions from './actions';

import router from './router';

import 'reset-css';
import 'bulma/css/bulma.css';

const store = require('./store/configureStore').configure();

const data = {
	"customers": [
		{
			"username": "sapphire",
			"days_since_first_trade": 70,
			"days_since_last_trade": 11,
			"number_of_recent_trades": 4,
			"average_amount_a": 451,
			"average_amount_b": 327
		},
		{
			"username": "no0dly",
			"days_since_first_trade": 35,
			"days_since_last_trade": 8,
			"number_of_recent_trades": 12,
			"average_amount_a": 733,
			"average_amount_b": 459
		}
	],
	"customers_count": 2,
	"filters": [
		{
            "title": "Days Since first trade",
			"min": 0,
			"max": 70
		},
		{
            "title": "Days Since first trade",
			"min": 0,
			"max": 11
		},
		{
            "title": "Number of trades within last 30 days",
			"min": 0,
			"max": 12
		},
		{
            "title": "Average trade amount A",
			"min": 0,
			"max": 800
		},
		{
            "title": "Average trade amount B",
			"min": 0,
			"max": 500
		}
	],
	"message_1": "Hello, dear customer! If you need to make a trade today, don't forget about me ;)",
	"message_2": "Just open a new trade with me whenever you need. You can also contact me personally, check my contacts in my profile."
}

store.dispatch(actions.getData(data));

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('root')
);
