import React from 'react';
import CarrinhoCompras from './components/CarrinhoDeCompras/CarrinhoCompras.jsx';
import Produto from './components/Produto/Produto.jsx'
import {C1,C2,C3,C4,C5,C6,C7,C8,C9,C10} from './components/Produto/Imagens.jsx'
import Filter from './components/Filter/Filter.jsx'
import CarrinhoCompras from './components/CarrinhoDeCompras/CarrinhoCompras.jsx';
import styled from 'styled-components'

 const ContainerApp = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
`

const ContainerMain = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
      @media (max-width: 414px) {
        display: flex;
        flex-direction: column;
        align-items: center;}
 `

  const Header = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  `

  const Footer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  `

export class App extends React.Component {
  
  state = {

      minFilter: 0,
      maxFilter: 150,
      nameFilter:"prod",

    arrayProdutos: [
          {id: 1, titulo: "produto a", img: C1, preco: 57.98}, 
          {id: 2, titulo: "produto b", img: C2, preco: 75.45},
          {id: 3, titulo: "produto c", img: C3, preco: 114.86},
          {id: 4, titulo: "produto d", img: C4, preco: 113.57},
          {id: 5, titulo: "produto e", img: C5, preco: 85.12},
          {id: 6, titulo: "produto f", img: C6, preco: 69.17},
          {id: 7, titulo: "produto g", img: C7, preco: 93.72},
          {id: 8, titulo: "produto h", img: C8, preco: 82.23},
          {id: 9, titulo: "produto i", img: C9, preco: 70.32},
          {id: 10, titulo: "produto j", img: C10, preco: 122.42},
    ],
    carrinho: [
      // {
      //   id: 4,
      //   titulo: 'produto d',
      //   preco: 10,
      //   img: 'https://picsum.photos/200/200?a=4',
      //   quantidade: 1
      // },
      // {
      //   id: 3,
      //   titulo: 'produto c',
      //   preco: 30,
      //   img: 'https://picsum.photos/200/200?a=3',
      //   quantidade: 2
      // }
    ],
  }

  componentDidUpdate() {
    localStorage.setItem('carrinho',JSON.stringify(this.state.carrinho))
  };
  componentDidMount() {
    const itemsCarrinho = localStorage.getItem('carrinho')
    const atualizaCarrinho = JSON.parse(itemsCarrinho)
    if(atualizaCarrinho) {
      this.setState({carrinho: atualizaCarrinho})
    }
  };


  filtroMin = (event) => {
    this.setState({minFilter: Number(event.target.value)})
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
  
  filtroMax = (event) => {
    this.setState({maxFilter: Number(event.target.value)})

  }
  
  filtroBusca = (event) => {
    this.setState({nameFilter: event.target.value})

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
        <Header>
          <h1>
            .::LabCommerce::.
          </h1>
        </Header>
       
        <ContainerMain>
          <Filter   
            filtroMin={this.state.minFilter}
            filtroMax={this.state.maxFilter}
            filtroBusca={this.state.nameFilter}
            onChangeMax={this.filtroMax}
            onChangeMin={this.filtroMin}
            onChangeBusca={this.filtroBusca}            
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

        <Footer> projeto LabCommerce 2021</Footer>

      </ContainerApp>
    
    
    
    
    
    
    )
  }
}

export default App;