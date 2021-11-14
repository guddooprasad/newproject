import React from 'react';

const PropertyData = ({ data }) => {
	//console.log('image', data.PROPERTY_IMAGES[0])
	console.log(data.PROPERTY_IMAGES);
	return (
		<div style={{width:'50%'},{ border: '1px solid black', width:'50%',marginLeft:'40%',marginTop:'30px'} }>
			<h3>{data.PROP_HEADING}</h3>
			<img style = {{width:'70%'}}src={data.PROPERTY_IMAGES[0]} />
			<span style={{ display: 'flex' ,justifyContent:'space-between'}}>
				<h3>{data.PRICE}</h3>
				<h3>{data.AREA}</h3>
				<h3>{data.BEDROOM_NUM}BHK</h3>
			</span>

			{/* <image src = {data.PROPERTY_IMAGES[0]} alt={data.ALT_TAG}/> */}
		</div>
	);
};

export default PropertyData;
