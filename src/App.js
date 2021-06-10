import React from 'react';
import Produto from './components/Produto/Produto.jsx'

export class App extends React.Component {
  
  state = {

      minFilter: 100,
      maxFilter: 1000,
      nameFilter:"prod",

    arrayProdutos: [
          {titulo: "produto a", preco: 5000, img: 1},
          {titulo: "produto b", preco: 3000, img: 2},
          {titulo: "produto c", preco: 500, img: 3},
          {titulo: "produto d", preco: 100, img: 4},
    ],
    carrinho: [

    ],
  }


  funcaoAdiciona = () => {

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