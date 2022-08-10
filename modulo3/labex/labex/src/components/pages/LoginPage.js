import React from "react";
import {useNavigate} from 'react-router-dom';



function LoginPage (){
    const navigate = useNavigate();
    const goToAdmPag = () =>{
      navigate("/admin/trips/list")
    }
    
  return(
      
      <p>
         <button onClick={ goToAdmPag }>AdminHome</button> 
      </p>
      
  )
}

export default LoginPage;