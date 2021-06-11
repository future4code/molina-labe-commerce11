import React from 'react';
import Produto from './components/Produto/Produto.jsx'
import Filter from './components/Filter/Filter.jsx'

export class App extends React.Component {
  
  state = {

      minFilter: 100,
      maxFilter: 1000,
      nameFilter:"prod",

    arrayProdutos: [
          {id: 1, titulo: "produto a", img: 1, preco: 5000},
          {id: 2, titulo: "produto b", img: 2, preco: 3000},
          {id: 3, titulo: "produto c", img: 3, preco: 500},
          {id: 4, titulo: "produto d", img: 4, preco: 100},
    ],
    carrinho: [
      {id: 4, titulo: "produto d", img: 4, preco: 100, quantidade: 2}

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

  
  
  render () {
    
    console.log(this.state.carrinho)

    return (




      <div>
        <header></header>

        <main>
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
          
          {/*<Carrinho> </Carrinho>*/}

        </main>

        <footer></footer>

      </div>
    
    
    
    
    
    
    )
  }
}

export default App;