import React, {Component} from 'react';
import styled from 'styled-components';

import Filters      from './Filters';
import Customers    from './Customers';
import Exclusion    from './Exclusion';
import Form         from './Form';


export class Content extends Component {
    render() {
        return (
            <Wrap>
                <WrapContent className="columns">
                    <WrapFilters className="column is-one-quarter">
                        <Filters/>
                    </WrapFilters>
                    <WrapCustomers className="column is-half">
                        <Customers/>
                    </WrapCustomers>
                    <WrapExclusion className="column is-one-quarter">
                        <Exclusion/>
                    </WrapExclusion>
                </WrapContent>

                <WrapForm>
                    <Form/>
                </WrapForm>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 12px;
`;

const WrapContent = styled.div`
    padding-top: 20px;
    height: calc(75vh - 40px);
    padding-left: 12px;
    padding-right: 12px;
`;

const WrapForm = styled.div`
    height: 25vh;
`;

const WrapFilters = styled.div`
    border: 1px solid #333;
`;

const WrapCustomers = styled.div`
    border: 1px solid #333;
`;

const WrapExclusion = styled.div`
    border: 1px solid #333;
`;

export default Content;