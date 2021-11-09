import react from 'react'

const InputBar = (props) =>{

    const onInput = (event) =>{
      props.onInput(event.target.value)
    }


    return(
        <>
          <input 
            className = "input" 
            onChange = {onInput} 
          >

          </input>
        </>
    )
}


export default InputBar;