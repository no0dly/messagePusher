import React, {Component} from 'react';
import styled from 'styled-components';

import CustomersItem from './CustomersItem';

export class CustomersTable extends Component {

    render() {
        // const renderCell = () => {
        //     const { filters } = this.state;
        //     return filters.map( (filter, idx) => {
        //         return <FiltersSlider key={idx} {...filter}/>
        //     });
        // }
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
                        <CustomersItem/>
                        <CustomersItem/>
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

export default CustomersTable;
