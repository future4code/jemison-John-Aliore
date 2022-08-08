import React,{useState, useEffect} from 'react';
import axios from 'axios';





function PagDeMatch(props){
    const [list, setList] = useState([])

    const url3 = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/johnwillian-aliore-jemison/matches'
    const GetList = () =>{
        axios
        .get(url3)
        .then((response) =>{
             console.log(response.data.matches) 
            setList(response.data.matches)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    useEffect(() =>{
        GetList([])
    }, [])
    
    const url4 = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/johnwillian-aliore-jemison/clear'

    const DeletPerfil = () =>{
        axios
        .put(url4)
        .then((response) => { 
            GetList([])
            alert ('Matches deletados com Sucesso')
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    return(
        <div className='containerlist'>
            <div className='headerlist'>
                <div>
                    <h1>AstroMatch</h1>
                </div>
                <div className='botaolist'>
                    <button onClick={() => props.trocaPagina('inicial')}>Voltar para Tela Inicial</button>
                </div>
            </div>
            {list.map((item) => {
                return (
                    <div className='matches'>
                        <img  src={item.photo}  key={list.id} />
                         {item.name}
                    </div>
                )
            })}
            <div className='botaolist2'>
                <button onClick={DeletPerfil}>Deletar Matchs</button>
            </div>
        </div>

    )
}

export default PagDeMatch;
