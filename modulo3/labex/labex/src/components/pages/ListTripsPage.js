import React from "react";
import {useNavigate} from 'react-router-dom';
import { BASE_URL} from '../Constants/Constants'
import {useRequestData} from '../hook/useRequestData'



function ListTripPage (){

const [viagens,isLoadingLista,] = useRequestData(`${BASE_URL}trips`)

const listaDviagens = viagens && viagens.trips.map((item) =>{
  return( 
  <div>
 
  <p>{item.name}</p>
  <p>{item.planet}</p>
   <p>{item.date}</p>
   <p>{item.description}</p>
   <p>{item.durationInDays}</p>
   </div>)
})
console.log()

    const navigate = useNavigate();
const goToAppForm = () =>{
  navigate("/trips/application")
}
const backPage = () =>{
  navigate(-1)
}
    return(
        
        <div>
                  <h1>Lista de Viagens</h1>
                  
     <button onClick={ goToAppForm }>Candidata-se a uma viagem</button>
     <button onClick={backPage}>Voltar</button>
        


{isLoadingLista&& <p> Carregando Usuario</p>}

{!isLoadingLista&& viagens&&viagens.trips.length>0 && listaDviagens}
{!isLoadingLista&& viagens&&viagens.trips.length === 0 && <p> Não ha Usuarios</p>}


</div>
        
    )
}

export default ListTripPage;