import react, {useState} from 'react';
import styled from 'styled-components';
import labenu from '../img/labenu.jfif';

const Section = styled.div`
display:inline;
position:absolute;
width:95%;
left:20%;
top:87%;
`



function Card() {
    const[nome,setNome] = useState("");
    const[numero,setNumero] = useState("");
    

function mudaNome(event) {
    setNome(event.target.value);

}
function mudaNumero(event) {
    setNumero(event.target.value);

}



    return(
        <div Container>
            <Section >
                
             
                      <label for="Nome">Remetente:</label>
                    <input name="Nome" size= "30" onChange={mudaNome} value={nome}/>
                    
                    <label for="Número">Msg:</label>
                    <input name="Número" size= "49" onChange={mudaNumero} value={numero}/>
                    <button>Enviar Mensagem</button>
                    
                    
                    
                    </Section>
        </div>


    )
    
}
export default Card;