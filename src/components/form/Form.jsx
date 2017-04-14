import React, {Component} from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';

import FormMessage from './FormMessage';
import pusherAPI from '../../api';
import http from '../../api/http';


export class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            showPopup: false,
            popupText: '',
            loading: false
        };
    }
    onSubmit(e) {
        e.preventDefault();
        const self = this;

        self.setState({
            loading: true
        })

        http.sendData( pusherAPI.fetchFormData(this.form) )
            .then(function (response) {

                self.setState({
                    showPopup: true,
                    popupText: response.success,
                    loading: false
                })
            })
            .catch(function (error) {
                self.setState({
                    showPopup: true,
                    popupText: error,
                    loading: false
                })
            });
    }

    render() {
        const {messageOne, messageTwo} = this.props;
        const {showPopup, popupText, loading} = this.state;

        const renderNotification = () => {
            if ( showPopup ) {
                if( popupText ) {
                    return (
                        <NotifWrap>
                            <div className="notification is-success">
                              <button onClick={() => this.setState({showPopup: false, popupText: ''})} className="delete">
                               </button>
                               Data was sent successfully.
                            </div>
                        </NotifWrap>
                    )
                } else {
                    return (
                        <NotifWrap>
                            <div className="notification is-danger">
                              <button onClick={() => this.setState({showPopup: false, popupText: ''})} className="delete">
                               </button>
                               Data was not sent. Server side error.
                            </div>
                        </NotifWrap>
                    )
                }
            }
        }

        const renderButton = () => {
            return (
                <input className={ (!loading) ? "button is-primary is-large" : "button is-primary is-large is-loading is-disabled" } type="submit" value="Send"/>
            )
        }

        return (

            <form ref={(form) => this.form = form} action="#" onSubmit={this.onSubmit.bind(this)}>
                <Wrap className="columns">
                    <div className="column is-5">
                        <FormMessage id="messageOne" title="message 1" text={messageOne}/>
                    </div>
                    <div className="column is-5">
                        <FormMessage id="messageTwo" title="message 2" text={messageTwo}/>
                    </div>
                    <div className="column is-2">
                        {renderButton()}
                    </div>
                </Wrap>

                { renderNotification() }

            </form>
        )
    }
}


const Wrap = styled.div`
    text-align: center;
    align-items: center;
    margin-bottom: 0!important;
`;

const NotifWrap = styled.div`
    .notification {
        position: absolute;
        bottom: 0;
        left: 0.75rem;
        right: 0.75rem;
    }
`;

export default connect(
    (state) => {
        return {
            messageOne: state.data.message_1,
            messageTwo: state.data.message_2
        }
    }
)(Form);
