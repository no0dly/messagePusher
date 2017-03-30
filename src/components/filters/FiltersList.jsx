import React, {Component} from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';

import FiltersSlider from './FiltersSlider';

export class FiltersList extends Component {

    render() {
        const renderSliders = () => {
            const { data } = this.props;
            return data.map( (filter, idx) => {
                return <FiltersSlider key={idx} {...filter} id={idx}/>
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
            data: state.data.filters
        }
    }
)(FiltersList);
