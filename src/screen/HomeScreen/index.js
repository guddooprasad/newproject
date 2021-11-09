import react from 'react'
import Input from '../../components/Input'

const HomeScreen = () =>{

 const onInput = (value) =>{
     // const url = `https://s.99acres.com/api/autocomplete/suggest?term=${value}&PREFERENCE=R&RESCOM=R&FORMAT=APP`
    
     const url = 'https://jsonplaceholder.typicode.com/todos/1'
      fetch(url)
     .then(response => {
        // handle the response
        console.log(response)
      })
     .catch(error => {
        // handle the error
        console.log(error)
    });

   }

    return(
        <>
         <Input 
           onInput={onInput}
         />
        </>
    )
}

export default HomeScreen;