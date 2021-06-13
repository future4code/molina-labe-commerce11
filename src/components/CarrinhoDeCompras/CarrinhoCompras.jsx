import React from 'react';
import { CarrinhoItem } from './CarrinhoItem';
import styled from 'styled-components';

const CarrinhoContainer = styled.div`
    width: 25%;
    border: 1px solid lightgray;
    padding: 8px;
    margin-left: 1%;
       @media (max-width: 414px) {
        width: 90%;
  }
`;

const ListaDoCarrinho = styled.div`
    display: grid;
    gap: 8px;
`;

export class CarrinhoCompras extends React.Component {
    getValorTotal = () => {
        let valorTotal = 0
      
        for (let produto of this.props.itens) {
            valorTotal += produto.preco * produto.quantidade
        }

        return valorTotal
    }

    render() {
        return <CarrinhoContainer>
            <h3>Carrinho de Compras:</h3>
            <ListaDoCarrinho>
                
                {this.props.itens.map((produto,index) => {
                    return <CarrinhoItem key = {index}
                        itens ={produto}
                        titulo={produto.titulo}
                        excluirProdutoDoCarrinho={this.props.excluirProdutoDoCarrinho}
                    />
                })}
            </ListaDoCarrinho>
            <p>Valor Total: R${this.getValorTotal().toFixed(2)}</p>
        </CarrinhoContainer>
    }
}
export default CarrinhoCompras;