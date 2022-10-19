import React from 'react';
import {FaTelegram} from 'react-icons/fa';
import '../botaocss/botao.css';
import {
    Container,
    Entrada,
    EntradaMenssagem,
    EntradaUsuario,
    Button,
    Saida,
    SaidaUsuario,
    SaidaMenssagens,
} from '../ComponenteMSG/StyleComMsg.js'

export class Corpo extends React.Component {
    state = {
        messages:[],
        user:'',
        text:'',
    };
onChangeUser = (event) => {
    this.setState({ user: event.target.value});
};
onChangeMessage = (event) => {
    this.setState({text: event.target.value});
};
enviarComEnter = (e) => (e.code ==='Enter' ? this.onSend() : null);

onSend =() => {
    if (!this.state.user || !this.state.text) return;

    const msgs = [
        ...this.state.messages,
        {
            user:this.state.user,
            text:this.state.text,
        }
    ];
    this.setState({messages:msgs})
    this.setState({user:''});
    this.setState({text:''});
};

onDelete =(id) =>{
    const todasMenssagens = [...this.state.messages];

    const novaMenssagem = todasMenssagens.filter((msgs,index) => index !==id);

    this.setState({messages:novaMenssagem});
};
render() {
    const messagesToRender = this.state.messages.map((messages,index) => {
        const user = messages.user.toLowerCase();
        if (user === 'eu') {
            return (
                <SaidaMenssagens
                onDoubleClick={() => this.onDelete(index)}
                user={'eu'}
                key={index}
                >
                        {messages.text}
                </SaidaMenssagens>
            );
        } else {
            return(
                <SaidaMenssagens
                onDoubleClick={() => this.onDelete(index)}
                key={index}
                >
                    <SaidaUsuario>{messages.user}</SaidaUsuario>
                    {messages.text}
                </SaidaMenssagens>
            );
        }
    });
    return (
        <Container>
            <Saida>{messagesToRender}</Saida>
                
                

                <EntradaUsuario
                type='text'
                placeholder='Nome'
                onChange={this.onChangeUser}
                value={this.state.user}
                />
                 <Entrada>
            <EntradaMenssagem
                  type='text'
                  placeholder='Mensagem'
                  onChange={this.onChangeMessage}
                  value={this.state.text}
                  onKeyPress={this.enviarComEnter}/> 

                  <Button id='botao'onClick={this.onSend} onKeyPress={this.enviarComEnter}>
                  <FaTelegram id='icone' name='enviar' size ={26} color ='#ffffff'/>
                  </Button>

                  </Entrada>
              </Container>
              );
 }
}


