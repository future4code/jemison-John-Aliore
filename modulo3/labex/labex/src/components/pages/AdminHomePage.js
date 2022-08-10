import React from "react";
import {useNavigate} from 'react-router-dom';



function AdmHomePage (){
    const navigate = useNavigate();
    const goToCreTriPag = () =>{
      navigate("/admin/trips/creat")
    }
    const goToTripDetPag = () =>{
      navigate("/admin/trips/:id")
    }
    return(
        <p>
        <h1>AdminHome</h1>
     <button onClick={ goToCreTriPag }>CreateTrip</button>
     <button onClick={goToTripDetPag}>TripDetails</button>
      
            
        </p>
    )
}

export default AdmHomePage;