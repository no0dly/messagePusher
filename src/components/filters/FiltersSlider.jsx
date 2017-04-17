import React, {Component} from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import Slider from 'rc-slider';
import * as actions from '../../actions';
import pusherAPI from '../../api';

import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);


export class FiltersSlider extends Component {
    onChange(e) {
        const {dispatch, id, filters} = this.props;
        dispatch(actions.filterUpdate(e[0], e[1], id));
        pusherAPI.storageFiltersSet(filters);
    }

    onKeyDown(e) {
        if( e.which >=37 && e.which <=40) {
            e.preventDefault();
        }
        if ( e.which === 69 || e.which === 189 ) {
            e.preventDefault();
        }
    }

    onChangeInput(input, e) {
        const {dispatch, id, filters} = this.props;

        const value = parseInt(e.target.value);
        if (e.target.value.length === 0 ) return false;
        if(input === 'min') {
            dispatch(actions.filterUpdateMin( value, id));
        } else {
            dispatch(actions.filterUpdateMax( value, id));
        }
        pusherAPI.storageFiltersSet(filters);
    }

    render() {
        const { title, min, max, id } = this.props;
        const newMin = this.props.filters[id].min;
        const newMax = this.props.filters[id].max;

        return (
            <Wrap>
                <Title>{title}</Title>
                <Content className="columns">
                    <SpinText className="column is-2">
                        {newMin}
                    </SpinText>
                    <div className="column is-7">
                        <Range min={min} max={max} defaultValue={[min, max]} onChange={this.onChange.bind(this)} tipFormatter={value => `${value}`}  value={[newMin, newMax]} />
                    </div>
                    <SpinText className="column is-3">
                        {newMax}
                    </SpinText>
                </Content>
                <div className="columns">
                    <div className="column is-5 is-offset-1">
                        <div className="field">
                            <LeftInput className="control">
                                <input value={newMin} className="input is-small" type="number" placeholder='0' onChange={this.onChangeInput.bind(this, 'min')} onKeyDown={this.onKeyDown.bind(this)} />
                            </LeftInput>
                        </div>
                    </div>
                    <div className="column is-5">
                        <div className="field">
                            <RightInput className="control">
                                <input value={newMax} className="input is-small" type="number" placeholder='100' onChange={this.onChangeInput.bind(this, 'max')}/>
                            </RightInput>
                        </div>
                    </div>
                </div>
            </Wrap>
        );
    }
}

const Wrap = styled.div`
    margin-bottom: 10px;
    text-align: center;
`;

const Title = styled.p`
    text-align: center;
    margin-bottom: 0;
    font-size: 0.75rem;
`;

const Content = styled.div`
    align-items: center;
    &.columns:not(:last-child) {
        margin-bottom: 0;
    }
`;

const LeftInput = styled.div`
    input {
        text-align: right;
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
    }
`;
const RightInput = styled.div`
    input {
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
    }
`;

const SpinText = styled.div`
    font-size: 0.75rem;
`;


export default connect(
    (state) => {
        return {
            filters: state.filters
        }
    }
)(FiltersSlider);
