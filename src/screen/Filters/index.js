import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterValue } from '../../redux/actions/action';

const Checkbox = ({ value, name }) => {
    const dispatch = useDispatch();
    
    const [checkedState, setCheckedState] = useState(
        new Array(value.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        dispatch(addFilterValue({key: name, value: updatedCheckedState}))
        setCheckedState(updatedCheckedState);
    };

const CheckBoxComp = ({ data, index }) => (
    <div key={data.id}>
        <input type="checkbox" id={data.id} name={data.id} value={data.label} checked={checkedState[index]}  onChange={() => handleOnChange(index)}/>
        <label htmlFor={data.id}> {data.label}</label><br />
    </div>
)

return <>
    {value &&
        value.map((elm,index) => <CheckBoxComp data={elm} index={index}/>)
    }
</>
}

const RadioButton = ({ value, name }) => {
    const dispatch = useDispatch();

    const [radioButtonVal, setRadioButtonVal] = useState('');

    const onChangeRadioButton = (event) => {
        setRadioButtonVal(event.target.value);
        dispatch(addFilterValue({key: name, value: event.target.value}))
    };

    const RadioButtonComp = ({ id, label, value, name, index }) => {
        return <div key={index}>
            <input type="radio" id={id} name={name} value={value} onChange={onChangeRadioButton} checked={radioButtonVal === value} />
            <label htmlFor={label}>{label}</label><br /><br /></div>
    }

    return <>
        {value &&
            value.map((elm,index) => <RadioButtonComp id={elm.id} label={elm.label} value={elm.id} name={name} index={index}/>)
        }
    </>

}

const Filters = () => {
    const { bedroomNum, propertyType, furnish } = useSelector(state => state.Reducer.facsetInfo);
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: '10px', width: '100px' }}>
                <b>Furnish</b><br /><br />
                <div key="furnish">
                    <RadioButton value={furnish} name="furnish" />
                </div>
            </div>
            <div style={{ marginRight: '10px' }}>
                <b>Property Type</b><br /><br />
                <div key="propertyType">
                    <RadioButton value={propertyType} name="propertyType" />
                </div>
            </div>
            <div style={{ marginRight: '10px', width: '200px' }}>
                <b>Bedroom Num</b>
                <div>
                    <div>
                        {bedroomNum && <Checkbox value={bedroomNum} name="bedroomNum"/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters;
