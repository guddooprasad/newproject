import React , {useEffect, useState}from 'react'
import { useDispatch , useSelector} from 'react-redux'
import Input from '../../components/Input'
import {addCity} from '../../redux/actions/action'

const BASE_URL = 'http://99acres.com/api-aggregator/static-attributes?includedFields='

const HomeScreen = () =>{

      const dispatch = useDispatch()
      const selector = useSelector(state=>state)
      const [filterCity,setFilterCity] = useState([])

      useEffect(()=>{
        fetchCity()
      },[]);


      const fetchCity = async() =>{
        const response = await fetch(BASE_URL);
        const citiesList = await response.json();
        const list = citiesList.cities.map((cityItem)=>cityItem.label);
        dispatch(addCity(list))
      }


      const onInput = async (value) =>{
        if(value.toString().length==0){
          setFilterCity([])
          return 
        }
        const cityList = selector.cityReducer
        const filteredList = cityList[0].filter((item)=>{
          return item.toString().toLowerCase().startsWith(value.toString().toLowerCase())
        })
        setFilterCity(filteredList)
      }

    return(
        <>
         <Input 
           onInput={onInput}
           cityList = {filterCity}
         />
        </>
    )
}

export default HomeScreen;