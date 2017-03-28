import React, {Component} from 'react';
import styled from 'styled-components';

export class Customers extends Component {
    render() {
        return (
            <div>
                <Title>
                    <TitleText className="title is-4">
                        Customers
                    </TitleText>
                </Title>
            </div>
        )
    }
}

const Title = styled.div`
    margin-bottom: 10px;
`;

const TitleText = styled.h2`
    text-align: center;
`;

export default Customers;