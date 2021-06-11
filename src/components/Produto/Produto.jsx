import React from "react"
import Card from '../Produto/Card.jsx'
import styled from 'styled-components'

const MainContainer= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:80%;  //----------------alterar depois para 100%
  margin: 0 auto;
  background-color: aqua; //------------tirar isso depois
  `

const ContainerQtEFiltro = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  background-color: bisque;//------------tirar isso depois

`

const ContainerProdutos = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;

  background-color: blue;//------------tirar isso depois

`

const ContainerFiltro = styled.div`
  display:flex;
  flex-direction:row;
` 

export default class Produto extends React.Component {

  state = {
    ordem: "decrescente",
  }

  ordernarMaiorMenor = (event) => {
    return this.setState({ordem: event.target.value})
  }

  render() {
  
    const listaProdutos = this.props.produtos
    .filter((produto)=>{return produto.preco <= this.props.maxFilter})
    .filter((produto) => {return produto.preco >= this.props.minFilter})
    .filter((produto)=>{return produto.titulo.includes(this.props.nameFilter)})
    .sort((a,b)=>{if (this.state.ordem === "crescente") {return a.preco - b.preco } else {return b.preco - a.preco }})


    return (
      <MainContainer>
        <ContainerQtEFiltro>
          <h6>Quantidade de Produtos: {listaProdutos.length}</h6>
          <ContainerFiltro>
          <p>Filtrar por ordem:</p>
          <select value={this.state.sort} onChange={this.ordernarMaiorMenor}>
            <option value={'crescente'}>Menor Preço</option>
            <option value={'decrescente'}>Maior Preço</option>
          </select>
          </ContainerFiltro>
        </ContainerQtEFiltro>


        <ContainerProdutos>
        
        {listaProdutos.map((produto)=>{
          return <Card
          img={produto.img}
          titulo={produto.titulo}
          preco={produto.preco}
          id={produto.id}
          adiciona={this.props.adiciona}
          />
        })}

        </ContainerProdutos>
      

      </MainContainer>
    )
  }
}