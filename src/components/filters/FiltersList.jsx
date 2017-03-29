import React, {Component} from 'react';

import styled from 'styled-components';

import FiltersSlider from './FiltersSlider';

export class FiltersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: [
                {
                    title: 'Days Since first trade',
                    min: 0,
                    max: 100
                },
                {
                    title: 'Days Since first trade',
                    min: 0,
                    max: 21
                },
                {
                    title: 'Number of trades within last 30 days',
                    min: 0,
                    max: 10
                },
                {
                    title: 'Average trade amount A',
                    min: 0,
                    max: 500
                },
                {
                    title: 'Average trade amount B',
                    min: 0,
                    max: 1000
                },
            ]

        }
    }
    render() {
        const renderSliders = () => {
            const { filters } = this.state;
            return filters.map( (filter, idx) => {
                return <FiltersSlider key={idx} {...filter}/>
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


export default FiltersList;
