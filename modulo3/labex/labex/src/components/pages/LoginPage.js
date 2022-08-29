import React from "react";
import axios from "axios"
import { BASE_URL } from "../Constants/Constants"
import { useForm } from "../hook/Form"
import { useNavigate } from "react-router-dom"
import styled from "styled-components";


function LoginPage (){
    const navigate = useNavigate();
    const goToAdmPag = () =>{
      navigate("/admin/trips/list")
    }
    const backPage = () =>{
      navigate(-1)
    }
    const [form, onChange] = useForm({ email: "", password: "" })

    const fazerLogin = (event) => {
        event.preventDefault() 
        axios.post(`${BASE_URL}/login`,form)
            .then((response) => {

                console.log(response.data);

                localStorage.setItem("token", response.data.token)
               goToAdmPag(navigate);
            })
            .catch((error) => console.log(error.message))
    }

    const Container = styled.p`
    text-align:center;
    `
    
    const Form = styled.h1`
    
    position:absolute;
    text-align:center;
    align-items:center;
    left:30%;
    `;
    
    const ButtonLogin = styled.button`
    position:absolute;
    margin:10px;
    left:10px;
    `
    const ButtonBack = styled.button`
    position:absolute;
    margin:10px;
    right:10px;
    `
  return(
      
      <p>
         <ButtonBack onClick={ backPage }>Voltar</ButtonBack> 
         <Container>
            <h1> Faça seu Login</h1>
            <Form 
            onSubmit={fazerLogin}>
                <label htmlFor="email"> Email: </label>
                <input
                    name="email" 
                    id="email" 
                    value={form.email}
                    onChange={onChange}
                    type="email" 
                    required 
                />
                <label htmlFor="senha"> Senha: </label>
                <input
                    name="password" 
                    id="senha" 
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange}
                    type="password" 
                    pattern="^.{3,}$" 
                    title="mínimo de 3 caracteres"
                    required 
                />

                <ButtonLogin  type="submit" >Logar </ButtonLogin>
            </Form>
        </Container>
      </p>
      
  )
}

export default LoginPage;