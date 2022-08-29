import React from "react";
import {useNavigate} from 'react-router-dom';
import {useRequestData} from '../hook/useRequestData'
import {BASE_URL} from '../Constants/Constants'
import axios from "axios";
import styled from "styled-components";


const Container = styled.p`
text-align:center;
`

const Title = styled.h1`

position:absolute;
text-align:center;
align-items:center;
left:30%;
`;

const ButtonDel = styled.button`
position:absolute;
margin:10px;
left:10px;
`
const ButtonLogin = styled.button`
position:absolute;
margin:10px;
right:10px;
`


function AdmHomePage (){
  
    const navigate = useNavigate();
    const goToCreTriPag = () =>{
      navigate("/admin/trips/creat")
    }
    const goToTripDetPag = () =>{
      navigate("/admin/trips/:id")
    }
    const [viagem, isLoading, error] = useRequestData(`${BASE_URL}/trips`)


    

    const goToBack=()=>{
      navigate(-1)
    }
      


const deletTrip = (id) =>{

  const headers = {
      headers:{
          auth:localStorage.getItem('token'),
      }
  }

  axios.delete(`${BASE_URL}/trips/${id}`, headers)
      .then((response)=>{
              alert('Viagem deletada')
      })
      .catch((error) =>{
          console.log(error)
      })
}




const listaDeViagens=  viagem && viagem.trips.map((item)=>{
    return(
        <p>
        <h1>AdminHome</h1>
     <button onClick={ goToCreTriPag }>CreateTrip</button>
     <button onClick={goToTripDetPag}>TripDetails</button>
     <Container>

<Title> {item.name} </Title>

  <p className="Descricao">{item.description}</p>

  <p className="Diarias">{item.durationInDays}</p>

 <p className="Data"> {item.date} </p>



<ButtonDel onClick={() =>deletTrip(item.id)} >Deletar Viagem </ButtonDel> 

</Container>
            
        </p>
    )
})

return(
  <p>
  <h1>Tela inicial do administrador </h1>
 
  

   {isLoading && <p>Carregando Viagens</p>}
   {!isLoading && error && <p>Ocorreu um erro com as Viagens</p>}
   {!isLoading && viagem && viagem.trips.length > 0 && listaDeViagens }
   {!isLoading && viagem && viagem.trips.length === 0 &&( <p>Não há Viagens</p>)}
  
  

   <button onClick={ goToCreTriPag }>Criar uma viagem para os usuarios</button>
<button onClick={goToTripDetPag}>aprovar viagens de usuarios e ver detalhes das viagens </button>
<button onClick={goToBack}>Logout</button>

      
  </p>
)
}
export default AdmHomePage;