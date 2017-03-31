import React, {Component} from 'react';
import styled from 'styled-components';

import CustomersTable from './CustomersTable';

export class Customers extends Component {
    render() {
        return (
            <Wrap>
                <Title className="title is-5">
                    Customers
                </Title>
                <CustomersTable/>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    padding-right: 0.75rem;
`;


const Title = styled.h2`
    text-align: center;
`;

export default Customers;
