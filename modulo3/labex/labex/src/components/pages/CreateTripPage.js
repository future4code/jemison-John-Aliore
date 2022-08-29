import React, {useEffect}from "react";
import {useNavigate} from 'react-router-dom';
import {useRequestData} from '../hook/useRequestData';
import {BASE_URL} from '../Constants/Constants';
import axios from "axios";
import styled from "styled-components";

const Container = styled.p`
text-align:center;
`

const Form = styled.h1`

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


function CreateTripPage (){
    
    const navigate = useNavigate();
      const backPage = () =>{
        navigate(-1)
      }
      const {form, onChange, clear} = useForm({ name: "", planet: "", date: "" , description:"" , description: "" })
    
    const cadastrarViagem = (event) => {
      event.preventDefault()
      const body={ name:form.name , 
                   planet: form.planet, 
                   date: form.date, 
                   description: form.description, 
                   durationInDays: form.durationInDays,}
      console.log(body);
      axios.post(`${URLBase}/trips`,body,{headers:{auth:localStorage.getItem('token')}})
        .then((response) => {
          alert("Viagem cadastrada com sucesso")
          clear();
        })
        .catch((error) => console.log(error))
      }
      
    return(
        
        <p>
           <button onClick={ backPage }>home</button> 
       <Container>
        
        <Form onSubmit={cadastrarViagem}>
        <h1>CADASTRAR UMA NOVA VIAGEM </h1>
         
          <label htmlFor='name'>Nome</label>
          <input type="text" 
                  name='name' 
                  value={form.name} 
                  id="name" 
                  onChange={onChange} 
                  required />


          <label htmlFor='planet'>Destino</label>
          <input type="text" 
                 name='planet' 
                 value={form.planet}
                 id="planet" 
                 onChange={onChange} 
                 required />




          <label htmlFor='date'>Data</label>
          <input type="text" 
                 name='date' 
                 value={form.date} 
                 id="date" 
                 onChange={onChange} 
                 pattern="^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$" 
                 required />


                 <input
                    name="description"
                    placeholder="Detalhes da Viagem "
                    value={form.description}
                    onChange={onChange}
                    required
                />

                <input
                    name="durationInDays"
                    placeholder="Duração da Viagem "
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                />

          <Button>CadastrarViagem</Button>
          <Button type='button ' onClick={()=>{backPage(navigate)}}>VOLTAR</Button>
        </Form>
      </Container>
        </p>
        
    )
}

export default CreateTripPage;