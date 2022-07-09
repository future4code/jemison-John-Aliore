import React,{useState} from 'react';
import {SectionAreaDeMsg} from'./StyleComMsg'
import {SectionAreaDeEnviarMsg} from'./StyleComMsg'

import styled from 'styled-components';




function EnviarMsg(event) {

    const[nomeDeUsuario,setNomeDeUsuario] = useState('');
    const[escreverMsg,setEscreverMsg] = useState('');
    
    function EnviarNome(event) {
        setNomeDeUsuario(event.target.value)
    }
    function EnviarMsg(event) {
        setEscreverMsg(event.target.value)
    }


    
    return(
        <div>
             <SectionAreaDeMsg>

                <h1>{nomeDeUsuario}</h1>
                <p>{escreverMsg}</p>

             </SectionAreaDeMsg>
             <SectionAreaDeEnviarMsg>
             <label for="NomeUsuario">Usuario:</label>
                    <input name="NomeUsuario" size= "5" onChange={EnviarNome} value={nomeDeUsuario}/>
             <label for="EscrevrMsg">Mensagem:</label>
                    <input name="Msg" size= "60" onChange={EnviarMsg} value={escreverMsg}/>
                    <button type="submit">Enviar</button>
             </SectionAreaDeEnviarMsg>


        </div>
    )
}

export default EnviarMsg;