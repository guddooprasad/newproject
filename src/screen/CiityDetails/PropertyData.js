import React from 'react';

const PropertyData = ({ data }) => {
	//console.log('image', data.PROPERTY_IMAGES[0])
	console.log(data.PROPERTY_IMAGES);
	return (
		<div style={{width:'40%',border: '1px solid black',margin : 'auto',borderRadius : '8px',paddingTop : '20px',marginBottom : '20px'} }>
			<h3 style={{fontFamily : 'monospace'}}>{data.PROP_HEADING}</h3>
			<img style = {{width:'70%'}}src={data.PROPERTY_IMAGES !=null ? data.PROPERTY_IMAGES[0] : null} />
			<span style={{ display: 'flex' ,justifyContent:'space-between'}}>
				<h3 style={{marginLeft : '16px',fontSize : '16px'}}>{data.PRICE}</h3>
				<h3 style={{fontSize : '12px'}}>{data.AREA}</h3>
				<h3 style={{fontSize : '16px',marginRight : '16px'}}>{data.BEDROOM_NUM ? data.BEDROOM_NUM : 1}BHK</h3>
			</span>
			{/* <image src = {data.PROPERTY_IMAGES[0]} alt={data.ALT_TAG}/> */}
		</div>
	);
};

export default PropertyData;
