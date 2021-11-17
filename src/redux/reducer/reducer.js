import  {ADD_CITY, PROPERTIES_LIST, FACSET_INFO} from '../actions/actionTypes';

const initialstate = {
    cityList: [],
    propertiesList: {},
    facsetInfo: {}
}

export const Reducer = (state = initialstate,action) =>{
    switch(action.type){
        case ADD_CITY :
           return {...state, cityList:action.payload.data }
        case PROPERTIES_LIST :
           return {...state, propertiesList:action.payload.data }
        case FACSET_INFO :
            return {...state, facsetInfo:action.payload.data }
        default : 
           return state
    }
} 