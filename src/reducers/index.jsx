export const dataReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return action.data;

        default:
            return state;
    }

}

export const exclusionsReducer = (state = [], action) => {
    switch (action.type) {
        case 'EXCLUSION_SET':
            return [
                ...state,
                ...action.exclusions
            ];
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


export const filtersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FILTERS_SET':
            return {...action.filters};

        case 'FILTERS_UPDATE':
            let newState = {...state};
            newState[action.id].min = action.min;
            newState[action.id].max = action.max;

            return newState;

        case 'FILTERS_UPDATE_MIN':
            let newStateMin = {...state};
            newStateMin[action.id].min = action.min;

            return newStateMin;

        case 'FILTERS_UPDATE_MAX':
            let newStateMax = {...state};
            newStateMax[action.id].max = action.max;

            return newStateMax;

        default:
            return state;
    }

}
