import React, {Component} from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

import Filters      from './filters/Filters';
import Customers    from './customers/Customers';
import Exclusion    from './exclusion/Exclusion';
import Form         from './form/Form';


export class Content extends Component {
    render() {
        return (
            <Wrap>
                <WrapContent className="columns">
                    <WrapFilters className="column is-one-quarter">
                        <Scrollbars autoHide={true}
                            renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{display:"none"}}/>}>
                            <Filters/>
                        </Scrollbars>
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
    padding-right: 0!important;
`;

const WrapCustomers = styled.div`
    border: 1px solid #333;
`;

const WrapExclusion = styled.div`
    border: 1px solid #333;
`;

export default Content;
