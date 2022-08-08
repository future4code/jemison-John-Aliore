import React,{useState,useEffect} from "react";
import axios from "axios";
import './Card.css'
import { BsFillHeartFill} from "react-icons/bs";
import { GiBrokenHeart } from "react-icons/gi";

function Card() {

    const [cardPessoa,setcardPessoa] = useState({})


    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:johnwillian-aliore-jemison/person'


    const cardPerfil = () =>{
        axios.get(url)
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
const url2 = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/johnwillian-aliore-jemison/choose-person'
     
const selectCard = (choice) =>{
         const body = {
          id:cardPessoa.id,
          choice:choice,           

         }
        axios
        .post(url2, body)
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
            
             
            
            </div>
            <spam> {cardPessoa.name},</spam><spam>{cardPessoa.age}</spam>
                <div> {cardPessoa.bio} </div>
            <div className="botao">
                <button onClick={curtirpessoa}> <BsFillHeartFill/> </button>
                <button onClick={rejeitarpessoa}> <GiBrokenHeart/> </button>
            </div>
            </div>
    

    )
}




export default Card;