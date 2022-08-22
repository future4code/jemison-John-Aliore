import React from "react";
import {useNavigate} from 'react-router-dom';
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

const ButtonTrip = styled.button`
position:absolute;
margin:10px;
left:10px;
`
const ButtonLogin = styled.button`
position:absolute;
margin:10px;
right:10px;
`


















function HomePage (){

    const navigate = useNavigate();
  
    const goToAdmPag = () =>{
    navigate("/login")
  }
  
  const goToListTrip = () =>{
    navigate("/trips/list")
  }
 

    return(
        <Container>
        <Title>Viagens para o Espaço</Title>
     <ButtonTrip onClick={ goToAdmPag }>Login</ButtonTrip>
     <ButtonLogin onClick={goToListTrip}>ListTrips</ButtonLogin>
      
            
        </Container>
    
    )
}

export default HomePage;