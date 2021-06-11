import React from 'react';
import { CarrinhoItem } from './CarrinhoItem';
import styled from 'styled-components';

const CarrinhoContainer = styled.div`
    width: 25%;
    border: 1px solid black;
    padding: 8px;
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
            <p>Valor Total: R${this.getValorTotal()},00</p>
        </CarrinhoContainer>
    }
}
export default CarrinhoCompras;