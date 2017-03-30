import React, {Component} from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';

import FiltersSlider from './FiltersSlider';
import * as actions from '../../actions';

export class FiltersList extends Component {
    onChangeHandler(idx, e) {
        const {dispatch} = this.props;
        console.log(e[0], e[1], idx);
        dispatch(actions.filterUpdate(e[0], e[1], idx));
    }
    render() {
        const renderSliders = () => {
            const { data, filters } = this.props;
            return data.map( (filter, idx) => {
                return <FiltersSlider onChange={this.onChangeHandler.bind(this, idx)} key={idx} defaultMin={filters[idx].min} defaultMax={filters[idx].max} {...filter}/>
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
            data: state.data.filters,
            filters: state.filters
        }
    }
)(FiltersList);
