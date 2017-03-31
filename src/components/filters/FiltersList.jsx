import React, {Component} from 'react';
import {connect} from 'react-redux';

// import styled from 'styled-components';

import FiltersSlider from './FiltersSlider';

export class FiltersList extends Component {

    render() {
        const renderSliders = () => {
            const { filters } = this.props;

            return Object.keys(filters).map( (filter, idx) => {
                return <FiltersSlider key={idx} {...filters[filter]} id={filter}/>
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
    (state)=> {
        return {
            filters: state.data.filters
        }
    }
)(FiltersList);
