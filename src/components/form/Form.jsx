import React, {Component} from 'react';
import styled from 'styled-components';

import FormMessage from './FormMessage';

export class Form extends Component {
    render() {
        return (
            <form action="#">
                <Wrap className="columns">
                    <div className="column is-5">
                        <FormMessage title="message 1"/>
                    </div>
                    <div className="column is-5">
                        <FormMessage title="message 2"/>
                    </div>
                    <div className="column is-2">
                        <input className="button is-primary is-large" type="submit"/>
                    </div>
                </Wrap>
            </form>
        )
    }
}

const Wrap = styled.div`
    text-align: center;
    align-items: center;
`;

export default Form;
