import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Checkbox = ({data}) => {
    return (
        <>
            <input type="checkbox" id={data.id} name={data.id} value={data.label} />
            <label for={data.label}> {data.label}</label><br />
        </>
    )
}

const RadioButton = ({id, label, value, name}) => {
    return <>
        <input type="radio" id={id} name={name} value={value} />
        <label for={label}>{label}</label><br /><br /></>
}

const Filters = () => {
    const { bedroomNum, propertyType, furnish } = useSelector(state => state.Reducer.facsetInfo);
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: '10px', width: '100px' }}>
                <b>Furnish</b><br /><br />
                <div>
                    {furnish &&
                        furnish.map(elm => <RadioButton id = {elm.id} value={elm.id} label={elm.label} name={"furnish"}/>)
                    }
                </div>
            </div>
            <div style={{ marginRight: '10px' }}>
                <b>Property Type</b><br /><br />
                <div>
                    {propertyType &&
                        propertyType.map(elm => <RadioButton id = {elm.id} value={elm.id} label={elm.label} name={"propertyType"}/>)
                    }
                </div>
            </div>
            <div style={{ marginRight: '10px', width: '100px' }}>
                <b>Bedroom Num</b>
                <div>
                <div>
                    {bedroomNum &&
                        bedroomNum.map(elm => <Checkbox data={elm}/>)
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default Filters;
