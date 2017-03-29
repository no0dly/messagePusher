import React, {Component} from 'react';
import styled from 'styled-components';

import CustomersTable from './CustomersTable';

export class Customers extends Component {
    render() {
        return (
            <div>
                <Title className="title is-5">
                    Customers
                </Title>
                <CustomersTable/>
            </div>
        )
    }
}

const Title = styled.h2`
    text-align: center;
`;

export default Customers;
