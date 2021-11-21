import React, { useEffect, useState } from 'react';
import {  useSelector} from 'react-redux';
import {addPropertiesList} from '../../redux/actions/action';
import PropertyData from './PropertyData';

const CityDetails = () => {
    const propertiesData = useSelector(state => state.Reducer.propertiesList);
    const [filteredPropertyData, setFilteredPropertyData] = useState([]);

    // Filter Logic

    if(!propertiesData.properties) return null;

    const data = filteredPropertyData.length === 0 ? propertiesData : filteredPropertyData;

    return (
        <>
        {data.properties.map(data => <PropertyData data={data}/>)}
        </>
    )
}

export default CityDetails;
