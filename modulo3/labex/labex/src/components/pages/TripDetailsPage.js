import React from "react";
import {useNavigate} from 'react-router-dom';



function TripDPage (){
    const navigate = useNavigate();
    const backToHome = () =>{
      navigate("/")
    }
    
  return(
      
      <p>
         <button onClick={ backToHome }>home</button> 
      </p>
      
  )
}

export default TripDPage;