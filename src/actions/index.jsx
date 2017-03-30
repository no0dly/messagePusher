// export const startGetData (data) => {
//     return (dispatch, getState) => {
//
//     }
// }

export const getData = (data) => {
    return {
        type: 'GET_DATA',
        data
    }
}

export const filterChange = (min, max, idx) => {
    return {
        type: 'FILTER_CHANGE',
        min,
        max,
        idx
    }
}

export const exclusionAdd = (username) => {
    return {
        type: 'EXCLUSION_ADD',
        username
    }
}

export const exclusionRemove = (username) => {
    return {
        type: 'EXCLUSION_REMOVE',
        username
    }
}

export const filtersSet = (filters) => {
    return {
        type: 'FILTERS_SET',
        filters
    }
}

export const filterUpdate = (min, max, idx) => {
    return {
        type: 'FILTERS_UPDATE',
        min,
        max,
        idx
    }
}

export const filterUpdateMin = (min, idx) => {
    return {
        type: 'FILTERS_UPDATE_MIN',
        min,
        idx
    }
}

export const filterUpdateMax = ( max, idx) => {
    return {
        type: 'FILTERS_UPDATE_MAX',
        max,
        idx
    }
}
