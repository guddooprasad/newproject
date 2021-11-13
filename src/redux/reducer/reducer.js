import  {ADD_CITY, PROPERTIES_LIST} from '../actions/actionTypes';

const initialstate = {
    cityList: [],
    propertiesList: {}
}

export const Reducer = (state = initialstate,action) =>{
    switch(action.type){
        case ADD_CITY :
           return {...state, cityList:action.payload.data }
        case PROPERTIES_LIST :
           return {...state, propertiesList:action.payload.data }
        default : 
           return state
    }
} 