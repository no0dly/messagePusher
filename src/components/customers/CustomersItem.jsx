import React from 'react';

// import styled from 'styled-components';

const CustomersItem = (props) => {
    const username              = props.username;
    const daysSinceFirstTrade   = props.days_since_first_trade;
    const daysSinceLastTrade    = props.days_since_last_trade;
    const numberOfRecentTrades  = props.number_of_recent_trades;
    const averageAmountA        = props.average_amount_a;
    const averageAmountB        = props.average_amount_b;
    const onClick               = props.onClick;

    return (
        <tr>
            <td>{username}</td>
            <td>{daysSinceFirstTrade}</td>
            <td>{daysSinceLastTrade}</td>
            <td>{numberOfRecentTrades}</td>
            <td>{averageAmountA}</td>
            <td>{averageAmountB}</td>
            <td><a onClick={onClick} href="#">Exclude</a></td>
        </tr>
    );
}

export default CustomersItem;
