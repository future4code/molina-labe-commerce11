import React from 'react';
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
          />
          
          
          {/*<Carrinho> </Carrinho>*/}

        </main>

        <footer></footer>

      </div>
    
    
    
    
    
    
    )
  }
}

export default App;