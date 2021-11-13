import React, { useEffect, useState } from 'react';
import {  useSelector} from 'react-redux';
import {addPropertiesList} from '../../redux/actions/action';
import PropertyData from './PropertyData';

const CityDetails = () => {
    const propertiesData = useSelector(state => state.Reducer.propertiesList);

    if(!propertiesData.properties) return null;

    return (
        <>
        {propertiesData.properties.map(data => <PropertyData data={data}/>)}
        </>
    )
}

export default CityDetails;
