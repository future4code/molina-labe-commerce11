import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
  p {
    margin: 0;
  }
`


export class CarrinhoItem extends React.Component {
    render() {
        return <ItemContainer>
            
            <p>{this.props.itens.nome}</p>
            <p>{this.props.itens.quantidade}Un</p>
            <button onClick={() => this.props.excluirProdutoDoCarrinho(this.props.itens.id)}>
                Excluir
            </button>
        </ItemContainer>
    }
}
export default CarrinhoItem