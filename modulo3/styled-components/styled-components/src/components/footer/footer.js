import react, {useState} from 'react';
import styled from 'styled-components';
import labenu from '../img/labenu.jfif';

const Footer1 = styled.div `
width:100%;
background-color:gray;
display:flex;
align-items:center;
text-align:center;
top:92%;
position:absolute;
`

const endereco = styled.p`
position:relative;
display:grid;
justify-items:center;

`

function Footer(props){
    return(
        <footer Container>
        <Footer1>
        <p src={endereco.props}>ØJohnJohn.Inc Todos os Direitos Reservados</p>
        </Footer1>
        </footer>
    )
         
        
        
    

}


export default Footer;