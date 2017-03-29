export const dataReducer = (state={}, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return action.data;

        case 'FILTER_CHANGE':
            let newState = state;
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
