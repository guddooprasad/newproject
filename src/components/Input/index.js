import React from 'react'

const inputStyle = {
  marginTop : '200px',
  width : '40%',
  height : '50px',
  fontSize : '20px',
  paddingLeft : '8px',
  borderWidth : '2px',
  borderRadius : '8px',
  borderColor : 'black'
}

const searchItemStyle = {
  width : '40%',
  margin : 'auto',
  fontSize : '25px',
  borderWidth : '1px'
}


const InputBar = (props) =>{

  const cityName = ['abc','def','ghi']

    const onInput = (event) =>{
      props.onInput(event.target.value)
    }

    const onItemClicked = (item)=>{

    }


    return(
        <>
          <input 
            className = "input" 
            onChange = {onInput} 
            style={inputStyle}
          >
          </input>
          { props.showList &&
            <ul style={{WebkitOverflowScrolling : 'touch',borderWidth : '2px',borderRadius : '8px',bordercolor :'red'}}>
              {
                props.cityList.map((item)=>{
                  return <p key={item} style={searchItemStyle} onClick = {()=>{console.log(item, "is clicked")}}>{item}</p>
                })
              }
            </ul>
          }
        </>
    )
}


export default InputBar;