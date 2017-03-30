import React from 'react';

import styled from 'styled-components';

import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const FiltersSlider = (props) => {
    const { title, min, max, onChange, defaultMin, defaultMax } = props;

    return (
        <Wrap>
            <Title>{title}</Title>
            <Content className="columns">
                <SpinText className="column is-2">
                    {defaultMin}
                </SpinText>
                <div className="column is-7">
                    <Range min={min} max={max} defaultValue={[defaultMin, defaultMax]} onChange={onChange} tipFormatter={value => `${value}`} />
                </div>
                <SpinText className="column is-3">
                    {defaultMax}
                </SpinText>
            </Content>
            <div className="columns">
                <div className="column is-5 is-offset-1">
                    <div className="field">
                        <div className="control">
                            <LeftInput defaultValue={defaultMin} className="input is-small" type="text" placeholder='0'/>
                        </div>
                    </div>
                </div>
                <div className="column is-5">
                    <div className="field">
                        <div className="control">
                            <input defaultValue={defaultMax} className="input is-small" type="text" placeholder='100'/>
                        </div>
                    </div>
                </div>
            </div>
        </Wrap>
    );
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

const LeftInput = styled.input`
    text-align: right;
`;

const SpinText = styled.div`
    font-size: 0.75rem;
`;


export default FiltersSlider;
