import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../components/Input'
import { addCity, addPropertiesList } from '../../redux/actions/action'
import CityDetails from '../CiityDetails'

const BASE_URL = 'http://99acres.com/api-aggregator/static-attributes?includedFields='

const HomeScreen = () => {

  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  const [filterCity, setFilterCity] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [selectedCity,setSelectedCity] = useState('')

  useEffect(() => {
    fetchCity()
  }, []);


  const fetchCity = async () => {
    const response = await fetch(BASE_URL);
    const citiesList = await response.json();
    const list = citiesList.cities.map((cityItem) => cityItem.label);
    dispatch(addCity(list))
  }


  const onInput = async (value) => {
    if (value.toString().length === 0) {
      setFilterCity([])
      return
    }
    setInputVal(value.toString());
    const cityList = selector.Reducer.cityList;
    const filteredList = cityList.filter((item) => {
      return item.toString().toLowerCase().startsWith(value.toString().toLowerCase())
    })
    setFilterCity(filteredList)
    setSelectedCity(null)
    dispatch(addPropertiesList({ properties: null, cityName: null}))

  }

  const onSearchClick = async () => {
      const CITY_KEY_API = `https://www.99acres.com/api/entity-ctx-resolver/resolve?keyword=${selectedCity}&dym=true&is_ajax=1`;
      const response = await fetch(CITY_KEY_API)
      const cityKeyResponse = await response.json();
      if (cityKeyResponse.length !== 0 && cityKeyResponse[0].city.length !== 0) {
        const key = cityKeyResponse[0].city[0];
        const CITY_API_URL = `https://www.99acres.com/api-aggregator/discovery/srp/search?&platform=DESKTOP&SRP&page_size=15&page=1&city=${key}&seoUrlType=DEFAULT`;
        const cityData = await (await fetch(CITY_API_URL)).json();
        dispatch(addPropertiesList({ properties: cityData.properties, cityName: cityData.citySeoString }))
      }
  }

  const onItemSelected = (cityName) =>{
    setSelectedCity(cityName);
  }

  return (
    <div style ={{height : '100%',width :'100%'}}>

    <div style={{width : '20%',height : '100%',backgroundColor :'red',float : 'left'}}>
      
    </div>

      <span style={{width : '80%',height : '100%',float : 'right'}}>
        <Input
          onInput={onInput}
          cityList={filterCity}
          value={inputVal}
          filterCity={filterCity}
          onItemSelected = {onItemSelected}
          />
        <button type="submit" onClick={onSearchClick} style={{width : 'auto',height : '50px',borderRadius : '8px',marginTop : '20px',marginBottom : '20px',position : 'absolute',right : 150,top :180}} >Search</button>
        {selectedCity && <CityDetails inputVal={inputVal}/>}  
      </span>



    </div>
  )
}

export default HomeScreen;