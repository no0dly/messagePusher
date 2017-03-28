import React, {Component} from 'react';

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
                    <p className="control">
                        <label className="radio">
                            <input type="radio" name="question"/>
                            only sell trades
                        </label>
                        <label className="radio">
                            <input type="radio" name="question"/>
                            only buy trades
                        </label>
                    </p>
                </div>

            </div>
        )
    }
}


export default FiltersList;
