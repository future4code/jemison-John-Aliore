import React,{useState,useEffect} from "react";
import axios from "axios";







function Card() {

    const [cardPessoa,setcardPessoa] = useState({})

    const cardPerfil = () =>{
        axios
        .get(`${'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person'}/person`)
        .then((response) =>{
            console.log(response.data)
            setcardPessoa(response.data.profile)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(() =>{
        cardPerfil()
    }, [])

     const selectCard = (choice) =>{
         const body = {
          id:cardPessoa.id,
          choice:choice,           

         }
        axios
        .post(`${'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person'}/choose-person`, body)
        .then((response) =>{
            selectCard()
        })
        .catch((err) =>{
            console.log(err)
        })

     }

  
      const curtirpessoa = () =>{

        selectCard(true)
      }

      const rejeitarpessoa = () =>{
        selectCard(false)
      }


    return(
    <div>
        <div className="Container">
           
            <img src={cardPessoa.photo} alt='foto de perfil'/>
            
            <div className="container2">
                <section> {cardPessoa.name},{cardPessoa.age}</section>
                <div> {cardPessoa.bio} </div>
            </div>
            </div>
            <div className="botao">
                <button onClick={curtirpessoa}><img src ={''} /></button>
                <button onClick={rejeitarpessoa}><img src ={''} /></button>
            </div>

    </div>

    )
}




export default Card