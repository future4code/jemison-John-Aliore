import React,{useState} from "react";
import {Route, useNavigate} from 'react-router-dom';
import {BASE_URL} from '../Constants/Constants';
import {useForm} from '../hook/Form';
import styled from "styled-components";
import {useRequestData} from '../hook/useRequestData'
import axios from "axios";

const Container = styled.p`
text-align:center;
`

const Form = styled.h1`

position:absolute;
text-align:center;
align-items:center;
left:30%;
`;

const ButtonSing = styled.button`
position:absolute;
margin:10px;
left:10px;
`
const ButtonBack = styled.button`
position:absolute;
margin:10px;
right:10px; 
`

 export  default function AppFormPage () {

    
    const navigate = useNavigate ()

    const BackPage = () =>{
      navigate(-2)
  }
  
      const [idTrip, setIdTrip] = useState('')
      const {form, onChange, clear} = useForm({ name: "", age: "",applicationText: "",profession: "",country: ""})
  
      
      const ApplytoTrip = () => {
  
        const body = {
          ... form
        }
  
        axios.post(`${BASE_URL}/trips/${idTrip}/apply`,body)
          .then((response) => {
            console.log(response)
          })
          .catch((err) => {
            console.log(err)
          })
      }
  
      const upDate = (e) =>{
        setIdTrip(e.target.value)
      }
     
      
  
      const [data] = useRequestData(`${BASE_URL}/trips`)
  
      const listaDeViagens = data && data.trips.map((item) => {
        return <option key={item.id} value={item.id}> {item.name}</option>;
    })
  
  
   
      
      const getContry = getContry.map((list) =>{
          return (
              <option  key={list} > {list} </option>
          )
      })
  
  
      console.log(idTrip)
      return(
          <>
              <h1>Formulário de Viagem</h1>
              <form>
  
                  <select 
                      placeholder='Escolha sua viagem'
                      name="id"
                      onChange={upDate}
                      value={idTrip}
                      >
                      <option value="" hidden >Escolha sua viagem</option>
                      {listaDeViagens}
                  </select>
  
                  <input
                      type={"text"}
                      placeholder="Nome"
                      name="name"
                      onChange={onChange}
                      required
                      pattern={"^.{3,}$"}
                      title="name: mínimo 3 letras e menos de 15"
                      value={form.name }
                  />
  
                  <input
                      type={"number"}
                      placeholder="Idade"
                      name="age"
                      onChange={onChange}
                      required
                      min="18"
                      title="Apenas maiores de 18 anos"
                      value={form.age}
                  />
  
                  <select
                      name="country"
                      onChange={onChange}
                      value={form.country}
                  > 
                  <option> Escolha seu país</option>
                      {getContry}
                  </select>
  
                  <input
                      type={"text"}
                      placeholder="Profissão"
                      name="profession"
                      onChange={onChange}
                      required
                      pattern="[a-zA-Z ]{10,30}"
                      title="mínimo de 10 caracteres"
                      value={form.profession}
                  />
                     <input
                      type={"text"}
                      placeholder="Candidatura"
                      name="applicationText"
                      onChange={onChange}
                      required
                      pattern="[a-zA-Z ]{30,100}"
                      title="mínimo de 30 caracteres"
                      value={form.applicationText}
                  />
                  
              <button onClick={ApplytoTrip}>Enviar</button>
              </form>
              <button onClick={BackPage}>Voltar</button>
  
              
          </>
    )
  }