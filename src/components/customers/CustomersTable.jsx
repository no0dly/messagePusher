import React, {Component} from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';

import CustomersItem from './CustomersItem';
import * as actions from '../../actions';
import pusherAPI from '../../api';

export class CustomersTable extends Component {
    onClick(username, e) {
        e.preventDefault();
        const { dispatch } = this.props;

        dispatch(actions.exclusionAdd(username));
    }

    render() {
        const renderCustomer = () => {
            const { customers, exclusions } = this.props;

            return pusherAPI.filter(customers, exclusions).map( (customer, idx) => {
                return <CustomersItem key={idx} {...customer} onClick={this.onClick.bind(this, customer.username)}/>
            });
        }
        return (
            <div>
                <Table className="table is-bordered is-striped">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Days since first trade</th>
                            <th>Days since last trade</th>
                            <th># of trades in last 30 days</th>
                            <th>Average amount A</th>
                            <th>Average amount B</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Username</th>
                            <th>Days since first trade</th>
                            <th>Days since last trade</th>
                            <th># of trades in last 30 days</th>
                            <th>Average amount A</th>
                            <th>Average amount B</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {renderCustomer()}
                  </tbody>
              </Table>
            </div>
        )
    }
}

const Table = styled.table`
    tr {
        td,
        th {
            vertical-align: middle;
            text-align: center;
        }
    }
`;

export default connect(
    (state) => {
        return {
            customers: state.data.customers,
            exclusions: state.exclusions
        }
    }
)(CustomersTable);
