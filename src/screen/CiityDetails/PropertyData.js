import React from 'react';

const PropertyData = ({data}) => {
    console.log('image', data.PROPERTY_IMAGES[0])
    return <div style = {{border: '1px solid black'}}>
        {data.PROP_HEADING}
        <image src = {data.PROPERTY_IMAGES[0]} alt={data.ALT_TAG}/>
    </div>
}

export default PropertyData;
