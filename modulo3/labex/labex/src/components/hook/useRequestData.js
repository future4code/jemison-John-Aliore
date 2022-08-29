import { useEffect,useState } from "react";
import axios from "axios";




export function useRequestData (url,headers) {

const[viagens,setViagens] = useState(undefined)

const [isLoading, setIsLoading] = useState (false)


const [erro,setErro] = useState ("")


useEffect(() => {
    setIsLoading(true) 
    axios.get (url) 
    .then((response)=>{
    
        setIsLoading(false) 
    
        setViagens(response.data) 
  })
  .catch((error)=>{
     setIsLoading(false) 
   
     console.log(error)
   
      setErro(error) 
  })},[url])
  
  return [viagens,isLoading,erro]

}