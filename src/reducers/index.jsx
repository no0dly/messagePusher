export const dataReducer = (state={}, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return action.data;

        case 'FILTER_CHANGE':
            let newState = {...state};
            newState.filters[action.idx].min = action.min;
            newState.filters[action.idx].max = action.max;

            return newState;

        default:
            return state;
    }

}

export const exclusionsReducer = (state=[], action) => {
    switch (action.type) {
        case 'EXCLUSION_ADD':
            return [
                ...state,
                action.username
            ];
        case 'EXCLUSION_REMOVE':
            return state.filter((exclusion) => exclusion.indexOf(action.username) !== -1 ? false : true);
        default:
            return state;
    }

}


export const filtersReducer = (state={}, action) => {
    switch (action.type) {
        case 'FILTERS_SET':
            // let filters = {};
            // filters = action.filters.forEach( (filter) => {
            //     let key = filter.title.toLowerCase().split(' ').join('_');
            //     filters[key] = {
            //         min: filter.min,
            //         max: filter.max
            //     }

            // });
            // debugger;
            // return filters;
            return action.filters;
        case 'FILTERS_UPDATE':
            let newState = [...state];
            newState[action.idx].min = action.min;
            newState[action.idx].max = action.max;

            return newState;
        default:
            return state;
    }

}