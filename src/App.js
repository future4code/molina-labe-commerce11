import React from 'react';
import Produto from './components/Produto/Produto.jsx'
import Filtro from './components/filtro.jsx';


export class App extends React.Component {
  
  state = {
    arrayProdutos: [
          {titulo: "a", preco: 100, img: 1},
          {titulo: "b", preco: 200, img: 2},
          {titulo: "c", preco: 300, img: 3},
          {titulo: "d", preco: 400, img: 4},
    ],
    carrinho: [

    ]
  }

 
  funcaoAdiciona = () => {

  }
  
  
  render () {

    return (




      <div>
        <header></header>


      {/* ROBIN */}
        <main>
          <div>
            <h1>FILTROS</h1>
            <Filtro filteredProducts={this.filteredProducts} />
          <arrayProdutos
            addProduct={this.addProduct}
            onChangeMin={this.fromMaxToMin}
            onChangeMax={this.fromMinToMax}
            products={this.state.filteredProducts}
          />
          </div>

          
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