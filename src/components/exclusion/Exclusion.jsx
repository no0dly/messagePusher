import React, {Component} from 'react';
import styled from 'styled-components';

import ExclusionTable from './ExclusionTable';

export class Exclusion extends Component {
    render() {
        return (
            <Wrap>
                <Title className="title is-5">
                    Exclusions
                </Title>
                <ExclusionTable/>
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

export default Exclusion;
