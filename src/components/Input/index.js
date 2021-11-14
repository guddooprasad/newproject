import React ,{useState,useRef}from 'react'


const inputStyle = {
  marginTop : '200px',
  width : '50%',
  marginLeft : '0px',
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

  const [showList,setShowList] = useState(true)
  const [value,setValue] = useState('')
  const inputRef = useRef(null)

    const onInput = (event) =>{
      props.onInput(event.target.value)
      setShowList(true)
    }

    const onItemSelected = (item) =>{
      props.onItemSelected(item)
      inputRef.current.value = (item)
      setShowList(false)
    }

    return(
        <>
        <div style={{width : 'auto',height : 'auto'}}>
        <input 
            ref= {inputRef}
            className = "input" 
            onChange = {onInput} 
            style={inputStyle}
            />
            {
                <ul style={{WebkitOverflowScrolling : 'touch',borderWidth : '2px',borderRadius : '8px',bordercolor :'red'}}>
                  {
                    showList && props.filterCity.map((item)=>{
                      return <p key={item} style={searchItemStyle} onClick = {()=>{onItemSelected(item)}}>{item}</p>
                    })
                  }
                </ul>
            }
        </div>
         
        </>
    )
}


export default InputBar;