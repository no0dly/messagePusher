import React, {Component} from 'react';
import {connect} from 'react-redux';

import FiltersSlider from './FiltersSlider';

import pusherAPI from '../../api';

export class FiltersList extends Component {

    render() {
        const renderSliders = () => {
            const { filters } = this.props;

            return pusherAPI.sortFilters(filters).map( (filterArr, idx) => {
                return <FiltersSlider key={idx} {...filters[filterArr[0]]} id={filterArr[0]}/>
            });
        }
        return (
            <div>
                {renderSliders()}
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            filters: state.data.filters
        }
    }
)(FiltersList);
