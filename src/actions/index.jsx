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
