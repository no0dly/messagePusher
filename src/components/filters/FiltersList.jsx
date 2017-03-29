import React, {Component} from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';

import FiltersSlider from './FiltersSlider';
import * as actions from '../../actions';

export class FiltersList extends Component {
    onChangeHandler(e) {

    }
    render() {
        const renderSliders = () => {
            const { filters } = this.props;
            return filters.map( (filter, idx) => {
                return <FiltersSlider onChange={this.onChangeHandler.bind(this)} key={idx} {...filter}/>
            });
        }
        return (
            <div>
                {renderSliders()}
                <div className="field">
                    <Control className="control">
                        <Label className="radio">
                            <input type="radio" name="question"/>
                            only sell trades
                        </Label>
                        <Label className="radio">
                            <input type="radio" name="question"/>
                            only buy trades
                        </Label>
                    </Control>
                </div>

            </div>
        )
    }
}

const Label = styled.label`
    font-size: 0.75rem;
`;
const Control = styled.p`
    &.control {
        text-align: center;
    }
`;

export default connect(
    (state)=> {
        return {
            filters: state.data.filters
        }
    }
)(FiltersList);
