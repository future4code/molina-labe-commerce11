import React from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends Reac.Component {
  


  
  render () {



    return (




      <div>
        <header></header>

        <main>

          <Filtro1>
            {filtroMinMax}
            {Busca}
          </Filtro1>

          <Produto>
            
            {qtProdutos}
            {filtroOrdenacao}
            <Cards/>

          </Produto>

          <Carrinho>
            
          </Carrinho>

        </main>

        <footer></footer>

      </div>
    
    
    
    
    
    
    )
  }
}

export default App;