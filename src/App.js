import React from 'react';
import CarrinhoCompras from './components/CarrinhoDeCompras/CarrinhoCompras.jsx';
import Produto from './components/Produto/Produto.jsx'

export class App extends React.Component {
  
  state = {
    arrayProdutos: [
          {titulo: "a", preco: 1, img: 1},
          {titulo: "b", preco: 1, img: 2},
          {titulo: "c", preco: 1, img: 3},
          {titulo: "d", preco: 1, img: 4},
    ],
    carrinho: [
      {
        id: 4,
        nome: 'Produto 4',
        preco: 10,
        img: 'https://picsum.photos/200/200?a=4',
        quantidade: 1
      },
      {
        id: 3,
        nome: 'Produto 3',
        preco: 30,
        img: 'https://picsum.photos/200/200?a=3',
        quantidade: 2
      }
    ],
  }


  funcaoAdiciona = () => {

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



    return (




      <div>
        <header></header>

        <main>
          {/* <Filtro1>{filtroMinMax}{Busca}</Filtro1> */}

          
          <Produto
          produtos={this.state.arrayProdutos}
          adiciona={()=>{this.funcaoAdiciona()}}
          />
          
         
          
          <CarrinhoCompras
          itens= {this.state.carrinho}
          excluirProdutoDoCarrinho={this.excluirProdutoDoCarrinho}
          />

        </main>

        <footer></footer>

      </div>
    
    
    
    
    
    
    )
  }
}

export default App;