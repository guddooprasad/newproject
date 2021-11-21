import  {ADD_CITY, PROPERTIES_LIST, FACSET_INFO, FILTER_DATA} from './actionTypes';

export const addCity = (data) =>{
    return {
        type : ADD_CITY,
        payload : {data}
    }
}

export const addPropertiesList = (data) =>{
    return {
        type : PROPERTIES_LIST,
        payload : {data}
    }
}

export const addFacsetData = (data) => {
    return {
        type : FACSET_INFO,
        payload : {data}
    }
}

export const addFilterValue  = (data) => {
    return {
        type: FILTER_DATA,
        payload: {data}
    }
}