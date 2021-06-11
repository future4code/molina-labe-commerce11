import React from 'react'
import styled from 'styled-components'

const CardCotainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 300px;
    max-width: 300px;
    margin: 2vh 2vh;
` 


const Titulo = styled.h6`

`
const Preco = styled.p`

`
const Imagem = styled.div`

`
const BotaoAdiciona = styled.button`

`

export default class Card extends React.Component {
    
    render() {
       
        return (

            <CardCotainer>
            
                <Imagem>{this.props.img}</Imagem>
                <Titulo>{this.props.titulo}</Titulo>
                <Preco>R${this.props.preco}</Preco>
                <BotaoAdiciona
                onClick={()=>this.props.adiciona(this.props.id)}

                >adiciona
                </BotaoAdiciona>
            

            </CardCotainer>

        )
    }
} 
