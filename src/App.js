import React from 'react';
import Produto from './components/Produto/Produto.jsx'
import Filter from './components/Filter/Filter.jsx'
import CarrinhoCompras from './components/CarrinhoDeCompras/CarrinhoCompras.jsx';
import styled from 'styled-components'
// import {C1,C2,C3,C4,C5,C6,C7,C8,C9,C10} from './components/Produto/Imagens.jsx';
// import C1 from '../../img/c1.png'
// import C2 from '../../img/c2.jpg'
// import C3 from '../../img/c3.jpg'
// import C4 from '../../img/c4.png'
// import C5 from '../../img/c5.png'
// import C6 from '../../img/c6.jpg'
// import C7 from '../../img/c7.jpg'
// import C8 from '../../img/c8.jpg'
// import C9 from '../../img/c9.jpg'
// import C10 from '../../img/c10.jpg'


 const ContainerApp = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    background-color: red;
 `

  const ContainerMain = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
 `

export class App extends React.Component {
  
  state = {

      minFilter: 0,
      maxFilter: 5000,
      nameFilter:"prod",

    arrayProdutos: [
          {id: 1, titulo: "produto a", img: '../../img/c1.png', preco: 57.98}, 
          {id: 2, titulo: "produto b", img: '../../img/c2.jpg', preco: 75.45},
          {id: 3, titulo: "produto c", img: '../../img/c3.jpg', preco: 114.86},
          {id: 4, titulo: "produto d", img: '../../img/c4.png', preco: 113.57},
          {id: 5, titulo: "produto e", img: '../../img/c5.png', preco: 85.12},
          {id: 6, titulo: "produto f", img: '../../img/c6.jpg', preco: 69.17},
          {id: 7, titulo: "produto g", img: '../../img/c7.jpg', preco: 93.72},
          {id: 8, titulo: "produto h", img: '../../img/c8.jpg', preco: 82.23},
          {id: 9, titulo: "produto i", img: '../../img/c9.jpg', preco: 70.32},
          {id: 10, titulo: "produto j", img: '../../img/c10.jpg', preco: 122.42},
    ],
    carrinho: [
      {
        id: 4,
        titulo: 'produto d',
        preco: 10,
        img: 'https://picsum.photos/200/200?a=4',
        quantidade: 1
      },
      {
        id: 3,
        titulo: 'produto c',
        preco: 30,
        img: 'https://picsum.photos/200/200?a=3',
        quantidade: 2
      }

    ],
  }

  minFilter = (event) => {
    
  }
  
  maxFilter = (event) => {
  
  }
  
  nameFilter = (event) => {
  
  }
  

    funcaoAdiciona = (id) => {
      const produtosNoCarrinho = this.state.carrinho.find(produto => id === produto.id)
  
      if(produtosNoCarrinho) {

        const atualizadaCarrinho = this.state.carrinho.map(produto => {
          if(id === produto.id) {
            return {
              ...produto,
              quantidade: produto.quantidade + 1
            }
          }
  
          return produto
        })
  
        return this.setState({carrinho: atualizadaCarrinho})

      } else {
        
        const produtoDoArray = this.state.arrayProdutos.find(produto => id === produto.id)

        console.log(produtoDoArray)
  
        const inserirNoCarrinho = [...this.state.carrinho, {...produtoDoArray, quantidade: 1}]
  
        return this.setState({carrinho: inserirNoCarrinho})
      }
     
    }

    excluirProdutoDoCarrinho = (itemId) => {
      const novoCarrinho = this.state.carrinho.map((produto) => {
        if(produto.id === itemId) {
          return{
            ...produto,
            quantidade: produto.quantidade -1
          }
        }
        return produto
      }).filter((produto) => produto.quantidade > 0)
      this.setState({carrinho:novoCarrinho})
    }
  
  render () {
    
    console.log(this.state.carrinho)

    return (




      <ContainerApp>
        <header>
          <h1>
            .::LabCommerce::.
          </h1>
        </header>
       
        <ContainerMain>
          <Filter   
            minFilter={this.state.minFilter}
            maxFilter={this.state.maxFilter}
            nameFilter={this.state.nameFilter}
            
            />
                 
          <Produto
          produtos={this.state.arrayProdutos}
          adiciona={this.funcaoAdiciona}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          />
          
          <CarrinhoCompras
          itens= {this.state.carrinho}
          excluirProdutoDoCarrinho={this.excluirProdutoDoCarrinho}
          />

          </ContainerMain>

        <footer></footer>

      </ContainerApp>
    
    
    
    
    
    
    )
  }
}

export default App;