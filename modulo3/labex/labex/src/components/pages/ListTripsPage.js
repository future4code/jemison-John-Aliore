import React from "react";
import {useNavigate} from 'react-router-dom';




function ListTripPage (){

    const navigate = useNavigate();
const goToAppForm = () =>{
  navigate("/trips/application")
}
const goToHome = () =>{
  navigate("/")
}
    return(
        
        <p>
                  <h1>ListTripPage</h1>
     <button onClick={ goToAppForm }>ApplicationForm</button>
     <button onClick={goToHome}>Home</button>
        </p>
        
    )
}

export default ListTripPage;