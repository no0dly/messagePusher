import React, {Component} from 'react';
import styled from 'styled-components';

import ExclusionItem from './ExclusionItem';

export class ExclusionTable extends Component {

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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <ExclusionItem/>
                        <ExclusionItem/>
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

export default ExclusionTable;
