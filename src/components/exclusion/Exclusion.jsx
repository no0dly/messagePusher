import React, {Component} from 'react';
import styled from 'styled-components';

import ExclusionTable from './ExclusionTable';

export class Exclusion extends Component {
    render() {
        return (
            <div>
                <Title className="title is-5">
                    Exclusion
                </Title>
                <ExclusionTable/>
            </div>
        )
    }
}

const Title = styled.h2`
    text-align: center;
`;

export default Exclusion;
