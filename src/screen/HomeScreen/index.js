import React from 'react'
import Input from '../../components/Input'

const HomeScreen = () =>{

 const onInput = async (value) =>{
      const url = 'http://99acres.com/api-aggregator/static-attributes?includedFields='
      //const url = `https://s.99acres.com/api/autocomplete/suggest?term=${value}&PREFERENCE=R&RESCOM=R&FORMAT=APP`
    
     //const url = 'https://jsonplaceholder.typicode.com/todos/1'
      // await fetch(url)
        
        
        
        
    //  .then(response => {
    //    //console.log('guddoo')
    //     // handle the response
    //     const data = response.json();
    //     console.log(data)
    //   })
    //  .catch(error => {
    //     // handle the error
    //     console.log(error)
    // });
   
    
    const response = await fetch("http://www.99acres.com/api-aggregator/static-attributes?includedFields=");
    const data = await response.json();
    
   
    console.log(data.cities);
    
    

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