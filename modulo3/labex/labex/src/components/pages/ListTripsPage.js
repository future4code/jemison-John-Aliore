import React from "react";
import {useNavigate} from 'react-router-dom';
import { BASE_URL} from '../Constants/Constants'
import {useRequestData} from '../hook/useRequestData'



function ListTripPage (){

const [viagens,isLoadingLista,erro] = useRequestData(`${BASE_URL}trips`)

const listaDviagens = viagens && viagens.trips.map((item) =>{
  return( 
  <div>
  <p>{item.name}</p>
   <p>{item.descripton}</p>
   <p>{item.durationsInDays}</p>
   <p>{item.date}</p>
   </div>)
})

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
        


{isLoadingLista&& <p> Carregando Usuario</p>}

{!isLoadingLista&& viagens&&viagens.trips.length>0 && listaDviagens}
{!isLoadingLista&& viagens&&viagens.trips.length === 0 && <p> Não ha Usuarios</p>}


</p>
        
    )
}

export default ListTripPage;