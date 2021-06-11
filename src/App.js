import React from 'react';
import Produto from './components/Produto/Produto.jsx'
import Filtro from './components/filtro.jsx';


export class App extends React.Component {
  
  state = {
    arrayProdutos: [
          {name: "a", value: 100, img: 1},
          {name: "b", value: 200, img: 2},
          {name: "c", value: 300, img: 3},
          {name: "d", value: 400, img: 4},
    ],
    carrinho: [

    ],
    //......................................................T e s t e . v
    filteredProducts: [
      {name: "a", value: 100, img: 1},
      {name: "b", value: 200, img: 2},
      {name: "c", value: 300, img: 3},
      {name: "d", value: 400, img: 4},
    ],
    //......................................................T e s t e . ^
  }


  onChange
 
  funcaoAdiciona = () => {

  }
  
  //......................................................T e s t e . v 
  filteredProducts = (min, max, name) => {
    const newFilteredProduct = this.state.arrayProdutos.filter((product) => {
      if (min === "" && max === "") {
        return product
      }
      else if (product.value >= min && product.value <= max) {
        return product
      }
      return true
    })

    let newFilteredProductName = [];
    
    if (!(name === "")) {
    newFilteredProductName = newFilteredProduct.filter((product) => {
    if (product.name.includes(name)) {
          return product;
        }
        return true
      });
      this.setState({ filteredProducts: newFilteredProductName });
    } else {
      this.setState({ filteredProducts: newFilteredProduct });
    }
  };
 //..........................................................T e s t e . ^
  
  render () {

    return (




      <div>
        <header></header>


      {/* ROBIN */}
        <main>
          <div>
            <h1>FILTROS</h1>
            <Filtro filteredProducts={this.filteredProducts} />
          min
          max
          busca


          <arrayProdutos
            addProduct={this.addProduct}
            onChangeMin={this.fromMaxToMin}
            onChangeMax={this.fromMinToMax}
            products={this.state.filteredProducts}
          />
          </div>

          
          <Produto
          produtos={this.state.filteredProducts}
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