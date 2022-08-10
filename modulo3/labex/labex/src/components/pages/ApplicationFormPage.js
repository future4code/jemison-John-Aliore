import React from "react";
import {useNavigate} from 'react-router-dom';



function AppFormPage (){
    const navigate = useNavigate();

const goToHome = () =>{
  navigate("/")
}
   
    return(
    
        <p>
            <h1>ApplicationForm</h1>
     <button onClick={ goToHome }>Home</button>
     
        </p>
        
    )
}

export default AppFormPage;