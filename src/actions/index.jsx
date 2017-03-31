import http         from '../api/http';
import pusherAPI 	from '../api';

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

export const exclusionsSet = (exclusions) => {
    return {
        type: 'EXCLUSION_SET',
        exclusions
    }
}

export const filtersSet = (filters) => {
    return {
        type: 'FILTERS_SET',
        filters
    }
}

export const filterUpdate = (min, max, id) => {
    return {
        type: 'FILTERS_UPDATE',
        min,
        max,
        id
    }
}

export const filterUpdateMin = (min, id) => {
    return {
        type: 'FILTERS_UPDATE_MIN',
        min,
        id
    }
}

export const filterUpdateMax = (max, id) => {
    return {
        type: 'FILTERS_UPDATE_MAX',
        max,
        id
    }
}

export const startGetData = () => {
    return (dispatch, getState) => {
        return http.getData().then((data)=>{
        	dispatch( getData(data) );
            dispatch( filtersSet(data.filters) );
            dispatch( exclusionsSet( pusherAPI.storageExclusionsGet() ));
        });
    }
}
