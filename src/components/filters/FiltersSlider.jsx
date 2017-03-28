import React from 'react';

import styled from 'styled-components';

import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const FiltersSlider = (props) => {
    const { title, min, max } = props;
    return (
        <Wrap>
            <Title>{title}</Title>
            <Content className="columns">
                <div className="column is-2">
                    {min}
                </div>
                <div className="column is-7">
                    <Range min={min} max={max} defaultValue={[3, 10]} tipFormatter={value => `${value}`} />
                </div>
                <div className="column is-3">
                    {max}
                </div>
            </Content>
            <div className="columns">
                <div className="column is-5 is-offset-1">
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" value={min}/>
                        </div>
                    </div>
                </div>
                <div className="column is-5">
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" value={max}/>
                        </div>
                    </div>
                </div>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    margin-bottom: 20px;
    text-align: center;
`;

const Title = styled.p`
    text-align: center;
    margin-bottom: 10px;
`;

const Content = styled.div`
    align-items: center;
`;


export default FiltersSlider;
