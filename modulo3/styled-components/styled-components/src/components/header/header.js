import react, {useState} from 'react';
import styled from 'styled-components';
import labenu from '../img/labenu.jfif';

const Header1 = styled.div `
width:100%;
background-color:black;
display:flex;
align-items:center;
`

const Logo = styled.img`
height:100px;
width:100px;
position:relative;
left:100vh;
`

function HeaderC(props){
    return(
        <header Container>
        <Header1>
        <Logo src={props.FotoLogo} alt={'imagen labenu'}/>
        </Header1>
        </header>
    )
         
        
        
    

}


export default HeaderC;