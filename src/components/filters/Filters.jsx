import React from 'react';
import styled from 'styled-components';

import FiltersList from './FiltersList';

const Filters = () => {
    return (
        <Wrap>
            <Title className='title is-5'>
                Filters
            </Title>
            <FiltersList/>
        </Wrap>
    )
}

const Wrap = styled.div`
    padding-right: 0.75rem;
`;

const Title = styled.h2`
    text-align: center;
    &.title:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export default Filters;
