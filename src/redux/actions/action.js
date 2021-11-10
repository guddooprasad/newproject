const  ADD_CITY = "ADD_CITY"


export const addCity = (data) =>{
    return {
        type : ADD_CITY,
        payload : {data}
    }
}