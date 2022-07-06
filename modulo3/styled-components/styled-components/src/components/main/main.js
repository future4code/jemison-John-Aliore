import react, {useState} from 'react';
import styled from 'styled-components';
import labenu from '../img/labenu.jfif';

const MainP1 = styled.div `
width:15%;
background-color:yellow;
display:grid;
position:absolute;
height:85%;
left:85%;
`
const MainL = styled.div `
background-color:yellow;
position:absolute;
width:20%;
display:grid;


`



function MainP(props){
    return(
        <div container>
        <MainP1/>
        
        </div>
    )
         
        
        
    

}


export default MainP;