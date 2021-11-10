
const  ADD_CITY = "ADD_CITY"

export const cityReducer = (state = [],action) =>{
    switch(action.type){
        case ADD_CITY : 
           return [
                   action.payload.data
           ]
        default : 
           return state
    }
} 