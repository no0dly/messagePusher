import React, {Component} from 'react';
import styled from 'styled-components';

import FiltersList from './FiltersList';

export class Filters extends Component {

    render() {
        return (
            <div>
                <Title className='title is-5'>
                    Filters
                </Title>
                <FiltersList/>
            </div>
        )
    }
}

const Title = styled.h2`
    text-align: center;
    &.title:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export default Filters;
