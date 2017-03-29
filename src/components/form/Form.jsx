import React, {Component} from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';

import FormMessage from './FormMessage';

export class Form extends Component {
    render() {
        const {messageOne, messageTwo} = this.props;

        return (

            <form action="#">
                <Wrap className="columns">
                    <div className="column is-5">
                        <FormMessage title="message 1" text={messageOne}/>
                    </div>
                    <div className="column is-5">
                        <FormMessage title="message 2" text={messageTwo}/>
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

export default connect(
    (state) => {
        return {
            messageOne: state.data.message_1,
            messageTwo: state.data.message_2
        }
    }
)(Form);
