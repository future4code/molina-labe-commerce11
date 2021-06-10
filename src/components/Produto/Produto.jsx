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

export default class Produto extends React.Component {

  state = {
    sort: "decrescente",
  }

  render() {
  
    const listaProdutos = this.props.produtos
    .filter((produto)=>{return produto.preco <= this.props.maxFilter})
    .filter((produto) => {return produto.preco >= this.props.minFilter})
    .filter((produto)=>{return produto.titulo.includes(this.props.nameFilter)})
    .sort((a,b)=>{if (this.state.sort === "crescente") {return a.preco - b.preco } else {return b.preco - a.preco }})

    return (
      <MainContainer>
        <ContainerQtEFiltro>
          <h6>Quantidade de Produtos: {listaProdutos.length}</h6>
          <h6>Filtrar por ordem:</h6>
        </ContainerQtEFiltro>


        <ContainerProdutos>
        
        {listaProdutos.map((produto)=>{
          return <Card
          img={produto.img}
          titulo={produto.titulo}
          preco={produto.preco}
          adiciona={()=>{this.props.funcaoAdiciona()}}
          />
        })}

        </ContainerProdutos>
      

      </MainContainer>
    )
  }
}