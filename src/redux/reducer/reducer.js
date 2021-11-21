import  {ADD_CITY, PROPERTIES_LIST, FACSET_INFO, FILTER_DATA} from '../actions/actionTypes';

const initialstate = {
    cityList: [],
    propertiesList: {},
    facsetInfo: {},
    filterData: {}
}

export const Reducer = (state = initialstate,action) =>{
    switch(action.type){
        case ADD_CITY :
           return {...state, cityList:action.payload.data }
        case PROPERTIES_LIST :
           return {...state, propertiesList:action.payload.data }
        case FACSET_INFO :
            return {...state, facsetInfo:action.payload.data }
        case FILTER_DATA:
            {
                const { key, value} = action.payload.data;
                return {...state, filterData: {...state.filterData, [key]: value}}
            } 
        default : 
           return state
    }
}  